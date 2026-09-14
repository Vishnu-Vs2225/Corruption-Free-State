import React, { useRef } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { TransparencyHero } from '../components/TransparencyHero';
import { DataNotice } from '../components/DataNotice';
import { TransparencyPrinciples } from '../components/TransparencyPrinciples';
import { InformationAreaCard } from '../components/InformationAreaCard';
import { DashboardPreview } from '../components/DashboardPreview';
import { INFORMATION_AREAS } from '../data/transparency';
import '../styles/transparency.css';

export const TransparencyPage: React.FC = () => {
  const { t } = useLanguage();
  const areasRef = useRef<HTMLDivElement>(null);

  const handleScrollToAreas = () => {
    areasRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.transparency') }]} />

      <TransparencyHero onExploreClick={handleScrollToAreas} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <DataNotice />

        <TransparencyPrinciples />

        <div ref={areasRef} className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
              Public Information Areas
            </h2>
            <p className="text-xs text-slate-600 font-sans">
              Explore key public disclosure sectors, official resources, and transparency guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INFORMATION_AREAS.map((area) => (
              <InformationAreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>

        <DashboardPreview />
      </section>
    </div>
  );
};
