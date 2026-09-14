import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { WhistleblowerInfo } from '../components/WhistleblowerInfo';
import { ShieldCheck } from 'lucide-react';

export const WhistleblowerPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.awareness'), path: '/awareness' }, { label: 'Whistleblower Awareness' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>WHISTLEBLOWER AWARENESS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'व्हिसलब्लोअर जागरूकता एवं सुरक्षा' : 'Whistleblower Awareness & Protection'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'जनहित में भ्रष्टाचार उजागर करने वाले नागरिकों के वैधानिक अधिकार एवं गोपनीयता सुरक्षा नियम।'
              : 'Understand confidential reporting, identity protection rules, and responsible disclosure.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <WhistleblowerInfo />
      </section>
    </div>
  );
};
