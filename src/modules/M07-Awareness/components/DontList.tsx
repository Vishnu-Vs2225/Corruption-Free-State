import React from 'react';
import { DONTS_ITEMS } from '../data/dosDonts';
import { useLanguage } from '../../../i18n/LanguageContext';
import { XCircle } from 'lucide-react';

export const DontList: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-rose-50/80 border-2 border-rose-300 rounded-3xl p-6 sm:p-8 space-y-6 font-sans">
      <div className="flex items-center gap-2 border-b border-rose-200 pb-3 text-rose-950">
        <XCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
        <h3 className="text-xl font-black uppercase tracking-tight">
          {language === 'hi' ? 'क्या न करें (Prohibited Actions - DON\'Ts)' : "WHAT NOT TO DO (Prohibited Actions — DON'Ts)"}
        </h3>
      </div>

      <div className="space-y-4">
        {DONTS_ITEMS.map((item) => {
          const text = language === 'hi' ? item.textHi : item.textEn;
          const explanation = language === 'hi' ? item.explanationHi : item.explanationEn;

          return (
            <div key={item.id} className="bg-white border border-rose-200 rounded-2xl p-4 space-y-1 shadow-2xs">
              <div className="flex items-start gap-2 font-bold text-slate-900 text-sm">
                <span className="text-rose-600 font-mono">✕</span>
                <h4>{text}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans pl-5">{explanation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
