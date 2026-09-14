import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { FileCheck, ShieldAlert } from 'lucide-react';

export const EvidenceGuidance: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm font-sans">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-blue-950">
        <FileCheck className="w-5 h-5 text-amber-500" />
        <h4 className="text-base font-bold uppercase tracking-wider">
          {language === 'hi' ? 'साक्ष्य संरक्षण एवं रिपोर्टिंग नियम' : 'EVIDENCE & REPORTING PROTOCOL'}
        </h4>
      </div>

      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
        {language === 'hi'
          ? 'यदि आपके पास प्रामाणिक दस्तावेजी या डिजिटल साक्ष्य मौजूद हैं, तो उन्हें बिना किसी बदलाव या जाली निर्माण के सुरक्षित रखें। आधिकारिक शिकायत चैनल पर केवल सत्य और वास्तविक जानकारी प्रस्तुत करें।'
          : 'If you possess relevant evidence, preserve it without altering or fabricating it. Use official reporting channels to submit information according to statutory requirements.'}
      </p>

      <div className="p-3.5 bg-slate-900 text-white rounded-2xl flex items-center gap-3 text-xs">
        <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0" />
        <span className="font-sans">
          {language === 'hi'
            ? 'गोपनीय शिकायत दर्ज करने के लिए हमारे "शिकायत दर्ज करें" पोर्टल का उपयोग करें।'
            : 'To file a confidential report, use our designated Complaint Reporting portal.'}
        </span>
      </div>
    </div>
  );
};
