import React, { useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import type { EvidenceFile } from '../../../types/complaint';
import { validateEvidenceFile } from '../../../utils/complaintValidation';
import { Upload, AlertCircle, ShieldAlert } from 'lucide-react';

interface Props {
  evidenceList: EvidenceFile[];
  onAddEvidence: (newFile: EvidenceFile) => void;
}

export const EvidenceUploader: React.FC<Props> = ({ onAddEvidence }) => {
  const { language } = useLanguage();
  const [fileError, setFileError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const validationErr = validateEvidenceFile(file, language);

    if (validationErr) {
      setFileError(validationErr);
      return;
    }

    const newEvidence: EvidenceFile = {
      id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      url: URL.createObjectURL(file),
      file: file,
    };

    onAddEvidence(newEvidence);
    // Reset file input
    e.target.value = '';
  };

  return (
    <div className="space-y-4">
      {/* Upload Zone */}
      <div className="border-2 border-dashed border-slate-300 hover:border-blue-900 rounded-2xl p-8 text-center space-y-3 bg-slate-50/50 transition-colors relative">
        <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center mx-auto font-bold">
          <Upload className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-900">
            {language === 'hi' ? 'साक्ष्य फाइलें स्थानीय रूप से चुनें' : 'Choose Local Evidence Files'}
          </h3>
          <p className="text-xs text-slate-500 font-sans">
            {language === 'hi'
              ? 'दस्तावेज (PDF), फोटो (JPG/PNG), अथवा रिकॉर्डिंग (MP3/MP4/WAV/MOV)'
              : 'Documents (PDF), Images (JPG/PNG), or Recordings (MP3/MP4/WAV/MOV)'}
          </p>
        </div>

        <div>
          <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer shadow transition-colors">
            <Upload className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'ब्राउज़ करें (Choose File)' : 'Select File'}</span>
            <input type="file" onChange={handleFileChange} className="hidden" />
          </label>
        </div>

        <div className="text-[11px] text-slate-400 font-mono pt-1">
          {language === 'hi' ? 'अधिकतम फाइल आकार: 10 MB प्रति फाइल' : 'Maximum size limit: 10 MB per file'}
        </div>
      </div>

      {/* Error Banner */}
      {fileError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-xs font-bold text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{fileError}</span>
        </div>
      )}

      {/* Local Privacy Disclaimer */}
      <div className="p-3.5 bg-slate-100 border border-slate-200 rounded-xl flex items-start gap-2.5 text-[11px] text-slate-600">
        <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
        <span className="leading-relaxed">
          {language === 'hi'
            ? 'केवल स्थानीय प्रदर्शन: चुनी गई फाइलें केवल आपके ब्राउज़र की मेमोरी में दिखाई देती हैं और किसी भी सर्वर पर अपलोड नहीं की जाती हैं।'
            : 'Local Demo Only: Selected files are processed locally inside your browser memory for demonstration and are not uploaded to any remote server.'}
        </span>
      </div>
    </div>
  );
};
