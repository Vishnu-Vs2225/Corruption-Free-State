import React from 'react';
import { SOCIAL_LINKS } from '../data/socialLinks';
import { useLanguage } from '../../../i18n/LanguageContext';
import { organizationData } from '../../../data/organization';
import { Share2, CheckCircle2, ExternalLink, UserCheck } from 'lucide-react';

export const SocialMediaHub: React.FC = () => {
  const { language } = useLanguage();
  const verifiedLinks = SOCIAL_LINKS.filter((s) => s.verified);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm font-sans">
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

      {/* FOUNDER & LEADERSHIP HIGHLIGHT */}
      <div className="p-4 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm border border-blue-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md">
            <UserCheck className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
              {language === 'hi' ? 'संस्थापक (Founder)' : 'Founder & Leadership'}
            </div>
            <div className="text-sm font-black text-white tracking-wide">
              {language === 'hi' ? organizationData.founderHindi : organizationData.founder}
            </div>
          </div>
        </div>

        <a
          href={organizationData.socialHandles.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shrink-0 shadow"
        >
          <span>Facebook Profile</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* SOCIAL LINKS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        {verifiedLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-slate-50 hover:bg-blue-950 hover:text-white border border-slate-200 rounded-xl space-y-1.5 transition-all group font-mono block text-center"
          >
            <div className="flex items-center justify-center gap-1 text-xs font-bold text-slate-800 group-hover:text-amber-400">
              <span className="capitalize">{link.platform}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-400" />
            </div>

            <div className="text-[11px] text-slate-600 group-hover:text-slate-200 font-sans font-semibold truncate px-1">
              {link.label}
            </div>

            <span className="text-[10px] text-slate-400 group-hover:text-amber-300 flex items-center justify-center gap-0.5 pt-0.5">
              <span>{language === 'hi' ? 'देखें' : 'Visit Link'}</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
