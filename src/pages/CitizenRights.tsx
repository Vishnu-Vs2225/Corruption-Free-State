import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Scale, FileText, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CitizenRights: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12">
      <Breadcrumb items={[{ label: t('nav.citizenRights') }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>{t('nav.citizenRights')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('nav.citizenRights')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'सूचना का अधिकार (RTI), गारंटीकृत सार्वजनिक सेवाएं, और डीबीटी (DBT) योजनाओं में पारदर्शिता आपका संवैधानिक अधिकार है।'
              : 'Right to Information (RTI), Guaranteed Public Services, and transparency in Direct Benefit Transfer (DBT) are statutory citizen rights.'}
          </p>
        </div>
      </section>

      {/* CITIZEN RIGHTS SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        
        {/* 1. RTI SECTION */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
              01 / RIGHT TO INFORMATION ACT, 2005
            </span>
            <h2 className="text-2xl font-black text-blue-950">
              {language === 'hi' ? 'सूचना का अधिकार (RTI) अधिनियम' : 'Right to Information (RTI) Act'}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              {language === 'hi'
                ? 'RTI अधिनियम 2005 के तहत प्रत्येक नागरिक को किसी भी सरकारी विभाग, संस्था या निकाय से प्रशासनिक फैसलों, फाइलों और खर्च का ब्योरा मांगने का कानूनी अधिकार है।'
                : 'Under the RTI Act 2005, every citizen holds the statutory right to request administrative records, files, and expenditure logs from any public authority.'}
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'hi' ? '30 दिनों के भीतर अनिवार्य उत्तर सीमा' : 'Mandatory 30-day resolution timeline'}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'hi' ? 'प्रथम एवं द्वितीय अपील का कानूनी प्रावधान' : 'First and second appeal provisions available'}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-xl space-y-4">
            <h3 className="text-sm font-bold text-amber-400 uppercase">
              {language === 'hi' ? 'RTI आवेदन जमा करने के चरण' : 'Steps to File an RTI Application'}
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-300 font-sans">
              <li>{language === 'hi' ? 'जन सूचना अधिकारी (PIO) के नाम आवेदन लिखें' : 'Address application to concerned Public Information Officer (PIO)'}</li>
              <li>{language === 'hi' ? 'वांछित जानकारी का स्पष्ट विवरण दें' : 'Provide clear details of desired public records'}</li>
              <li>{language === 'hi' ? 'निर्धारित शुल्क शुल्क संलग्न करें' : 'Attach prescribed application fee'}</li>
              <li>{language === 'hi' ? 'पावती रसीद (Acknowledgement) प्राप्त करें' : 'Retain acknowledgement receipt for tracking'}</li>
            </ol>
          </div>
        </div>

        {/* 2. CITIZEN CHARTER & DBT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Citizen Charter */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-blue-950">
              {language === 'hi' ? 'नागरिक अधिकार पत्र (Citizen Charter)' : 'Citizen Charter Standards'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              {language === 'hi'
                ? 'नागरिक अधिकार पत्र सरकारी सेवाओं की समयबद्ध डिलीवरी सुनिश्चित करता है। यदि नियत समय में राशन कार्ड, आय प्रमाण पत्र या जाति प्रमाण पत्र नहीं मिलता तो अधिकारी पर पेनल्टी का प्रावधान है।'
                : 'Guarantees time-bound public service delivery. Failure to provide services like income certificates or ration cards within stipulated timelines attracts penalty provisions.'}
            </p>
          </div>

          {/* DBT Benefits */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-blue-950">
              {language === 'hi' ? 'प्रत्यक्ष लाभ अंतरण (DBT) अधिकार' : 'Direct Benefit Transfer (DBT) Rights'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              {language === 'hi'
                ? 'सरकारी कल्याणकारी योजनाओं का पैसा सीधे आपके बैंक खाते में भेजा जाता है। यदि बीच में कोई बिचौलिया या अधिकारी कमीशन मांगता है तो यह गंभीर संज्ञेय अपराध है।'
                : 'Welfare scheme funds are remitted directly into beneficiary bank accounts. Demanding illegal gratification or commission by middlemen is a cognizable offence.'}
            </p>
          </div>

        </div>

        {/* BOTTOM CTA */}
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl border border-blue-900">
          <h3 className="text-2xl font-bold text-amber-400">
            {language === 'hi' ? 'नागरिक अधिकारों एवं RTI सहायता हेतु संपर्क करें' : 'Need Guidance On Your Citizen Rights & RTI?'}
          </h3>
          <p className="text-xs text-slate-300 max-w-xl mx-auto font-sans">
            {language === 'hi'
              ? 'हमारी टीम से संपर्क करें या RTI एवं जन सेवा गारंटी गाइड देखें।'
              : 'Contact our helpline team or explore our RTI application and public service delivery guides.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow"
          >
            <span>{t('nav.contact')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </section>
    </div>
  );
};
