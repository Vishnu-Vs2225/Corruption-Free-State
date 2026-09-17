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
          {language === 'hi' ? 'ℹ शिकायत स्थिति ट्रैकिंग निर्देश' : 'ℹ COMPLAINT STATUS TRACKING INSTRUCTIONS'}
        </span>
        <p className="leading-relaxed text-slate-700 font-sans">
          {language === 'hi'
            ? 'अपनी दर्ज शिकायत की स्थिति एवं प्रगति समयसीमा देखने के लिए आबंटित संदर्भ संख्या दर्ज करें।'
            : 'Enter your assigned reference code to inspect the real-time progress timeline and department status.'}
        </p>
      </div>
    </div>
  );
};
