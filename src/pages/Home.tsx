import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { organizationData } from '../data/organization';
import { newsArticles } from '../data/news';
import { AlertTriangle, ShieldCheck, Search, Eye, Scale, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white py-20 px-4 overflow-hidden border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* LEFT HERO TEXT (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t('hero.eyebrow')}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              {t('hero.titleMain')}
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-amber-400">
              {t('hero.titleSub')}
            </p>

            <p className="text-base text-slate-300 font-sans leading-relaxed max-w-2xl">
              {t('hero.desc')}
            </p>

            {/* HERO CTAS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/report-corruption"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-sm uppercase tracking-wider rounded shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <AlertTriangle className="w-5 h-5 text-amber-300" />
                <span>{t('hero.primaryCTA')}</span>
              </Link>

              <Link
                to="/citizen-rights"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm uppercase tracking-wider rounded transition-colors"
              >
                <Scale className="w-5 h-5 text-amber-400" />
                <span>{t('hero.secondaryCTA')}</span>
              </Link>
            </div>

            {/* DEMO PORTAL NOTICE */}
            <div className="pt-4 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="font-mono">{t('hero.demoNotice')}</span>
              <span>•</span>
              <span className="text-amber-400 font-bold">Reg: {organizationData.registrationNumber}</span>
            </div>

          </div>

          {/* RIGHT HERO OFFICIAL EMBLEM LOGO (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-2xl text-center space-y-4 max-w-sm">
              <img
                src="/logo.png"
                alt="Corruption Free State Official Logo"
                className="w-56 h-56 mx-auto rounded-full object-contain bg-white p-1 shadow-2xl border-4 border-amber-500 animate-pulse-subtle"
              />

              <div className="space-y-1">
                <div className="text-lg font-black text-white">
                  {language === 'hi' ? 'भ्रष्टाचार नियंत्रण' : 'Corruption Control'}
                </div>
                <div className="text-xs text-amber-400 font-bold tracking-wider uppercase">
                  {language === 'hi' ? 'सम्पर्क • समस्या • समाधान' : 'Contact • Issues • Solution'}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-slate-300 font-mono">
                REGISTRATION: {organizationData.registrationNumber}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. QUICK ACTION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl font-black text-blue-950 uppercase tracking-tight">
            {t('quickActions.title')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Report */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-red-600 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-red-100 text-red-700 rounded-lg flex items-center justify-center font-bold">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                {t('quickActions.reportTitle')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('quickActions.reportDesc')}
              </p>
            </div>
            <Link
              to="/report-corruption"
              className="mt-6 text-xs font-bold text-red-700 group-hover:text-red-800 flex items-center justify-between pt-4 border-t border-slate-100"
            >
              <span>{t('nav.report')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Track */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-900 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center font-bold">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                {t('quickActions.trackTitle')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('quickActions.trackDesc')}
              </p>
            </div>
            <Link
              to="/track-complaint"
              className="mt-6 text-xs font-bold text-blue-900 flex items-center justify-between pt-4 border-t border-slate-100"
            >
              <span>{t('nav.track')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: Transparency */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-600 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {t('quickActions.transparencyTitle')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('quickActions.transparencyDesc')}
              </p>
            </div>
            <Link
              to="/transparency"
              className="mt-6 text-xs font-bold text-amber-700 flex items-center justify-between pt-4 border-t border-slate-100"
            >
              <span>{t('nav.transparency')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 4: Citizen Rights */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-600 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {t('quickActions.rightsTitle')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t('quickActions.rightsDesc')}
              </p>
            </div>
            <Link
              to="/citizen-rights"
              className="mt-6 text-xs font-bold text-emerald-700 flex items-center justify-between pt-4 border-t border-slate-100"
            >
              <span>{t('nav.citizenRights')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. ORGANIZATION VISION & MISSION */}
      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              {t('org.title')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              {t('org.subtitle')}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision */}
            <div className="p-6 bg-blue-900/60 border border-blue-800 rounded-xl space-y-3">
              <div className="text-xs font-mono text-amber-400 font-bold">01 / VISION</div>
              <h3 className="text-xl font-bold text-white">{t('org.visionTitle')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{t('org.visionDesc')}</p>
            </div>

            {/* Mission */}
            <div className="p-6 bg-blue-900/60 border border-blue-800 rounded-xl space-y-3">
              <div className="text-xs font-mono text-amber-400 font-bold">02 / MISSION</div>
              <h3 className="text-xl font-bold text-white">{t('org.missionTitle')}</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{t('org.missionDesc')}</p>
            </div>

            {/* Objectives */}
            <div className="p-6 bg-blue-900/60 border border-blue-800 rounded-xl space-y-3">
              <div className="text-xs font-mono text-amber-400 font-bold">03 / OBJECTIVES</div>
              <h3 className="text-xl font-bold text-white">{t('org.objectivesTitle')}</h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{t('org.obj1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{t('org.obj2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{t('org.obj3')}</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 4. METRICS & IMPACT STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            <div className="pt-4 lg:pt-0 lg:px-6 first:pl-0 space-y-1 text-center lg:text-left">
              <div className="text-4xl font-black text-blue-950">1,240+</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">{t('hero.stat1Label')}</div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 space-y-1 text-center lg:text-left">
              <div className="text-4xl font-black text-amber-600">318</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">{t('hero.stat2Label')}</div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 space-y-1 text-center lg:text-left">
              <div className="text-4xl font-black text-emerald-600">892</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">{t('hero.stat3Label')}</div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 space-y-1 text-center lg:text-left">
              <div className="text-4xl font-black text-blue-950">94.2%</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">{t('hero.stat4Label')}</div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. LATEST NEWS & UPDATES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
              {t('nav.news')}
            </h2>
            <span className="text-xs text-slate-500">
              {language === 'hi' ? 'हालिया प्रशासनिक निर्णय एवं सार्वजनिक घोषणाएं' : 'Recent administrative decisions and public notices'}
            </span>
          </div>

          <Link to="/news" className="text-xs font-bold text-blue-950 hover:text-amber-600 flex items-center gap-1">
            <span>{language === 'hi' ? 'सभी देखें' : 'View All'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="px-2 py-0.5 bg-slate-100 text-blue-900 rounded font-bold">{article.category[language]}</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug hover:text-blue-950">
                  {article.title[language]}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {article.excerpt[language]}
                </p>
              </div>

              <Link to="/news" className="text-xs font-bold text-blue-950 flex items-center gap-1 pt-3 border-t border-slate-100">
                <FileText className="w-3.5 h-3.5 text-amber-600" />
                <span>{language === 'hi' ? 'पूरा पढ़ें' : 'Read Full Article'}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
