import React, { useState } from 'react';
import type { FAQItem } from '../types/contact';
import { useLanguage } from '../../../i18n/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm divide-y divide-slate-200 font-sans">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const question = language === 'hi' ? item.questionHi : item.questionEn;
        const answer = language === 'hi' ? item.answerHi : item.answerEn;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id} className="transition-colors">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleIndex(index)}
              className="accordion-trigger focus:outline-none focus:bg-slate-50"
            >
              <span className="flex items-center gap-3 text-sm font-bold text-blue-950 pr-4">
                <HelpCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{question}</span>
              </span>

              <ChevronDown
                className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-amber-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-panel animate-in fade-in duration-150">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  {answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
