import React from 'react';
import { CONTACT_CONFIG } from '../data/contact';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Award, CheckCircle2 } from 'lucide-react';

export const RegistrationCard: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 font-sans">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2 text-blue-950">
          <Award className="w-5 h-5 text-amber-500" />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {language === 'hi' ? 'संगठन पंजीकरण विवरण' : 'REGISTRATION INFORMATION'}
          </h4>
        </div>
        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-mono font-bold rounded-full">
          VERIFIED
        </span>
      </div>

      <div className="space-y-2 text-xs">
        <span className="text-slate-500 block font-mono">
          {language === 'hi' ? 'आधिकारिक पंजीकरण संख्या:' : 'Statutory Registration Number:'}
        </span>
        <div className="text-xl sm:text-2xl font-black font-mono text-blue-950 tracking-wider">
          {CONTACT_CONFIG.registrationNumber}
        </div>
      </div>

      <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-800 font-medium">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <span>
          {language === 'hi'
            ? 'सार्वजनिक पहल अधिनियम के तहत विधिवत पंजीकृत संस्था'
            : 'Duly registered public initiative under statutory framework'}
        </span>
      </div>
    </div>
  );
};
