import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Scale, FileText, ShieldAlert, ArrowRight } from 'lucide-react';

interface RightsCardProps {
  type: 'rti' | 'charter' | 'dbt';
}

export const RightsCard: React.FC<RightsCardProps> = ({ type }) => {
  const { language } = useLanguage();

  const getConfig = () => {
    switch (type) {
      case 'rti':
        return {
          icon: <Scale className="w-6 h-6 text-amber-500" />,
          titleEn: 'Right to Information (RTI)',
          titleHi: 'सूचना का अधिकार (RTI)',
          descEn: 'Statutory right under RTI Act 2005 to inspect government records, file logs, and public expenditures.',
          descHi: 'RTI अधिनियम 2005 के तहत सरकारी रिकॉर्ड्स, फाइलों और बजटीय व्यय का निरीक्षण करने का कानूनी अधिकार।',
          route: '/citizen-rights/rti',
          tag: 'RTI ACT 2005',
        };
      case 'charter':
        return {
          icon: <FileText className="w-6 h-6 text-blue-500" />,
          titleEn: 'Citizen Charter Standards',
          titleHi: 'नागरिक अधिकार पत्र (Citizen Charter)',
          descEn: 'Time-bound delivery of public services (ration card, certificates, permits) with penalty provisions for delays.',
          descHi: 'लोक सेवाओं (राशन कार्ड, प्रमाण पत्र) की समयबद्ध डिलीवरी तथा समय-सीमा उल्लंघन पर अधिकारी पर पेनल्टी का प्रावधान।',
          route: '/citizen-rights/citizen-charter',
          tag: 'SERVICE SLA',
        };
      case 'dbt':
        return {
          icon: <ShieldAlert className="w-6 h-6 text-emerald-500" />,
          titleEn: 'Direct Benefit Transfer (DBT)',
          titleHi: 'प्रत्यक्ष लाभ अंतरण (DBT) अधिकार',
          descEn: 'Direct bank transfer of welfare benefits. Commission demands or extortion by middlemen is a punishable crime.',
          descHi: 'कल्याणकारी योजनाओं की राशि सीधे खाते में प्राप्त करने का अधिकार। बिचौलियों द्वारा कमीशन मांगना संज्ञेय अपराध।',
          route: '/citizen-rights/dbt',
          tag: 'WELFARE RIGHTS',
        };
    }
  };

  const config = getConfig();

  return (
    <div className="bg-white border border-slate-200 hover:border-blue-900 rounded-2xl p-6 shadow-sm space-y-4 transition-all flex flex-col justify-between group">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
            {config.icon}
          </div>
          <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wider">
            {config.tag}
          </span>
        </div>

        <h3 className="text-lg font-bold text-blue-950 uppercase">{language === 'hi' ? config.titleHi : config.titleEn}</h3>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">{language === 'hi' ? config.descHi : config.descEn}</p>
      </div>

      <div className="pt-2 border-t border-slate-100">
        <Link
          to={config.route}
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors uppercase tracking-wider"
        >
          <span>{language === 'hi' ? 'अधिकार समझें' : 'Understand Right'}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
