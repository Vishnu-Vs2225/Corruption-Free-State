import React from 'react';
import type { TenderDemo } from '../types/transparency';
import { useLanguage } from '../../../i18n/LanguageContext';
import { FileSpreadsheet, Building2, Calendar, Tag } from 'lucide-react';

interface TenderCardProps {
  tender: TenderDemo;
}

export const TenderCard: React.FC<TenderCardProps> = ({ tender }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? tender.titleHi : tender.title;
  const department = language === 'hi' ? tender.departmentHi : tender.department;
  const status = language === 'hi' ? tender.statusHi : tender.status;
  const category = language === 'hi' ? tender.categoryHi : tender.category;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans hover:border-blue-900 transition-all">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-mono font-bold text-blue-950">{tender.reference}</span>
        </div>
        <span className="px-2.5 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded font-mono text-xs font-bold">
          {status}
        </span>
      </div>

      <div className="space-y-2">
        <h4 className="text-base font-bold text-slate-900 leading-snug">{title}</h4>
        
        <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
          <Building2 className="w-3.5 h-3.5 text-slate-400" />
          <span>{department}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
        <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
          <span className="text-[10px] text-slate-500 font-sans uppercase block">
            {language === 'hi' ? 'अनुमानित मूल्य' : 'Estimated Value'}
          </span>
          <span className="font-bold text-blue-950">{tender.value}</span>
        </div>

        <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl space-y-0.5">
          <span className="text-[10px] text-slate-500 font-sans uppercase block">
            {language === 'hi' ? 'अंतिम तिथि' : 'Closing Date'}
          </span>
          <span className="font-bold text-slate-800">{tender.closingDate}</span>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-sans">
        <div className="flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-amber-600" />
          <span>{category}</span>
        </div>

        <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{tender.publishDate}</span>
        </div>
      </div>
    </div>
  );
};
