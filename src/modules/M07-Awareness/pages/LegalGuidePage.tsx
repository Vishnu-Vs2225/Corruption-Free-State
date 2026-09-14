import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { LegalGuideCard } from '../components/LegalGuideCard';
import { LEGAL_GUIDES } from '../data/legalResources';
import { Scale, Info } from 'lucide-react';

export const LegalGuidePage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.awareness'), path: '/awareness' }, { label: 'Legal Guide' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>LEGAL FRAMEWORK GUIDE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'भ्रष्टाचार विरोधी कानूनी मार्गदर्शिका' : 'Anti-Corruption Legal Guide'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'भ्रष्टाचार निवारण अधिनियम, आरटीआई कानून और व्हिसलब्लोअर सुरक्षा वैधानिक प्रावधानों की जानकारी।'
              : 'Learn about statutory anti-corruption legislation, citizen rights, and verified legal portals.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-start gap-3 text-xs text-amber-950">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="block font-bold uppercase tracking-wider text-amber-900">
              {language === 'hi' ? 'ℹ कानूनी जानकारी अस्वीकरण (Legal Disclaimer)' : 'ℹ LEGAL INFORMATION DISCLAIMER'}
            </strong>
            <p className="leading-relaxed text-slate-700">
              {language === 'hi'
                ? 'यह मार्गदर्शिका केवल सामान्य जन-जागरूकता हेतु है। कानूनी सुरक्षा और प्रक्रियाएं लागू वैधानिक कानूनों के अधीन हैं।'
                : 'This guide is for general public information. Statutory protections and legal procedures are subject to applicable acts and official rules.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEGAL_GUIDES.map((guide) => (
            <LegalGuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>
    </div>
  );
};
