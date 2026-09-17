import React from 'react';
import type { DemoComplaint } from '../types/tracking';
import { ComplaintSummary } from './ComplaintSummary';
import { ComplaintTimeline } from './ComplaintTimeline';
import { useLanguage } from '../../../i18n/LanguageContext';
import { AlertCircle, HelpCircle } from 'lucide-react';

interface TrackingResultProps {
  searchedRef: string;
  result: DemoComplaint | null;
  onTryDemo: () => void;
}

export const TrackingResult: React.FC<TrackingResultProps> = ({ searchedRef, result, onTryDemo }) => {
  const { language } = useLanguage();

  if (!result) {
    return (
      <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4 shadow-sm animate-in fade-in duration-200">
        <div className="w-14 h-14 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center mx-auto text-amber-700">
          <AlertCircle className="w-7 h-7" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-lg font-bold text-slate-900">
            {language === 'hi' ? 'संदर्भ संख्या की स्थिति नहीं मिली' : 'Reference Number Record Not Found'}
          </h3>
          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            {language === 'hi'
              ? `संदर्भ कोड "${searchedRef}" के लिए कोई रिकॉर्ड नहीं मिला। कृपया अपनी आबंटित संदर्भ संख्या की जांच करके पुनः प्रयास करें।`
              : `No record found for reference code "${searchedRef}". Please verify your reference number and try again.`}
          </p>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onTryDemo}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-amber-400 text-xs font-bold font-mono rounded-xl transition-all shadow"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'रिकॉर्ड "CFS-REF-2026-001" देखें' : 'View Record "CFS-REF-2026-001"'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* SUMMARY CARD */}
      <ComplaintSummary complaint={result} />

      {/* TIMELINE VISUALIZER */}
      <ComplaintTimeline timeline={result.timeline} />
    </div>
  );
};
