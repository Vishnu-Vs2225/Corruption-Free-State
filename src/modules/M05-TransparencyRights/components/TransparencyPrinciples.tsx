import React from 'react';
import { TRANSPARENCY_PRINCIPLES } from '../data/transparency';
import { useLanguage } from '../../../i18n/LanguageContext';
import { BookOpen, ShieldCheck, Eye, Users } from 'lucide-react';

export const TransparencyPrinciples: React.FC = () => {
  const { language } = useLanguage();

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-500" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-blue-500" />;
      case 'Users':
        return <Users className="w-6 h-6 text-indigo-500" />;
      default:
        return <Eye className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
          {language === 'hi' ? 'पारदर्शिता के मूल सिद्धांत' : 'Transparency Principles'}
        </h2>
        <p className="text-xs text-slate-600 font-sans">
          {language === 'hi'
            ? 'प्रशासनिक खुलेपन और सार्वजनिक जवाबदेही के चार आधार स्तंभ'
            : 'Core principles fostering responsible governance and open access.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRANSPARENCY_PRINCIPLES.map((item) => {
          const title = language === 'hi' ? item.titleHi : item.title;
          const description = language === 'hi' ? item.descriptionHi : item.description;

          return (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm hover:border-blue-900 transition-all font-sans"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center">
                {renderIcon(item.iconName)}
              </div>
              <h3 className="text-sm font-bold text-slate-900 uppercase">{title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
