import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Scale, PhoneCall } from 'lucide-react';
import { organizationData } from '../../../data/organization';

export const ContactCTA: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
      {/* CITIZEN RIGHTS CTA */}
      <div className="bg-blue-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 border-b-4 border-amber-500 shadow-md">
        <div className="flex items-center gap-2 text-amber-400">
          <Scale className="w-5 h-5" />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {language === 'hi' ? 'नागरिक अधिकार एवं RTI' : 'Citizen Rights & RTI'}
          </h4>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {language === 'hi'
            ? 'RTI अधिनियम, गारंटीकृत लोक सेवाएं और सरकारी योजनाओं के तहत अपने अधिकारों की पूरी जानकारी लें।'
            : 'Explore full documentation regarding RTI provisions, Citizen Charter guarantees, and public services.'}
        </p>

        <div className="pt-2">
          <Link
            to="/citizen-rights"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow"
          >
            <span>{language === 'hi' ? 'अधिकार देखें ➔' : 'Explore Rights ➔'}</span>
          </Link>
        </div>
      </div>

      {/* HELPLINE CONTACT CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 border-b-4 border-blue-500 shadow-md">
        <div className="flex items-center gap-2 text-blue-400">
          <PhoneCall className="w-5 h-5" />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {language === 'hi' ? 'सीधा सम्पर्क एवं हेल्पलाइन' : 'Direct Helpline Contact'}
          </h4>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {language === 'hi'
            ? 'किसी भी सार्वजनिक पूछताछ हेतु हमारे आधिकारिक हेल्पलाइन नंबरों पर संपर्क करें: '
            : 'Reach out for any public inquiry via official helpline phones: '}
          <span className="text-amber-400 font-bold">{organizationData.phones[0]}</span>
        </p>

        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow border border-blue-700"
          >
            <span>{language === 'hi' ? 'सम्पर्क करें ➔' : 'Contact Us ➔'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
