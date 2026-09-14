import React from 'react';
import type { OfficialSource } from '../types/transparency';
import { useLanguage } from '../../../i18n/LanguageContext';
import { ExternalLink, CheckCircle2, Building2 } from 'lucide-react';

interface OfficialSourceCardProps {
  source: OfficialSource;
}

export const OfficialSourceCard: React.FC<OfficialSourceCardProps> = ({ source }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? source.titleHi : source.title;
  const description = language === 'hi' ? source.descriptionHi : source.description;
  const authority = language === 'hi' ? source.authorityHi : source.authority;

  return (
    <div className="bg-white border border-slate-200 hover:border-blue-900 rounded-2xl p-6 shadow-sm space-y-4 transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-full text-[11px] font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'hi' ? 'सत्यापित आधिकारिक स्रोत' : 'Verified Official Source'}</span>
          </div>

          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">OFFICIAL</span>
        </div>

        <h4 className="text-base font-bold text-slate-900 font-sans leading-snug">
          {title}
        </h4>

        <p className="text-xs text-slate-600 font-sans leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
          <Building2 className="w-3.5 h-3.5 text-slate-400" />
          <span className="truncate max-w-[180px]">{authority}</span>
        </div>

        <a
          href={source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-950 hover:bg-blue-900 text-amber-400 text-xs font-bold font-sans rounded-xl transition-colors shadow-2xs"
        >
          <span>{language === 'hi' ? 'आधिकारिक स्रोत पर जाएं' : 'Visit Official Source'}</span>
          <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
};
