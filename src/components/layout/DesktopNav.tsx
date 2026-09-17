import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

export const DesktopNav: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/about', labelKey: 'nav.about' },
    { path: '/citizen-rights', labelKey: 'nav.citizenRights' },
    { path: '/faq', labelKey: 'nav.faq' },
    { path: '/contact', labelKey: 'nav.contact' },
  ];

  return (
    <nav aria-label="Main Navigation" className="hidden md:block bg-blue-950 text-white border-b border-blue-900">
      <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 py-3 transition-colors inline-block border-b-2 ${
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
  );
};

