import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { CorruptionTypeCard } from '../components/CorruptionTypeCard';
import { CORRUPTION_TYPES } from '../data/corruptionTypes';
import { ShieldAlert } from 'lucide-react';

export const CorruptionTypesPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.awareness'), path: '/awareness' }, { label: 'Types of Corruption' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>CATEGORIES OF CORRUPTION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'भ्रष्टाचार के विभिन्न प्रकार' : 'Types of Corruption'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'रिश्वतखोरी, पद के दुरुपयोग, निविदा धोखाधड़ी और हितों के टकराव के स्वरूपों को समझें।'
              : 'Understand practical categories such as bribery, abuse of power, procurement fraud, and conflict of interest.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORRUPTION_TYPES.map((item) => (
            <CorruptionTypeCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
