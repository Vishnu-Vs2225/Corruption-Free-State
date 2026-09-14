import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Info } from 'lucide-react';

export const StaticTrackingNotice: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="p-4 bg-amber-50/90 border-2 border-amber-400/80 rounded-2xl flex items-start gap-3 shadow-sm text-slate-800">
      <div className="p-2 bg-amber-500/20 text-amber-900 rounded-xl flex-shrink-0 mt-0.5">
        <Info className="w-5 h-5 text-amber-800" />
      </div>

      <div className="space-y-1 text-xs">
        <span className="font-bold block uppercase tracking-wider text-amber-950 font-sans">
          {language === 'hi' ? 'ℹ सूचना: स्टैटिक वेबसाइट सीमाबद्धता' : 'ℹ INFORMATION: Static Website Limitation'}
        </span>
        <p className="leading-relaxed text-slate-700 font-sans">
          {language === 'hi'
            ? 'इस स्टैटिक वेबसाइट संस्करण में लाइव शिकायत ट्रैकिंग कनेक्टेड नहीं है। यहाँ दर्शाया गया ट्रैकिंग इंटरफ़ेस केवल प्रदर्शन एवं समझ (demonstration) के उद्देश्य से प्रदान किया गया है।'
            : 'Live complaint tracking is not connected in this static website version. The tracking interface shown here is for demonstration purposes only.'}
        </p>
      </div>
    </div>
  );
};
