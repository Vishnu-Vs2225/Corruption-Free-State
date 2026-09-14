import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';

export const SafetyNotice: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-tight">
              {language === 'hi' ? 'आपकी सुरक्षा एवं गोपनीयता' : 'Your Safety & Confidentiality'}
            </h3>
            <span className="text-xs text-amber-400 font-mono">
              {language === 'hi' ? 'व्हिसलब्लोअर संरक्षण दिशानिर्देश' : 'Whistleblower Legal Framework'}
            </span>
          </div>
        </div>

        <Link
          to="/whistleblower-protection"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase rounded-lg transition-colors"
        >
          <span>{language === 'hi' ? 'सुरक्षा नियम देखें' : 'View Whistleblower Protection'}</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 font-sans leading-relaxed">
        <div className="space-y-2">
          <div className="font-bold text-white uppercase text-[11px] tracking-wider">
            {language === 'hi' ? 'गोपनीयता अधिकार' : 'Confidentiality Protection'}
          </div>
          <p>
            {language === 'hi'
              ? 'व्हिसलब्लोअर संरक्षण अधिनियम, 2014 के तहत शिकायतकर्ता की पहचान को पूर्णतः गुप्त रखने और किसी भी उत्पीड़न से सुरक्षा का वैधानिक प्रावधान है।'
              : 'The Whistleblowers Protection Act, 2014 provides statutory guarantees ensuring strict identity confidentiality and immunity against harassment.'}
          </p>
        </div>

        {/* Emergency Warning Notice */}
        <div className="space-y-2 p-3.5 bg-red-950/60 border border-red-900 rounded-xl text-red-200">
          <div className="font-bold uppercase text-[11px] flex items-center gap-1.5 text-red-300">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'तत्काल संकट / आपातकालीन सूचना' : 'Immediate Danger Warning'}</span>
          </div>
          <p className="text-[11px]">
            {language === 'hi'
              ? 'यदि आपको अपनी व्यक्तिगत सुरक्षा हेतु तत्काल खतरा है, तो कृपया स्थानीय पुलिस अथवा आपातकालीन हेल्पलाइन (112) से तुरंत संपर्क करें। यह वेबसाइट आपातकालीन सेवा नहीं है।'
              : 'If you are in immediate physical danger, contact local emergency services or law enforcement immediately. This organization is not an emergency response hotline.'}
          </p>
        </div>
      </div>
    </div>
  );
};
