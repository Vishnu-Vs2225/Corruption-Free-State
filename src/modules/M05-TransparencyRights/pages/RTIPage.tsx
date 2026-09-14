import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DataNotice } from '../components/DataNotice';
import { RTIProcess } from '../components/RTIProcess';
import { OfficialSourceCard } from '../components/OfficialSourceCard';
import { RIGHTS_OFFICIAL_SOURCES } from '../data/citizenRights';
import { Scale } from 'lucide-react';

export const RTIPage: React.FC = () => {
  const { language, t } = useLanguage();
  const rtiSource = RIGHTS_OFFICIAL_SOURCES.find((s) => s.id === 'src-rti-1');

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.citizenRights'), path: '/citizen-rights' }, { label: 'Right to Information (RTI)' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>RTI ACT 2005</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'सूचना का अधिकार (RTI) अधिनियम' : 'Right to Information (RTI) Act'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'RTI अधिनियम 2005 के तहत प्रत्येक नागरिक को किसी भी सार्वजनिक प्राधिकारी से सरकारी रिकॉर्ड मांगने का कानूनी अधिकार है।'
              : 'The Right to Information framework enables eligible citizens to seek information from public authorities.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DataNotice />

        <RTIProcess />

        {rtiSource && (
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-black text-blue-950 uppercase tracking-tight">
              {language === 'hi' ? 'आधिकारिक आरटीआई पोर्टल' : 'Official RTI Portal'}
            </h2>

            <div className="max-w-xl">
              <OfficialSourceCard source={rtiSource} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
