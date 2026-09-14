import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DataNotice } from '../components/DataNotice';
import { AssetInfo } from '../components/AssetInfo';
import { Award } from 'lucide-react';

export const AssetsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.transparency'), path: '/transparency' }, { label: 'Asset Declarations' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>ASSET DECLARATIONS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'लोक सेवकों की संपत्ति घोषणा' : 'Public Asset Declarations'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'लोक सेवकों एवं जनप्रतिनिधियों की संपत्ति प्रकटीकरण नियमों और आधिकारिक अभिलेखों की जानकारी।'
              : 'Understand public disclosure of declared assets, statutory rules and official verification channels.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DataNotice />
        <AssetInfo />
      </section>
    </div>
  );
};
