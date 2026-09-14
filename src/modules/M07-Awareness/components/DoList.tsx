import React from 'react';
import { DOS_ITEMS } from '../data/dosDonts';
import { useLanguage } from '../../../i18n/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export const DoList: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-emerald-50/80 border-2 border-emerald-300 rounded-3xl p-6 sm:p-8 space-y-6 font-sans">
      <div className="flex items-center gap-2 border-b border-emerald-200 pb-3 text-emerald-950">
        <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
        <h3 className="text-xl font-black uppercase tracking-tight">
          {language === 'hi' ? 'क्या करें (Recommended Actions - DOs)' : "WHAT TO DO (Recommended Actions — DO's)"}
        </h3>
      </div>

      <div className="space-y-4">
        {DOS_ITEMS.map((item) => {
          const text = language === 'hi' ? item.textHi : item.textEn;
          const explanation = language === 'hi' ? item.explanationHi : item.explanationEn;

          return (
            <div key={item.id} className="bg-white border border-emerald-200 rounded-2xl p-4 space-y-1 shadow-2xs">
              <div className="flex items-start gap-2 font-bold text-slate-900 text-sm">
                <span className="text-emerald-600 font-mono">✓</span>
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
