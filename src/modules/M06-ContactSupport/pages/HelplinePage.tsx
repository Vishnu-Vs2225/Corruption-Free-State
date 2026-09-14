import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { HelplineCard } from '../components/HelplineCard';
import { SafetyNotice } from '../components/SafetyNotice';
import { OfficeInformation } from '../components/OfficeInformation';
import { ContactCTA } from '../components/ContactCTA';
import { PhoneCall, ShieldAlert } from 'lucide-react';
import '../styles/contact.css';

export const HelplinePage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.contact'), path: '/contact' }, { label: 'Anti-Corruption Helpline' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="contact-hero-gradient text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>24x7 CITIZEN HELPLINE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'भ्रष्टाचार निवारण हेल्पलाइन 9973076434' : 'Anti-Corruption Helpline 9973076434'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'भ्रष्टाचार, रिश्वतखोरी तथा सार्वजनिक शिकायत संबंधी मार्गदर्शन के लिए हेल्पलाइन नंबर पर संपर्क करें।'
              : 'Direct citizen hotline for assistance, corruption reporting guidance, and inquiry support.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <HelplineCard />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-rose-700">
                <ShieldAlert className="w-5 h-5" />
                <h3 className="text-base font-bold uppercase">
                  {language === 'hi' ? 'आपातकालीन सहायता मार्गदर्शन' : 'Emergency Assistance Guidance'}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi'
                  ? 'तत्काल व्यक्तिगत सुरक्षा खतरे अथवा आपराधिक आपात स्थिति की स्थिति में स्थानीय पुलिस या आपातकालीन प्राधिकारी (112) से संपर्क करें।'
                  : 'For urgent safety emergencies or physical threat situations, please contact local emergency authorities (112).'}
              </p>
            </div>
          </div>
        </div>

        <OfficeInformation />
        <SafetyNotice />
        <ContactCTA />
      </section>
    </div>
  );
};
