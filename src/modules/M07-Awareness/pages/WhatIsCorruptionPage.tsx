import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { AwarenessIntro } from '../components/AwarenessIntro';
import { ImpactCard } from '../components/ImpactCard';
import { IMPACT_CARDS } from '../data/awareness';
import { BookOpen } from 'lucide-react';
import '../styles/awareness.css';

export const WhatIsCorruptionPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.awareness'), path: '/awareness' }, { label: 'What is Corruption?' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>WHAT IS CORRUPTION?</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'भ्रष्टाचार क्या है?' : 'What Is Corruption?'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'भ्रष्टाचार का अर्थ सामान्यतः व्यक्तिगत अथवा अनुचित लाभ के लिए सौंपे गए प्रशासनिक अधिकार या पद का दुरुपयोग है।'
              : 'Corruption generally refers to the misuse of entrusted power or official discretion for private or improper gain.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AwarenessIntro />

        <div className="space-y-4">
          <h2 className="text-xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'समाज एवं सार्वजनिक सुशासन पर प्रभाव' : 'Impact on Society & Governance'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_CARDS.map((item) => (
              <ImpactCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
