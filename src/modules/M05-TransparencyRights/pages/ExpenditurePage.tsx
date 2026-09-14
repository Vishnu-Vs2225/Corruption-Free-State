import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DataNotice } from '../components/DataNotice';
import { ExpenditureInfo } from '../components/ExpenditureInfo';
import { BarChart3 } from 'lucide-react';

export const ExpenditurePage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.transparency'), path: '/transparency' }, { label: 'Public Expenditure' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-blue-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs font-bold text-blue-300">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span>PUBLIC EXPENDITURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'सार्वजनिक व्यय एवं ऑडिट' : 'Public Expenditure & Audits'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'सरकारी खजाने से धन के उपयोग, लेखा परीक्षा और ऑडिट रिपोर्ट की जानकारी।'
              : 'Understand how public funds are spent, audited by statutory authorities, and tracked.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DataNotice />
        <ExpenditureInfo />
      </section>
    </div>
  );
};
