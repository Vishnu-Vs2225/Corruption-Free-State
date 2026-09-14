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
          {language === 'hi' ? 'ℹ सूचना: डेटा उपलब्धता एवं स्टैटिक प्रकटीकरण' : 'ℹ DATA AVAILABILITY & STATIC DISCLOSURE'}
        </span>
        <p className="leading-relaxed text-slate-700 font-sans">
          {language === 'hi'
            ? 'यह वेबसाइट एक स्टैटिक जन-सूचना इंटरफ़ेस है। यहाँ प्रदर्शित डेटा सूचनात्मक एवं प्रदर्शन सामग्री है, जब तक कि इसे किसी आधिकारिक सरकारी स्रोत के रूप में निर्दिष्ट न किया गया हो।'
            : 'This website is a static public-information interface. Data displayed here is informational or demonstration content unless specifically identified as an official source.'}
        </p>
      </div>
    </div>
  );
};
