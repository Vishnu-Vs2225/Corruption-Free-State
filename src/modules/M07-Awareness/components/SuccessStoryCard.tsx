import React from 'react';
import type { SuccessStory } from '../types/awareness';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Award, CheckCircle2, Calendar } from 'lucide-react';

interface SuccessStoryCardProps {
  story: SuccessStory;
}

export const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ story }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? story.titleHi : story.titleEn;
  const summary = language === 'hi' ? story.summaryHi : story.summaryEn;
  const outcome = language === 'hi' ? story.outcomeHi : story.outcomeEn;
  const source = language === 'hi' ? story.sourceHi : story.sourceEn;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans hover:border-blue-900 transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-emerald-800 font-mono text-xs font-bold uppercase">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>VERIFIED CASE OUTCOME</span>
          </div>

          <span className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
            <Calendar className="w-3 h-3" />
            <span>{story.date}</span>
          </span>
        </div>

        <h4 className="text-base font-bold text-slate-900 leading-snug">{title}</h4>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">{summary}</p>
      </div>

      <div className="space-y-2 pt-2 border-t border-slate-100">
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1 text-xs">
          <span className="font-bold text-emerald-900 uppercase block text-[10px]">
            {language === 'hi' ? 'मामला समाधान परिणाम:' : 'Case Outcome:'}
          </span>
          <p className="text-emerald-950 font-medium leading-relaxed">{outcome}</p>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Source: {source}</span>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>Verified</span>
          </span>
        </div>
      </div>
    </div>
  );
};
