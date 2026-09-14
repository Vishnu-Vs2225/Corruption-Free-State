import React from 'react';
import type { CorruptionType } from '../types/awareness';
import { useLanguage } from '../../../i18n/LanguageContext';
import { DollarSign, ShieldAlert, FileSpreadsheet, Users, AlertCircle, Lock } from 'lucide-react';

interface CorruptionTypeCardProps {
  item: CorruptionType;
}

export const CorruptionTypeCard: React.FC<CorruptionTypeCardProps> = ({ item }) => {
  const { language } = useLanguage();

  const name = language === 'hi' ? item.nameHi : item.nameEn;
  const desc = language === 'hi' ? item.descHi : item.descEn;
  const example = language === 'hi' ? item.exampleHi : item.exampleEn;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign':
        return <DollarSign className="w-5 h-5 text-amber-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-600" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-600" />;
      case 'AlertCircle':
        return <AlertCircle className="w-5 h-5 text-amber-700" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-purple-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans hover:border-blue-900 transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center">
          {renderIcon(item.iconName)}
        </div>

        <h4 className="text-base font-bold text-blue-950 uppercase">{name}</h4>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">{desc}</p>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
        <span className="font-bold text-amber-700 block uppercase text-[10px]">
          {language === 'hi' ? 'व्यावहारिक उदाहरण:' : 'Practical Example:'}
        </span>
        <p className="text-slate-700 leading-relaxed italic">{example}</p>
      </div>
    </div>
  );
};
