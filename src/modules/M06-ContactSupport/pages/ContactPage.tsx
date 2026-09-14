import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { ContactHero } from '../components/ContactHero';
import { HelplineCard } from '../components/HelplineCard';
import { SupportChannels } from '../components/SupportChannels';
import { OfficeInformation } from '../components/OfficeInformation';
import { ContactForm } from '../components/ContactForm';
import { SafetyNotice } from '../components/SafetyNotice';
import { FAQSection } from '../components/FAQSection';
import { SocialMediaHub } from '../components/SocialMediaHub';
import { ContactCTA } from '../components/ContactCTA';
import '../styles/contact.css';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.contact') }]} />

      <ContactHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* TOP ROW: HELPLINE CARD & SUPPORT CHANNELS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <HelplineCard />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <SupportChannels />
          </div>
        </div>

        {/* OFFICE INFORMATION & CONTACT FORM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <OfficeInformation />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <ContactForm />
          </div>
        </div>

        {/* SAFETY NOTICE & SOCIAL MEDIA HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <SafetyNotice />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <SocialMediaHub />
          </div>
        </div>

        {/* FAQ SECTION PREVIEW */}
        <FAQSection />

        {/* BOTTOM CTAS */}
        <ContactCTA />

      </section>
    </div>
  );
};
