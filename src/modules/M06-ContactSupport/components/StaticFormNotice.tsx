import React from 'react';
import { CONTACT_CONFIG } from '../data/contact';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Info, PhoneCall } from 'lucide-react';

export const StaticFormNotice: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="p-4 bg-amber-50/95 border-2 border-amber-400/80 rounded-2xl space-y-2 text-slate-800 shadow-sm">
      <div className="flex items-start gap-2.5">
        <Info className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <span className="font-bold block uppercase tracking-wider text-amber-950 font-sans">
            {language === 'hi' ? 'ℹ नागरिक पूछताछ एवं सहायता निर्देश' : 'ℹ CITIZEN INQUIRY & SUPPORT NOTICE'}
          </span>
          <p className="leading-relaxed text-slate-700 font-sans">
            {language === 'hi'
              ? 'आधिकारिक सहायता के लिए नीचे दिए गए फॉर्म का उपयोग करें या सीधे हमारी हेल्पलाइन पर संपर्क करें।'
              : 'Use the inquiry form below or connect directly with our dedicated helpline for official assistance.'}
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-amber-300/60 flex items-center justify-between text-xs font-sans">
        <span className="text-slate-700">
          {language === 'hi' ? 'तत्काल उत्तर हेतु हमारी हेल्पलाइन पर कॉल करें:' : 'For direct assistance, call helpline:'}
        </span>
        <a
          href={`tel:${CONTACT_CONFIG.phone}`}
          className="inline-flex items-center gap-1 font-mono font-bold text-blue-950 underline hover:text-amber-700"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span>{CONTACT_CONFIG.phone}</span>
        </a>
      </div>
    </div>
  );
};
