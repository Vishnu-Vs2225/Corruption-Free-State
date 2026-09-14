import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { X, AlertTriangle } from 'lucide-react';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-80 max-w-[85vw] bg-blue-950 text-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP BRAND & CLOSE BUTTON */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-blue-900 mb-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full bg-white p-0.5" />
              <span className="font-black text-sm text-white">CORRUPTION FREE STATE</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-300 hover:text-white rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* MENU LINKS */}
          <nav aria-label="Mobile Navigation" className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive ? 'bg-amber-500 text-slate-950 font-extrabold' : 'text-slate-200 hover:bg-blue-900'
                  }`}
                >
                  <span>{t(item.labelKey)}</span>
                  <span>➔</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM LANGUAGE & REPORT CTA */}
        <div className="pt-6 border-t border-blue-900 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400 font-mono">LANGUAGE:</span>
            <LanguageSwitcher />
          </div>

          <Link
            to="/report-corruption"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg"
          >
            <AlertTriangle className="w-4 h-4 text-amber-300" />
            <span>{t('nav.reportCTA')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
