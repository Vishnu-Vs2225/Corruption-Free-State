import React, { useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { FAQAccordion } from '../components/FAQAccordion';
import { FAQ_DATA } from '../data/faq';
import { ContactCTA } from '../components/ContactCTA';
import { HelpCircle, Filter } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [category, setCategory] = useState<string>('all');

  const filteredItems =
    category === 'all' ? FAQ_DATA : FAQ_DATA.filter((item) => item.category === category);

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.contact'), path: '/contact' }, { label: 'Frequently Asked Questions (FAQ)' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>KNOWLEDGE & HELP FAQ</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'शिकायत रिपोर्टिंग, ट्रैकिंग, गोपनीयता एवं नागरिक अधिकारों से संबंधित सामान्य प्रश्नों के उत्तर।'
              : 'Find quick answers regarding corruption reporting, tracking, privacy policies, and citizen rights.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase mr-2">
            <Filter className="w-4 h-4 text-amber-500" />
            <span>{language === 'hi' ? 'श्रेणी:' : 'Filter:'}</span>
          </div>

          <button
            type="button"
            onClick={() => setCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors ${
              category === 'all' ? 'bg-blue-950 text-amber-400 shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'hi' ? 'सभी प्रश्न (All)' : 'All Questions'}
          </button>

          <button
            type="button"
            onClick={() => setCategory('rights')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors ${
              category === 'rights' ? 'bg-blue-950 text-amber-400 shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'hi' ? 'नागरिक अधिकार' : 'Citizen Rights'}
          </button>

          <button
            type="button"
            onClick={() => setCategory('tracking')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors ${
              category === 'tracking' ? 'bg-blue-950 text-amber-400 shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'hi' ? 'ट्रैकिंग' : 'Tracking'}
          </button>

          <button
            type="button"
            onClick={() => setCategory('privacy')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors ${
              category === 'privacy' ? 'bg-blue-950 text-amber-400 shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'hi' ? 'गोपनीयता' : 'Privacy'}
          </button>

          <button
            type="button"
            onClick={() => setCategory('general')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors ${
              category === 'general' ? 'bg-blue-950 text-amber-400 shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'hi' ? 'सामान्य' : 'General'}
          </button>
        </div>

        <FAQAccordion items={filteredItems} />

        <ContactCTA />
      </section>
    </div>
  );
};
