import React from 'react';
import { WHISTLEBLOWER_INFO } from '../data/whistleblower';
import { useLanguage } from '../../../i18n/LanguageContext';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export const WhistleblowerInfo: React.FC = () => {
  const { language } = useLanguage();

  const title = language === 'hi' ? WHISTLEBLOWER_INFO.titleHi : WHISTLEBLOWER_INFO.titleEn;
  const summary = language === 'hi' ? WHISTLEBLOWER_INFO.summaryHi : WHISTLEBLOWER_INFO.summaryEn;
  const warning = language === 'hi' ? WHISTLEBLOWER_INFO.warningNoticeHi : WHISTLEBLOWER_INFO.warningNoticeEn;

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-md font-sans">
      <div className="space-y-2 border-b border-slate-800 pb-4">
        <div className="inline-flex items-center gap-2 text-amber-400">
          <ShieldCheck className="w-5 h-5" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">WHISTLEBLOWER AWARENESS</span>
        </div>
        <h3 className="text-xl font-black uppercase">{title}</h3>
        <p className="text-xs text-slate-300 font-sans leading-relaxed">{summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {WHISTLEBLOWER_INFO.rules.map((rule) => {
          const rTitle = language === 'hi' ? rule.titleHi : rule.titleEn;
          const rDesc = language === 'hi' ? rule.descHi : rule.descEn;

          return (
            <div key={rule.id} className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-1 text-xs">
              <h4 className="font-bold text-amber-400 uppercase">{rTitle}</h4>
              <p className="text-slate-300 font-sans leading-relaxed">{rDesc}</p>
            </div>
          );
        })}
      </div>

      <div className="p-3.5 bg-rose-950/60 border border-rose-800/80 rounded-2xl flex items-start gap-2.5 text-xs text-rose-200">
        <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed font-sans">{warning}</p>
      </div>
    </div>
  );
};
