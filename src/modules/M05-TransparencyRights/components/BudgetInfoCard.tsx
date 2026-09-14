import React from 'react';
import type { BudgetItem } from '../types/transparency';
import { useLanguage } from '../../../i18n/LanguageContext';
import { DollarSign, CheckCircle2, ExternalLink } from 'lucide-react';

interface BudgetInfoCardProps {
  item: BudgetItem;
}

export const BudgetInfoCard: React.FC<BudgetInfoCardProps> = ({ item }) => {
  const { language } = useLanguage();

  const sector = language === 'hi' ? item.sectorHi : item.sector;
  const status = language === 'hi' ? item.statusHi : item.status;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans hover:border-blue-900 transition-all">
      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-emerald-600" />
          <h4 className="text-base font-bold text-slate-900">{sector}</h4>
        </div>
        <span className="px-2.5 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded font-mono text-xs font-bold">
          {item.id}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
        <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-0.5">
          <span className="text-slate-500 font-sans block uppercase text-[10px]">
            {language === 'hi' ? 'आवंटित बजट' : 'Allocated Budget'}
          </span>
          <span className="text-base font-bold text-blue-950">{item.allocated}</span>
        </div>

        <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl space-y-0.5">
          <span className="text-slate-500 font-sans block uppercase text-[10px]">
            {language === 'hi' ? 'व्यय राशि' : 'Amount Spent'}
          </span>
          <span className="text-base font-bold text-emerald-700">{item.spent}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
        <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{status}</span>
        </div>

        {item.officialSourceUrl && (
          <a
            href={item.officialSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-900 hover:text-amber-600 font-bold uppercase text-[11px]"
          >
            <span>{language === 'hi' ? 'स्रोत देखें' : 'View Source'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
