import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  titleEn?: string;
  titleHi?: string;
  descriptionEn?: string;
  descriptionHi?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  titleEn = 'No Content Available',
  titleHi = 'कोई सामग्री उपलब्ध नहीं है',
  descriptionEn = 'Verified records will appear here when published.',
  descriptionHi = 'सत्यापित रिकॉर्ड्स प्रकाशित होने पर यहाँ दिखाई देंगे।',
  action,
}) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? titleHi : titleEn;
  const description = language === 'hi' ? descriptionHi : descriptionEn;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-sm font-sans">
      <div className="w-14 h-14 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center mx-auto text-slate-400">
        <Inbox className="w-7 h-7" />
      </div>

      <div className="space-y-1 max-w-md mx-auto">
        <h4 className="text-base font-bold text-slate-900 uppercase">{title}</h4>
        <p className="text-xs text-slate-600 leading-relaxed">{description}</p>
      </div>

      {action && <div className="pt-2">{action}</div>}
    </div>
  );
};
