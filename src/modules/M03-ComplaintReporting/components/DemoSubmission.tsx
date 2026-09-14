import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { AlertTriangle, Home, RotateCcw, ArrowRight } from 'lucide-react';

interface Props {
  onReset: () => void;
}

export const DemoSubmission: React.FC<Props> = ({ onReset }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white border-2 border-amber-500 rounded-2xl p-8 sm:p-12 shadow-2xl text-center space-y-6 max-w-2xl mx-auto my-8">
      {/* Icon Badge */}
      <div className="w-20 h-20 bg-amber-100 border-2 border-amber-500 text-amber-800 rounded-full flex items-center justify-center mx-auto shadow-inner">
        <AlertTriangle className="w-10 h-10" />
      </div>

      {/* Main Title & Disclaimer */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold font-mono uppercase tracking-widest">
          <span>{language === 'hi' ? 'केवल प्रदर्शन उद्देश्य (DEMONSTRATION ONLY)' : 'DEMONSTRATION ONLY'}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-blue-950 uppercase tracking-tight">
          {language === 'hi'
            ? 'कोई शिकायत प्रेषित अथवा संग्रहीत नहीं की गई है'
            : 'No Complaint Has Been Transmitted or Stored'}
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-lg mx-auto">
          {language === 'hi'
            ? 'यह वेबसाइट एक स्टैटिक डेमोस्ट्रेशन इंटरफ़ेस है। आपके द्वारा दर्ज किया गया विवरण किसी भी सरकारी विभाग, जांच एजेंसी या सर्वर को नहीं भेजा गया है।'
            : 'This static website does not transmit or store complaints. Your report was processed locally inside your browser and no official complaint has been submitted.'}
        </p>
      </div>

      {/* REFERENCE ID BOX (EXPLICIT DEMO NOTICE) */}
      <div className="p-6 bg-slate-900 text-white rounded-xl space-y-2 max-w-md mx-auto shadow-inner border border-slate-800">
        <div className="text-xs font-mono text-amber-400 font-bold uppercase">
          {language === 'hi' ? 'शिकायत संदर्भ कोड (Reference Code):' : 'Complaint Reference Code:'}
        </div>
        <div className="text-lg sm:text-xl font-bold font-mono text-slate-300">
          {language === 'hi' ? 'उत्पन्न नहीं हुआ — केवल प्रदर्शन' : 'Not generated — demonstration only'}
        </div>
        <div className="text-[11px] text-slate-400 font-sans pt-1">
          {language === 'hi'
            ? 'केवल लाइव बैकएंड प्रणाली में ही वास्तविक संदर्भ नंबर जनरेट किया जाएगा।'
            : 'Official reference IDs are only generated in live backend systems.'}
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Link
          to="/"
          className="w-full sm:w-auto px-6 py-3.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow"
        >
          <Home className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'मुख्य पृष्ठ पर वापस जाएं' : 'Return Home'}</span>
        </Link>

        <Link
          to="/track-complaint"
          className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors inline-flex items-center justify-center gap-2"
        >
          <span>{language === 'hi' ? 'ट्रैकिंग डेमो देखें' : 'View Tracking Demo'}</span>
          <ArrowRight className="w-4 h-4 text-blue-950" />
        </Link>

        <button
          type="button"
          onClick={onReset}
          className="w-full sm:w-auto px-6 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors inline-flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{language === 'hi' ? 'पुनः प्रयास करें' : 'Start New Demo'}</span>
        </button>
      </div>
    </div>
  );
};
