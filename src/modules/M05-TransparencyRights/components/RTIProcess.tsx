import React from 'react';
import { RTI_STEPS } from '../data/citizenRights';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const RTIProcess: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm font-sans">
      <div className="space-y-1 border-b border-slate-200 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 uppercase">
          <Scale className="w-4 h-4 text-amber-500" />
          <span>{language === 'hi' ? 'RTI आवेदन प्रक्रिया' : 'RTI APPLICATION PROCESS'}</span>
        </div>
        <h3 className="text-xl font-black text-blue-950 uppercase">
          {language === 'hi' ? 'सूचना प्राप्त करने के 5 चरण' : '5 Steps to File an RTI Application'}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {RTI_STEPS.map((step, idx) => {
          const title = language === 'hi' ? step.titleHi : step.title;
          const description = language === 'hi' ? step.descriptionHi : step.description;

          return (
            <div key={step.step} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 relative font-sans flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-900">
                  <span>STEP 0{step.step}</span>
                  {idx < RTI_STEPS.length - 1 && <ArrowRight className="hidden md:block w-4 h-4 text-slate-300" />}
                </div>

                <h4 className="text-sm font-bold text-slate-900 leading-snug">{title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{description}</p>
              </div>

              <div className="pt-2 text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>{language === 'hi' ? 'वैधानिक चरण' : 'Statutory Step'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
