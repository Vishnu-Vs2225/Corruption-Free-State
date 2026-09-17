import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Info } from 'lucide-react';

export const DataNotice: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="p-4 bg-amber-50/95 border-2 border-amber-400/80 rounded-2xl flex items-start gap-3 shadow-sm text-slate-800">
      <div className="p-2 bg-amber-500/20 text-amber-900 rounded-xl flex-shrink-0 mt-0.5">
        <Info className="w-5 h-5 text-amber-800" />
      </div>

      <div className="space-y-1 text-xs">
        <span className="font-bold block uppercase tracking-wider text-amber-950 font-sans">
          {language === 'hi' ? 'ℹ सार्वजनिक पारदर्शिता रजिस्टर सूचना' : 'ℹ PUBLIC TRANSPARENCY REGISTER NOTICE'}
        </span>
        <p className="leading-relaxed text-slate-700 font-sans">
          {language === 'hi'
            ? 'सार्वजनिक पारदर्शिता, बजटीय आवंटन एवं जन-सेवा अधिकारों की सत्यापित जानकारी हेतु नीचे दिए गए रजिस्टर की समीक्षा करें।'
            : 'Explore public budget allocations, open government tenders, asset disclosures, and citizen charter statutory standards.'}
        </p>
      </div>
    </div>
  );
};
