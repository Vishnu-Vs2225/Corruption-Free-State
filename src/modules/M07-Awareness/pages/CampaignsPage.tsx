import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { CampaignCard } from '../components/CampaignCard';
import { CAMPAIGNS } from '../data/campaigns';
import { Megaphone } from 'lucide-react';

export const CampaignsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.awareness'), path: '/awareness' }, { label: 'Campaigns & Initiatives' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <Megaphone className="w-4 h-4 text-amber-400" />
            <span>AWARENESS DRIVES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'जागरूकता अभियान एवं पहल' : 'Campaigns & Initiatives'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'प्रशासिनक सत्यनिष्ठा तथा जन-जागरूकता को बढ़ावा देने वाले आधिकारिक अभियान।'
              : 'Public integrity drives, school workshops, and statutory awareness campaigns.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAMPAIGNS.map((camp) => (
            <CampaignCard key={camp.id} campaign={camp} />
          ))}
        </div>
      </section>
    </div>
  );
};
