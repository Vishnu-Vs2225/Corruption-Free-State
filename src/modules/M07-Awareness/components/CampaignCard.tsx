import React from 'react';
import type { CampaignItem } from '../types/awareness';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Megaphone, Calendar } from 'lucide-react';

interface CampaignCardProps {
  campaign: CampaignItem;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? campaign.titleHi : campaign.titleEn;
  const period = language === 'hi' ? campaign.periodHi : campaign.periodEn;
  const desc = language === 'hi' ? campaign.descHi : campaign.descEn;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 font-sans hover:border-blue-900 transition-all">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase font-mono">
          <Megaphone className="w-4 h-4 text-amber-500" />
          <span>AWARENESS DRIVE</span>
        </div>

        <span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-mono font-bold rounded uppercase">
          {campaign.status}
        </span>
      </div>

      <h4 className="text-base font-bold text-slate-900 leading-snug">{title}</h4>
      <p className="text-xs text-slate-600 leading-relaxed font-sans">{desc}</p>

      <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
        <Calendar className="w-3.5 h-3.5" />
        <span>{period}</span>
      </div>
    </div>
  );
};
