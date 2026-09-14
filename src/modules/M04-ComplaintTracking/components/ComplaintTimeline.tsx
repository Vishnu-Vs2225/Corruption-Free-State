import React from 'react';
import type { TrackingEvent } from '../types/tracking';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Check, Clock, CircleDot, Circle } from 'lucide-react';

interface ComplaintTimelineProps {
  timeline: TrackingEvent[];
}

export const ComplaintTimeline: React.FC<ComplaintTimelineProps> = ({ timeline }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
      {/* TIMELINE HEADER */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-widest block">
            {language === 'hi' ? 'नमूना प्रगति समयसीमा' : 'DEMO TIMELINE'}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'शिकायत प्रक्रिया समयसीमा' : 'Complaint Progress Timeline'}
          </h3>
        </div>

        <span className="px-2.5 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded text-xs font-bold font-mono">
          {language === 'hi' ? 'केवल प्रदर्शन' : 'DEMO'}
        </span>
      </div>

      {/* SEMANTIC ORDERED LIST */}
      <ol className="relative space-y-8 pl-4 sm:pl-6 before:absolute before:left-7 sm:before:left-9 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
        {timeline.map((step, index) => {
          const title = language === 'hi' ? step.titleHi : step.title;
          const description = language === 'hi' ? step.descriptionHi : step.description;

          return (
            <li key={step.id} className="relative flex items-start gap-4 sm:gap-6 group">
              {/* NODE ICON */}
              <div
                className={`relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm border-2 transition-all flex-shrink-0 ${
                  step.completed
                    ? 'bg-emerald-600 border-emerald-600 text-white shadow'
                    : step.active
                    ? 'bg-amber-500 border-amber-500 text-slate-950 animate-pulse shadow-md'
                    : 'bg-slate-100 border-slate-300 text-slate-400'
                }`}
              >
                {step.completed ? (
                  <Check className="w-5 h-5 stroke-[3]" />
                ) : step.active ? (
                  <Clock className="w-5 h-5 stroke-[2.5]" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
              </div>

              {/* STEP CONTENT */}
              <div className="flex-1 bg-slate-50/80 border border-slate-200/80 rounded-xl p-4 space-y-1.5 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-900">
                      STEP {index + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">
                      {title}
                    </h4>
                  </div>

                  {step.date ? (
                    <span className="text-xs font-mono text-slate-500 bg-white px-2 py-0.5 border border-slate-200 rounded">
                      {step.date}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 border border-slate-200 rounded">
                      {language === 'hi' ? 'तिथि: लंबित' : 'Date: Pending'}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {description}
                </p>

                {step.active && (
                  <div className="pt-1 flex items-center gap-1.5 text-xs text-amber-700 font-medium">
                    <CircleDot className="w-3.5 h-3.5 text-amber-600 animate-spin" />
                    <span>{language === 'hi' ? 'वर्तमान में सक्रिय चरण' : 'Currently Active Phase'}</span>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
