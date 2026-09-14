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
            {language === 'hi' ? 'ℹ संपर्क फ़ॉर्म प्रदर्शन सूचना' : 'ℹ CONTACT FORM DEMONSTRATION NOTICE'}
          </span>
          <p className="leading-relaxed text-slate-700 font-sans">
            {language === 'hi'
              ? 'यह संपर्क फ़ॉर्म वर्तमान में केवल प्रदर्शन (demonstration) हेतु प्रदान किया गया है और किसी सर्वर सबमिशन सेवा से कनेक्टेड नहीं है।'
              : 'This contact form is currently for demonstration and is not connected to a live submission service.'}
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
