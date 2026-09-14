import React from 'react';
import type { LegalGuide } from '../types/awareness';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Scale, ExternalLink } from 'lucide-react';

interface LegalGuideCardProps {
  guide: LegalGuide;
}

export const LegalGuideCard: React.FC<LegalGuideCardProps> = ({ guide }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? guide.titleHi : guide.titleEn;
  const desc = language === 'hi' ? guide.descHi : guide.descEn;
  const actName = language === 'hi' ? guide.actNameHi : guide.actNameEn;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans hover:border-blue-900 transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-blue-950">
            <Scale className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-mono font-bold uppercase">{actName}</span>
          </div>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-mono font-bold rounded">
            ACT
          </span>
        </div>

        <h4 className="text-base font-bold text-slate-900 leading-snug">{title}</h4>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">{desc}</p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-mono text-[11px]">Official India Code Archive</span>
        <a
          href={guide.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold text-blue-950 hover:text-amber-600 font-mono text-[11px] uppercase"
        >
          <span>Official Source ↗</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
