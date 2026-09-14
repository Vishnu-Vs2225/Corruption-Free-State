import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { PlayCircle } from 'lucide-react';

interface DemoTrackingOptionProps {
  onSelectDemo: (refCode: string) => void;
}

export const DemoTrackingOption: React.FC<DemoTrackingOptionProps> = ({ onSelectDemo }) => {
  const { language } = useLanguage();

  return (
    <div className="p-4 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-md">
      <div className="space-y-1 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider">
          <PlayCircle className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'डेमो मोड' : 'Demo Mode'}</span>
        </div>
        <p className="text-xs text-slate-300 font-sans">
          {language === 'hi'
            ? 'प्रस्तावित शिकायत ट्रैकिंग इंटरफ़ेस का उदाहरण देखने के लिए डेमो बटन पर क्लिक करें।'
            : 'Click demo option to view illustrative sample tracking data.'}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onSelectDemo('DEMO-0001')}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono rounded-xl transition-colors shadow focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          {language === 'hi' ? 'डेमो 1: DEMO-0001 देखें' : 'View DEMO-0001'}
        </button>
        <button
          type="button"
          onClick={() => onSelectDemo('DEMO-0002')}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 text-xs font-bold font-mono rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
          {language === 'hi' ? 'डेमो 2: DEMO-0002 देखें' : 'View DEMO-0002'}
        </button>
      </div>
    </div>
  );
};
