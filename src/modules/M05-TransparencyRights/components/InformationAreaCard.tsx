import React from 'react';
import { Link } from 'react-router-dom';
import type { InformationArea } from '../types/transparency';
import { useLanguage } from '../../../i18n/LanguageContext';
import { DollarSign, FileSpreadsheet, BarChart3, Award, ArrowRight } from 'lucide-react';

interface InformationAreaCardProps {
  area: InformationArea;
}

export const InformationAreaCard: React.FC<InformationAreaCardProps> = ({ area }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? area.titleHi : area.title;
  const description = language === 'hi' ? area.descriptionHi : area.description;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'DollarSign':
        return <DollarSign className="w-6 h-6 text-emerald-600" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-amber-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-indigo-600" />;
      default:
        return <DollarSign className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm hover:border-blue-900 transition-all flex flex-col justify-between group">
      <div className="space-y-3">
        <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
          {renderIcon(area.iconName)}
        </div>

        <h3 className="text-lg font-bold text-blue-950 uppercase">{title}</h3>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">{description}</p>
      </div>

      <div className="pt-2">
        <Link
          to={area.route}
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors uppercase tracking-wider"
        >
          <span>{language === 'hi' ? 'खोजें' : 'Explore'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
