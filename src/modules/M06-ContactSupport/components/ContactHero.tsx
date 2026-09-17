import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { CONTACT_CONFIG } from '../data/contact';
import { PhoneCall, Send, LifeBuoy } from 'lucide-react';

export const ContactHero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 border-b-4 border-amber-500 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
          <LifeBuoy className="w-4 h-4 text-amber-400" />
          <span>{language === 'hi' ? 'नागरिक सहायता एवं हेल्पलाइन' : 'CITIZEN HELP & SUPPORT'}</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'संपर्क एवं सहायता केंद्र' : 'CONTACT & SUPPORT'}
          </h1>
          <p className="text-base sm:text-xl font-medium text-slate-200 font-sans">
            {language === 'hi' ? 'क्या आपको सहायता चाहिए या कोई प्रश्न है?' : 'Need help or have a question? We are here to assist.'}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-3xl">
          {language === 'hi'
            ? 'भ्रष्टाचार मुक्त राज्य से संपर्क करने के लिए उपयुक्त माध्यम चुनें अथवा हमारी हेल्पलाइन 9973076434 पर कॉल करें।'
            : 'Find the appropriate way to contact Corruption Free State or call our dedicated helpline.'}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`tel:${CONTACT_CONFIG.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            <PhoneCall className="w-4 h-4 text-slate-950" />
            <span>{language === 'hi' ? `हेल्पलाइन कॉल: ${CONTACT_CONFIG.phone}` : `Call ${CONTACT_CONFIG.phone}`}</span>
          </a>

          <Link
            to="/citizen-rights"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-blue-700 transition-colors"
          >
            <Send className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'नागरिक अधिकार देखें' : 'Citizen Rights'}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
