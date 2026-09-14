import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
      className={`inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded text-xs font-semibold tracking-wide transition-colors ${className}`}
      title="Switch Language / भाषा बदलें"
      aria-label="Switch Language / भाषा बदलें"
    >
      <Globe className="w-3.5 h-3.5 text-amber-400" />
      <span>{language === 'hi' ? 'English' : 'हिन्दी'}</span>
    </button>
  );
};
