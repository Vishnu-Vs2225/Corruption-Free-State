import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Search, Sparkles } from 'lucide-react';

interface TrackingEmptyStateProps {
  onTryDemo: () => void;
}

export const TrackingEmptyState: React.FC<TrackingEmptyStateProps> = ({ onTryDemo }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-sm">
      <div className="w-16 h-16 bg-blue-50 border-2 border-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-900">
        <Search className="w-8 h-8 text-blue-950" />
      </div>

      <div className="space-y-2 max-w-md mx-auto">
        <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight">
          {language === 'hi' ? 'शिकायत की स्थिति जांचें' : 'Track a Complaint'}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
          {language === 'hi'
            ? 'प्रगति की जांच करने के लिए ऊपर अपनी शिकायत संदर्भ संख्या दर्ज करें।'
            : 'Enter your complaint reference number above to check its status.'}
        </p>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={onTryDemo}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold font-mono rounded-xl transition-all shadow hover:shadow-md"
        >
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>{language === 'hi' ? 'संदर्भ कोड "CFS-REF-2026-001" आज़माएं' : 'Try Reference Code "CFS-REF-2026-001"'}</span>
        </button>
      </div>
    </div>
  );
};
