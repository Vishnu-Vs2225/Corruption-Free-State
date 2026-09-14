import React from 'react';
import { SOCIAL_LINKS } from '../data/socialLinks';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Share2, CheckCircle2, ExternalLink } from 'lucide-react';

export const SocialMediaHub: React.FC = () => {
  const { language } = useLanguage();
  const verifiedLinks = SOCIAL_LINKS.filter((s) => s.verified);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm font-sans">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2 text-blue-950">
          <Share2 className="w-5 h-5 text-amber-500" />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {language === 'hi' ? 'आधिकारिक सोशल मीडिया माध्यम' : 'OFFICIAL SOCIAL MEDIA HUB'}
          </h4>
        </div>

        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-mono font-bold rounded-full">
          VERIFIED CHANNELS
        </span>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed">
        {language === 'hi'
          ? 'आधिकारिक सोशल मीडिया चैनल सार्वजनिक जानकारी एवं अपडेट प्रदान करने के लिए उपलब्ध हैं। औपचारिक शिकायतों के लिए शिकायत पंजीकरण प्रक्रिया का उपयोग करें।'
          : 'Official social channels provide public updates. Please use the designated reporting process for formal corruption complaints.'}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        {verifiedLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-50 hover:bg-blue-950 hover:text-white border border-slate-200 rounded-xl text-center space-y-1 transition-all group font-mono"
          >
            <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-slate-800 group-hover:text-amber-400">
              <span className="capitalize">{link.platform}</span>
              <CheckCircle2 className="w-3 h-3 text-emerald-600 group-hover:text-emerald-400" />
            </div>

            <span className="text-[10px] text-slate-400 group-hover:text-slate-300 flex items-center justify-center gap-0.5">
              <span>Visit</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
