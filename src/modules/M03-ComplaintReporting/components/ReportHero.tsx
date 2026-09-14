import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { AlertTriangle, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';

export const ReportHero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-red-950 via-slate-900 to-red-900 text-white py-16 px-4 rounded-2xl border-b-4 border-amber-500 shadow-2xl overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300 uppercase tracking-widest">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'नागरिक शिकायत पोर्टल' : 'Citizen Reporting Portal'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          {language === 'hi' ? 'भ्रष्टाचार की शिकायत दर्ज करें' : 'Report Corruption'}
        </h1>

        <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed max-w-2xl">
          {language === 'hi'
            ? 'प्रशासनिक पारदर्शिता को बढ़ावा दें। जानें कि जिम्मेदारी से भ्रष्टाचार की रिपोर्ट कैसे करें और आवश्यक साक्ष्य कैसे प्रस्तुत करें।'
            : 'Promote administrative accountability. Learn how to report suspected corruption responsibly and submit necessary supporting details.'}
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
          <Link
            to="/report-corruption/form"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>{language === 'hi' ? 'रिपोर्ट शुरू करें' : 'Start a Report'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/report-corruption/guidelines"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'रिपोर्टिंग दिशानिर्देश' : 'Reporting Guidelines'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
