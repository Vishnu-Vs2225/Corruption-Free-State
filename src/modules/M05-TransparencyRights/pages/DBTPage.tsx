import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DataNotice } from '../components/DataNotice';
import { OfficialSourceCard } from '../components/OfficialSourceCard';
import { RIGHTS_OFFICIAL_SOURCES } from '../data/citizenRights';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DBTPage: React.FC = () => {
  const { language, t } = useLanguage();
  const dbtSource = RIGHTS_OFFICIAL_SOURCES.find((s) => s.id === 'src-dbt-1');

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.citizenRights'), path: '/citizen-rights' }, { label: 'Direct Benefit Transfer (DBT)' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-emerald-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-xs font-bold text-emerald-300">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>DIRECT BENEFIT TRANSFER</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'प्रत्यक्ष लाभ अंतरण (DBT) अधिकार' : 'Direct Benefit Transfer (DBT)'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'कल्याणकारी योजनाओं का लाभ बिना बिचौलियों के सीधे अपने बैंक खाते में प्राप्त करने का अधिकार।'
              : 'Learn how eligible government benefits are transferred directly to beneficiaries through official DBT mechanisms.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 font-sans">
        <DataNotice />

        <div className="p-8 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-sm">
          <h2 className="text-xl font-black text-blue-950 uppercase">
            {language === 'hi' ? 'बिचौलियों या रिश्वत के खिलाफ सुरक्षा' : 'Protection Against Extortion & Middlemen'}
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed">
            {language === 'hi'
              ? 'सरकारी छात्रवृत्ति, किसान सम्मान निधि या आवास योजना का पैसा सीधा आधार-लिंक्ड बैंक खाते में भेजा जाता है। यदि कोई अधिकारी या बिचौलिया भुगतान जारी करने हेतु रिश्वत मांगता है, तो यह कानूनी अपराध है।'
              : 'Welfare subsidies are deposited directly into Aadhaar-linked accounts. Demanding illegal gratification to release statutory benefits is a punishable offence.'}
          </p>

          <div className="pt-2">
            <Link
              to="/report-corruption"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-800 hover:bg-red-700 text-white text-xs font-bold uppercase rounded-xl transition-colors shadow"
            >
              <span>{language === 'hi' ? 'DBT भ्रष्टाचार की रिपोर्ट करें' : 'Report DBT Corruption'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {dbtSource && (
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-black text-blue-950 uppercase tracking-tight">
              {language === 'hi' ? 'आधिकारिक डीबीटी भारत पोर्टल' : 'Official DBT Bharat Portal'}
            </h2>

            <div className="max-w-xl">
              <OfficialSourceCard source={dbtSource} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
