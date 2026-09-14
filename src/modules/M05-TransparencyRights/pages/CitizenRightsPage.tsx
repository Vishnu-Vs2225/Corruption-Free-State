import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DataNotice } from '../components/DataNotice';
import { RightsCard } from '../components/RightsCard';
import { Scale } from 'lucide-react';
import '../styles/transparency.css';

export const CitizenRightsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.citizenRights') }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rights-hero-gradient text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>CITIZEN RIGHTS & GOVERNANCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'नागरिक अधिकार एवं कानून' : 'Citizen Rights Framework'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'सूचना का अधिकार (RTI), गारंटीकृत लोक सेवाएं और डीबीटी योजनाओं में अधिकार आपके संवैधानिक हथियार हैं।'
              : 'Understand information-access rights, statutory service timelines, and welfare transfer protections.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DataNotice />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RightsCard type="rti" />
          <RightsCard type="charter" />
          <RightsCard type="dbt" />
        </div>
      </section>
    </div>
  );
};
