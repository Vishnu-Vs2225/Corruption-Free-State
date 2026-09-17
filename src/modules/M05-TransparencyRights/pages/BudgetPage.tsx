import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DataNotice } from '../components/DataNotice';
import { BudgetInfoCard } from '../components/BudgetInfoCard';
import { OfficialSourceCard } from '../components/OfficialSourceCard';
import { BUDGET_ITEMS, BUDGET_OFFICIAL_SOURCES } from '../data/budget';
import { DollarSign } from 'lucide-react';

export const BudgetPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.transparency'), path: '/transparency' }, { label: 'Public Budget' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-emerald-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-xs font-bold text-emerald-300">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>PUBLIC BUDGET</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'सार्वजनिक बजट जानकारी' : 'Public Budget Allocations'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'समझें कि सार्वजनिक धन का नियोजन और आबंटन कैसे किया जाता है।'
              : 'Understand how public funds are planned, allocated across sectors, and audited.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DataNotice />

        {/* PUBLIC BUDGET ITEMS */}
        <div className="space-y-4">
          <h2 className="text-xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'बजट आवंटन विवरण' : 'Budget Allocations Overview'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUDGET_ITEMS.map((item) => (
              <BudgetInfoCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* OFFICIAL SOURCES */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'आधिकारिक बजट संसाधन' : 'Official Budget Resources'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUDGET_OFFICIAL_SOURCES.map((source) => (
              <OfficialSourceCard key={source.id} source={source} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
