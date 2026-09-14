import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { organizationData } from '../../data/organization';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Phone, Mail, ShieldCheck, Menu, X, AlertTriangle } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 shadow-md">
      {/* TOP NOTIFICATION & HELPLINE BAR */}
      <div className="bg-slate-900 text-slate-300 py-1.5 px-4 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          
          {/* Left: Registration Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded text-[11px] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('topBar.registrationBadge')}</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400 font-semibold">
              {language === 'hi' ? 'भ्रष्टाचार नियंत्रण • सम्पर्क • समस्या • समाधान' : 'Corruption Control • Contact • Issues • Solution'}
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

            {/* Language Switcher Button */}
            <LanguageSwitcher />
          </div>

        </div>
      </div>

      {/* MAIN HEADER BRANDING & NAVIGATION BAR */}
      <div className="bg-white border-b border-slate-200 py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* BRAND LOGO & TITLE */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/logo.png"
              alt="Corruption Free State Official Logo"
              className="w-12 h-12 rounded-full object-contain shadow-sm border border-slate-200 group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-blue-950 leading-tight">
                {language === 'hi' ? 'भ्रष्टाचार मुक्त राज्य' : 'Corruption Free State'}
              </div>
              <div className="text-[11px] font-bold text-amber-600 tracking-wider uppercase">
                {language === 'hi' ? 'भ्रष्टाचार नियंत्रण • सम्बंध समाधान' : 'Corruption Control Initiative'}
              </div>
            </div>
          </Link>

          {/* RIGHT ACTION BUTTON (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/report-corruption"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors"
            >
              <AlertTriangle className="w-4 h-4 text-amber-300" />
              <span>{t('nav.reportCTA')}</span>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-blue-950 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* DESKTOP MAIN NAVIGATION STRIP */}
      <nav className="hidden xl:block bg-blue-950 text-white border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3.5 py-3 transition-colors inline-block border-b-2 ${
                    isActive
                      ? 'bg-blue-900 text-amber-400 border-amber-400'
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

      {/* MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-blue-950 text-white border-b border-blue-900 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-200 hover:bg-blue-900'
                  }`}
                >
                  <span>{t(item.labelKey)}</span>
                  <span>➔</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-blue-900">
            <Link
              to="/report-corruption"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded"
            >
              <AlertTriangle className="w-4 h-4 text-amber-300" />
              <span>{t('nav.reportCTA')}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
