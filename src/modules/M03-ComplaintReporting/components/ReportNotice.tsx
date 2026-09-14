import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { AlertCircle } from 'lucide-react';

export const ReportNotice: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="p-4 bg-amber-50 border-2 border-amber-400/80 rounded-2xl flex items-start gap-3 text-xs text-amber-950 shadow-sm">
      <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
      <div className="space-y-1">
        <span className="font-bold block uppercase tracking-wider text-amber-900">
          {language === 'hi' ? 'ℹ महत्वपूर्ण सूचना — स्टैटिक डेमो पोर्टल' : 'ℹ IMPORTANT DEMONSTRATION NOTICE'}
        </span>
        <p className="leading-relaxed text-slate-700 font-sans">
          {language === 'hi'
            ? 'यह वेबसाइट वर्तमान में एक केवल-सूचनात्मक/डेमो इंटरफ़ेस है। यहां उपलब्ध फॉर्म एक प्रदर्शन है और यह किसी वास्तविक शिकायत को किसी सरकारी अधिकारी या सर्वर को प्रेषित अथवा संग्रहीत नहीं करता है।'
            : 'This website is currently a static public-information interface. The report form shown here is a demonstration and does not transmit or store a real complaint.'}
        </p>
      </div>
    </div>
  );
};
