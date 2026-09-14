import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { organizationData } from '../../../data/organization';
import { LanguageSwitcher } from '../../../components/common/LanguageSwitcher';
import { MobileDrawerNav } from './MobileDrawerNav';
import { Phone, Mail, ShieldCheck, Menu, AlertTriangle, Search } from 'lucide-react';

export const GlobalHeader: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navItems = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/about', labelKey: 'nav.about' },
    { path: '/report-corruption', labelKey: 'nav.report' },
    { path: '/track-complaint', labelKey: 'nav.track' },
    { path: '/transparency', labelKey: 'nav.transparency' },
    { path: '/citizen-rights', labelKey: 'nav.citizenRights' },
    { path: '/whistleblower-protection', labelKey: 'nav.whistleblower' },
    { path: '/awareness', labelKey: 'nav.awareness' },
    { path: '/news', labelKey: 'nav.news' },
    { path: '/faq', labelKey: 'nav.faq' },
    { path: '/contact', labelKey: 'nav.contact' },
  ];

  return (
    <header className="sticky top-0 z-40 shadow-lg bg-white border-b border-slate-200">
      {/* TOP HELPLINE & ANNOUNCEMENT STRIP */}
      <div className="bg-slate-950 text-slate-300 py-1.5 px-4 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Registration & Tagline */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('topBar.registrationBadge')}</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400 font-medium">
              {language === 'hi'
                ? 'सतर्कता • पारदर्शिता • जन सेवा • निष्पक्षता'
                : 'Vigilance • Transparency • Public Service'}
            </span>
          </div>

          {/* Right: Phone, Email & Language Switcher */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('topBar.helpline')}:</span>
              <a href={`tel:${organizationData.phones[0]}`} className="font-semibold underline">
                {organizationData.phones[0]}
              </a>
              <span>/</span>
              <a href={`tel:${organizationData.phones[1]}`} className="font-semibold underline">
                {organizationData.phones[1]}
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <a href={`mailto:${organizationData.email}`} className="font-semibold underline">
                {organizationData.email}
              </a>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* BRAND & ACTION BAR */}
      <div className="py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center gap-3.5 group" aria-label="Corruption Free State Home">
            <img
              src="/logo.png"
              alt="Corruption Free State Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain shadow-sm border border-slate-200 group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-blue-950 leading-tight">
                {language === 'hi' ? 'भ्रष्टाचार मुक्त राज्य' : 'Corruption Free State'}
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold text-amber-600 tracking-wider uppercase">
                {language === 'hi' ? 'भ्रष्टाचार नियंत्रण • सम्बंध समाधान' : 'Corruption Control Initiative'}
              </div>
            </div>
          </Link>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/awareness#search"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors"
              title="Search Portal Knowledge Base"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>{language === 'hi' ? 'खोजें' : 'Search Portal'}</span>
            </Link>

            <Link
              to="/report-corruption"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <AlertTriangle className="w-4 h-4 text-amber-300" />
              <span>{t('nav.reportCTA')}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="xl:hidden p-2 text-slate-700 hover:text-blue-950 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label={language === 'hi' ? 'नेविगेशन मेनू खोलें' : 'Open Navigation Menu'}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* DESKTOP NAVIGATION BAR */}
      <nav className="hidden xl:block bg-blue-950 text-white border-b border-blue-900" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
          <div className="flex items-center space-x-0.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-3 transition-colors inline-block border-b-2 ${
                    isActive
                      ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                      : 'text-slate-200 hover:bg-blue-900 hover:text-white border-transparent'
                  }`}
                >
                  {t(item.labelKey)}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Accessible Mobile Drawer Navigation */}
      <MobileDrawerNav isOpen={mobileDrawerOpen} onClose={() => setMobileDrawerOpen(false)} />
    </header>
  );
};
