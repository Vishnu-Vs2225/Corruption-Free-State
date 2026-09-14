import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export const Breadcrumb: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
  const { t } = useLanguage();

  return (
    <nav className="bg-slate-100 border-b border-slate-200 py-2.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-600 font-medium">
        <Link to="/" className="hover:text-blue-950 flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>{t('nav.home')}</span>
        </Link>

        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            {item.path ? (
              <Link to={item.path} className="hover:text-blue-950">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 font-bold">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};
