import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { FileText, Paperclip, CheckSquare, Eye } from 'lucide-react';

interface Props {
  currentStep: number; // 1: Details, 2: Evidence, 3: Declaration, 4: Review
}

export const FormProgress: React.FC<Props> = ({ currentStep }) => {
  const { language } = useLanguage();

  const steps = [
    { step: 1, label: language === 'hi' ? 'विवरण' : 'Details', icon: FileText },
    { step: 2, label: language === 'hi' ? 'साक्ष्य' : 'Evidence', icon: Paperclip },
    { step: 3, label: language === 'hi' ? 'घोषणा' : 'Declaration', icon: CheckSquare },
    { step: 4, label: language === 'hi' ? 'समीक्षा' : 'Review', icon: Eye },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
      {/* Desktop View */}
      <div className="hidden sm:flex items-center justify-between">
        {steps.map((s, idx) => {
          const isActive = currentStep === s.step;
          const isCompleted = currentStep > s.step;

          return (
            <React.Fragment key={s.step}>
              <div className="flex items-center gap-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                    isCompleted
                      ? 'bg-emerald-700 text-white'
                      : isActive
                      ? 'bg-blue-950 text-white ring-4 ring-blue-950/20'
                      : 'bg-slate-100 text-slate-400 border border-slate-300'
                  }`}
                >
                  {isCompleted ? '✓' : `0${s.step}`}
                </div>

                <div className="space-y-0.5">
                  <div className={`text-xs font-bold ${isActive ? 'text-blue-950' : 'text-slate-500'}`}>
                    {s.label}
                  </div>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-4 transition-colors ${
                    currentStep > s.step ? 'bg-emerald-600' : 'bg-slate-200'
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="flex sm:hidden items-center justify-between">
        <span className="text-xs font-mono font-bold text-blue-950">
          {language === 'hi' ? `चरण ${currentStep} / 4` : `Step ${currentStep} of 4`}
        </span>
        <span className="text-xs font-bold text-slate-800">
          {steps.find((s) => s.step === currentStep)?.label}
        </span>
      </div>
    </div>
  );
};
