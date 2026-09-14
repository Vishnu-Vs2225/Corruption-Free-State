import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DoList } from '../components/DoList';
import { DontList } from '../components/DontList';
import { EvidenceGuidance } from '../components/EvidenceGuidance';
import { ShieldCheck } from 'lucide-react';

export const DosDontsPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.awareness'), path: '/awareness' }, { label: "Do's & Don'ts" }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>CITIZEN ACTION GUIDE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'यदि कोई रिश्वत मांगे तो क्या करें और क्या न करें' : "IF ASKED FOR A BRIBE: DO'S & DON'TS"}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'जानें कि शांतिपूर्वक और सुरक्षित तरीके से क्या कदम उठाएं तथा किन गलतियों से बचें।'
              : 'Know what responsible steps to take and what pitfalls to avoid if confronted with bribery demands.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <EvidenceGuidance />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <DoList />
          <DontList />
        </div>
      </section>
    </div>
  );
};
