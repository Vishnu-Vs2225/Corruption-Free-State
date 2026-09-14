import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Eye, ArrowDown } from 'lucide-react';

interface TransparencyHeroProps {
  onExploreClick?: () => void;
}

export const TransparencyHero: React.FC<TransparencyHeroProps> = ({ onExploreClick }) => {
  const { language } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="transparency-hero-gradient text-white rounded-3xl p-8 sm:p-12 space-y-6 border-b-4 border-amber-500 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
          <Eye className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'सार्वजनिक पारदर्शिता पोर्टल' : 'PUBLIC TRANSPARENCY PORTAL'}</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'TRANSPARENCY' : 'TRANSPARENCY'}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-amber-400 font-hindi">
            {language === 'hi' ? 'जानकारी तक आसान पहुंच' : 'Easy Access to Public Information'}
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
          {language === 'hi'
            ? 'सार्वजनिक धन के उपयोग, बजटीय आवंटन, सरकारी निविदाओं और प्रशासनिक जवाबदेही को खुला तथा समझने योग्य बनाना।'
            : 'Promoting openness, administrative accountability and citizen access to public information.'}
        </p>

        {onExploreClick && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              <span>{language === 'hi' ? 'सार्वजनिक जानकारी खोजें' : 'Explore Public Information'}</span>
              <ArrowDown className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
