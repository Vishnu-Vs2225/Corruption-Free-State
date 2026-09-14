import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DataNotice } from '../components/DataNotice';
import { CitizenCharterTable } from '../components/CitizenCharterTable';
import { FileText } from 'lucide-react';

export const CitizenCharterPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.citizenRights'), path: '/citizen-rights' }, { label: 'Citizen Charter' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-blue-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs font-bold text-blue-300">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>CITIZEN CHARTER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'नागरिक अधिकार पत्र (Citizen Charter)' : 'Citizen Charter Standards'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'समयबद्ध सार्वजनिक सेवा डिलीवरी के नियम तथा अधिकार पत्र मानकों की जानकारी।'
              : 'Understand service standards, department responsibilities, and expected timelines.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DataNotice />
        <CitizenCharterTable />
      </section>
    </div>
  );
};
