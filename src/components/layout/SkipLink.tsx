import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export const SkipLink: React.FC = () => {
  const { language } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded shadow-xl border-2 border-slate-950"
    >
      {language === 'hi' ? 'मुख्य विषयवस्तु पर जाएं (Skip to main content)' : 'Skip to main content'}
    </a>
  );
};
