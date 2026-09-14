import React from 'react';
import { FAQ_DATA } from '../data/faq';
import { FAQAccordion } from './FAQAccordion';
import { useLanguage } from '../../../i18n/LanguageContext';
import { HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
        <HelpCircle className="w-5 h-5 text-amber-500" />
        <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight">
          {language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)' : 'Frequently Asked Questions'}
        </h3>
      </div>

      <FAQAccordion items={FAQ_DATA} />
    </div>
  );
};
