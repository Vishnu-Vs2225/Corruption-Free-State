import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { ChevronDown } from 'lucide-react';

export const DesktopNav: React.FC = () => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const isResourceActive = ['/citizen-rights', '/whistleblower-protection', '/faq'].includes(location.pathname);

  return (
    <nav aria-label="Main Navigation" className="hidden xl:block bg-blue-950 text-white border-b border-blue-900">
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
        <div className="flex items-center space-x-1">
          
          {/* Home */}
          <Link
            to="/"
            aria-current={location.pathname === '/' ? 'page' : undefined}
            className={`px-3.5 py-3 transition-colors inline-block border-b-2 ${
              location.pathname === '/'
                ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                : 'text-slate-200 hover:bg-blue-900 hover:text-white border-transparent'
            }`}
          >
            {t('nav.home')}
          </Link>

          {/* About */}
          <Link
            to="/about"
            aria-current={location.pathname === '/about' ? 'page' : undefined}
            className={`px-3.5 py-3 transition-colors inline-block border-b-2 ${
              location.pathname === '/about'
                ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                : 'text-slate-200 hover:bg-blue-900 hover:text-white border-transparent'
            }`}
          >
            {t('nav.about')}
          </Link>

          {/* Report */}
          <Link
            to="/report-corruption"
            aria-current={location.pathname === '/report-corruption' ? 'page' : undefined}
            className={`px-3.5 py-3 transition-colors inline-block border-b-2 text-red-300 ${
              location.pathname === '/report-corruption'
                ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                : 'hover:bg-blue-900 hover:text-white border-transparent'
            }`}
          >
            {t('nav.report')}
          </Link>

          {/* Transparency */}
          <Link
            to="/transparency"
            aria-current={location.pathname === '/transparency' ? 'page' : undefined}
            className={`px-3.5 py-3 transition-colors inline-block border-b-2 ${
              location.pathname === '/transparency'
                ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                : 'text-slate-200 hover:bg-blue-900 hover:text-white border-transparent'
            }`}
          >
            {t('nav.transparency')}
          </Link>

          {/* Resources Dropdown (Citizen Rights, Whistleblower, FAQ) */}
          <div className="relative" onMouseLeave={() => setResourcesOpen(false)}>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              onMouseEnter={() => setResourcesOpen(true)}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              className={`px-3.5 py-3 transition-colors inline-flex items-center gap-1 border-b-2 ${
                isResourceActive
                  ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                  : 'text-slate-200 hover:bg-blue-900 hover:text-white border-transparent'
              }`}
            >
              <span>{language === 'hi' ? 'संसाधन एवं अधिकार' : 'Resources'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
            </button>

            {resourcesOpen && (
              <div className="absolute top-full left-0 w-56 bg-blue-950 border border-blue-800 shadow-2xl rounded-b-lg py-2 z-50 animate-in fade-in duration-150">
                <Link
                  to="/citizen-rights"
                  onClick={() => setResourcesOpen(false)}
                  aria-current={location.pathname === '/citizen-rights' ? 'page' : undefined}
                  className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-blue-900 hover:text-amber-400 border-b border-blue-900/50"
                >
                  {t('nav.citizenRights')}
                </Link>
                <Link
                  to="/whistleblower-protection"
                  onClick={() => setResourcesOpen(false)}
                  aria-current={location.pathname === '/whistleblower-protection' ? 'page' : undefined}
                  className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-blue-900 hover:text-amber-400 border-b border-blue-900/50"
                >
                  {t('nav.whistleblower')}
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setResourcesOpen(false)}
                  aria-current={location.pathname === '/faq' ? 'page' : undefined}
                  className="block px-4 py-2.5 text-xs text-slate-200 hover:bg-blue-900 hover:text-amber-400"
                >
                  {t('nav.faq')}
                </Link>
              </div>
            )}
          </div>

          {/* Awareness */}
          <Link
            to="/awareness"
            aria-current={location.pathname === '/awareness' ? 'page' : undefined}
            className={`px-3.5 py-3 transition-colors inline-block border-b-2 ${
              location.pathname === '/awareness'
                ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                : 'text-slate-200 hover:bg-blue-900 hover:text-white border-transparent'
            }`}
          >
            {t('nav.awareness')}
          </Link>

          {/* News */}
          <Link
            to="/news"
            aria-current={location.pathname === '/news' ? 'page' : undefined}
            className={`px-3.5 py-3 transition-colors inline-block border-b-2 ${
              location.pathname === '/news'
                ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                : 'text-slate-200 hover:bg-blue-900 hover:text-white border-transparent'
            }`}
          >
            {t('nav.news')}
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
            className={`px-3.5 py-3 transition-colors inline-block border-b-2 ${
              location.pathname === '/contact'
                ? 'bg-blue-900 text-amber-400 border-amber-400 font-bold'
                : 'text-slate-200 hover:bg-blue-900 hover:text-white border-transparent'
            }`}
          >
            {t('nav.contact')}
          </Link>

        </div>
      </div>
    </nav>
  );
};
