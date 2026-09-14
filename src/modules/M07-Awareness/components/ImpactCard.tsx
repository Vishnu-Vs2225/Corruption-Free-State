import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Building2, Coins, ShieldAlert, TrendingDown } from 'lucide-react';

interface ImpactCardProps {
  item: {
    id: string;
    titleEn: string;
    titleHi: string;
    descEn: string;
    descHi: string;
    iconName: string;
  };
}

export const ImpactCard: React.FC<ImpactCardProps> = ({ item }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? item.titleHi : item.titleEn;
  const desc = language === 'hi' ? item.descHi : item.descEn;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-600" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-amber-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      case 'TrendingDown':
        return <TrendingDown className="w-5 h-5 text-purple-600" />;
      default:
        return <Building2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 font-sans hover:border-blue-900 transition-all">
      <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center">
        {renderIcon(item.iconName)}
      </div>

      <h4 className="text-base font-bold text-slate-900 uppercase">{title}</h4>
      <p className="text-xs text-slate-600 leading-relaxed font-sans">{desc}</p>
    </div>
  );
};
