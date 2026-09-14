import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

export const AwarenessHero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="awareness-hero-gradient text-white rounded-3xl p-8 sm:p-12 space-y-6 border-b-4 border-amber-500 shadow-xl font-sans">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
          <GraduationCap className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'भ्रष्टाचार विरोधी शिक्षा एवं जागरूकता' : 'ANTI-CORRUPTION AWARENESS & EDUCATION'}</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'भ्रष्टाचार मुक्त समाज का निर्माण' : 'BUILD A CORRUPTION-FREE SOCIETY'}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-amber-400 font-hindi">
            {language === 'hi' ? 'जानकारी से जागरूकता, जागरूकता से बदलाव।' : 'Knowledge Brings Awareness. Awareness Brings Change.'}
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
          {language === 'hi'
            ? 'भ्रष्टाचार के विभिन्न रूपों को पहचानना सीखें, अपने अधिकारों की रक्षा करें तथा जिम्मेदारी से प्रतिक्रिया दें।'
            : 'Learn how to recognize corruption, protect your citizen rights, and take responsible, legally safe action.'}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/awareness/dos-and-donts"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            <ShieldCheck className="w-4 h-4 text-slate-950" />
            <span>{language === 'hi' ? 'रिश्वत मांगने पर क्या करें' : 'Learn How to Respond'}</span>
          </Link>

          <Link
            to="/citizen-rights"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700 transition-colors"
          >
            <span>{language === 'hi' ? 'अधिकार समझें' : 'Know Your Rights'}</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
