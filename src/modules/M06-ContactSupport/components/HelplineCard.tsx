import React from 'react';
import { CONTACT_CONFIG } from '../data/contact';
import { useLanguage } from '../../../i18n/LanguageContext';
import { PhoneCall, Clock } from 'lucide-react';

export const HelplineCard: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 helpline-glow-card space-y-4 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 text-amber-400">
          <PhoneCall className="w-5 h-5" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider">
            {language === 'hi' ? 'भ्रष्टाचार निवारण हेल्पलाइन' : 'ANTI-CORRUPTION HELPLINE'}
          </span>
        </div>

        <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
          <Clock className="w-3.5 h-3.5" />
          <span>24x7</span>
        </div>
      </div>

      <div className="space-y-1 text-center sm:text-left">
        <span className="text-xs text-slate-400 block font-mono">
          {language === 'hi' ? 'आधिकारिक सहायता नंबर:' : 'Official Assistance Number:'}
        </span>
        <div className="text-3xl sm:text-5xl font-black font-mono tracking-wider text-amber-400 pt-1">
          {CONTACT_CONFIG.phone}
        </div>
      </div>

      <p className="text-xs text-slate-300 font-sans leading-relaxed">
        {language === 'hi'
          ? 'नागरिक सहायता, मार्गदर्शन एवं पूछताछ हेतु 24 घंटे कॉल करें।'
          : 'Available for citizen inquiries, guidance, and assistance.'}
      </p>

      <div className="pt-2">
        <a
          href={`tel:${CONTACT_CONFIG.phone}`}
          className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4 text-slate-950" />
          <span>{language === 'hi' ? '☎ अभी कॉल करें' : '☎ Call Now'}</span>
        </a>
      </div>
    </div>
  );
};
