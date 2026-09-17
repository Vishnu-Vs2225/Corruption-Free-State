import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { organizationData } from '../data/organization';
import { ShieldCheck, Search, Scale, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

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
                to="/citizen-rights"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Scale className="w-5 h-5 text-slate-950" />
                <span>{t('hero.secondaryCTA')}</span>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm uppercase tracking-wider rounded-lg transition-colors"
              >
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>{t('nav.about')}</span>
              </Link>
            </div>

            {/* DEMO PORTAL NOTICE */}
            {/* <div className="pt-4 text-xs text-slate-400 flex items-center gap-2 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="font-mono">{t('hero.demoNotice')}</span>
              <span>•</span>
              <span className="text-amber-400 font-bold">Reg: {organizationData.registrationNumber}</span>
            </div> */}

          </div>

          {/* RIGHT HERO OFFICIAL EMBLEM LOGO (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-2xl text-center space-y-4 max-w-sm">
              <img
                src="/logo.png"
                alt="Corruption Free State Official Logo"
                className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full object-contain bg-white p-1 shadow-2xl border-4 border-amber-500 animate-pulse-subtle"
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
          <h2 className="text-2xl sm:text-3xl font-black text-blue-950 uppercase tracking-tight">
            {t('quickActions.title')}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Citizen Rights */}
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

          {/* Card 2: About Initiative */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-900 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                {language === 'hi' ? 'संस्थागत दृष्टिकोण' : 'Our Mission & Vision'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi' ? 'भ्रष्टाचार मुक्त राज्य की नीतियों, संगठन एवं पंजीकरण की विस्तृत जानकारी।' : 'Explore full background, non-partisan goals, and executive framework.'}
              </p>
            </div>
            <Link
              to="/about"
              className="mt-6 text-xs font-bold text-blue-900 flex items-center justify-between pt-4 border-t border-slate-100"
            >
              <span>{t('nav.about')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: FAQ Support */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-amber-600 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                {t('nav.faq')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi' ? 'नागरिक अधिकारों, RTI प्रक्रियाओं एवं सामान्य प्रश्नों के उत्तर पाएं।' : 'Frequently asked questions regarding citizen rights and public guidance.'}
              </p>
            </div>
            <Link
              to="/faq"
              className="mt-6 text-xs font-bold text-amber-700 flex items-center justify-between pt-4 border-t border-slate-100"
            >
              <span>{t('nav.faq')}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 4: Contact & Helpline */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-800 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-slate-100 text-blue-950 rounded-lg flex items-center justify-center font-bold">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-950 transition-colors">
                {t('nav.contact')}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'hi' ? 'आधिकारिक हेल्पलाइन नंबरों एवं कार्यालय पते से सीधा संपर्क करें।' : 'Direct phone numbers, office locations, and email contact info.'}
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 text-xs font-bold text-blue-950 flex items-center justify-between pt-4 border-t border-slate-100"
            >
              <span>{t('nav.contact')}</span>
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
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

            <div className="pt-4 lg:pt-0 lg:px-6 first:pl-0 space-y-1 text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-black text-blue-950">100%</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Public Service Commitment</div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 space-y-1 text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-black text-amber-600">24/7</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Helpline Support</div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 space-y-1 text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-black text-emerald-600">RTI</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Citizen Transparency</div>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 space-y-1 text-center lg:text-left">
              <div className="text-3xl sm:text-4xl font-black text-blue-950">WCAG 2.2</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Accessible Portal</div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CITIZEN ASSISTANCE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-blue-950 to-slate-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-blue-900">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-amber-400">
              {language === 'hi' ? 'नागरिक अधिकारों की जानकारी चाहिए?' : 'Need Help Understanding Your Citizen Rights?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {language === 'hi'
                ? 'हमारी टीम से संपर्क करें या नागरिक अधिकार अनुभाग में RTI अधिनियम एवं जन सेवाओं की गाइड देखें।'
                : 'Explore our comprehensive guides on RTI, Citizen Charter, and public service entitlements.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/citizen-rights"
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow"
            >
              {t('nav.citizenRights')}
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors border border-blue-700"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
