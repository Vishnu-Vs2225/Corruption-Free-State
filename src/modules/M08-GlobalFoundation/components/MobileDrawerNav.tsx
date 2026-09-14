import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { organizationData } from '../../../data/organization';
import { LanguageSwitcher } from '../../../components/common/LanguageSwitcher';
import { X, ShieldCheck, Phone, AlertTriangle, ChevronRight } from 'lucide-react';
import { setupFocusTrap, lockBodyScroll, unlockBodyScroll } from '../utils/a11y';

export interface MobileDrawerNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawerNav: React.FC<MobileDrawerNavProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!isOpen) return;

    lockBodyScroll(true);
    const cleanupFocus = setupFocusTrap(drawerRef.current);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      unlockBodyScroll();
      cleanupFocus();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 xl:hidden flex"
      role="dialog"
      aria-modal="true"
      aria-label={language === 'hi' ? 'मुख्य नेविगेशन मेनू' : 'Main Navigation Menu'}
    >
      {/* Semi-transparent Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        ref={drawerRef}
        className="relative ml-auto w-full max-w-xs bg-slate-900 text-white h-full flex flex-col shadow-2xl z-10 overflow-y-auto border-l border-slate-800"
      >
        {/* Header section inside drawer */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-100">
                {language === 'hi' ? 'भ्रष्टाचार मुक्त राज्य' : 'Corruption Free State'}
              </div>
              <div className="text-[10px] text-amber-400 font-medium">
                Reg: {organizationData.registrationNumber}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label={language === 'hi' ? 'मेनू बंद करें' : 'Close navigation menu'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Language selector strip */}
        <div className="px-4 py-3 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            {language === 'hi' ? 'भाषा बदलें' : 'Language'}
          </span>
          <LanguageSwitcher />
        </div>

        {/* Navigation list */}
        <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Mobile navigation links">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{t(item.labelKey)}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-500'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Footer actions inside drawer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 space-y-3">
          <Link
            to="/report-corruption"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3 bg-red-700 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-colors"
          >
            <AlertTriangle className="w-4 h-4 text-amber-300" />
            <span>{t('nav.reportCTA')}</span>
          </Link>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('topBar.helpline')}:</span>
            <a href={`tel:${organizationData.phones[0]}`} className="font-bold text-amber-400 underline">
              {organizationData.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
