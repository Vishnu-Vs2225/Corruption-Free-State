import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { BookOpen, ShieldAlert } from 'lucide-react';

export const AwarenessIntro: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm font-sans">
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-blue-950">
        <BookOpen className="w-5 h-5 text-amber-500" />
        <h3 className="text-xl font-black uppercase tracking-tight">
          {language === 'hi' ? 'जागरूकता क्यों महत्वपूर्ण है?' : 'Why Awareness Matters'}
        </h3>
      </div>

      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        {language === 'hi'
          ? 'भ्रष्टाचार सार्वजनिक सेवाओं, संसाधनों और संस्थाओं में जन-विश्वास को बुरी तरह प्रभावित करता है। अपने अधिकारों को समझना और सही शिकायत माध्यमों की जानकारी होना नागरिकों को निडर होकर प्रतिक्रिया देने में सक्षम बनाता है।'
          : 'Corruption severely affects public services, government resources, and trust in institutions. Understanding your rights and knowing appropriate complaint channels empowers citizens to act with confidence.'}
      </p>

      <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex items-start gap-3 text-xs text-amber-950 font-sans">
        <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="block font-bold uppercase tracking-wider text-amber-900">
            {language === 'hi' ? 'ℹ सामान्य जन-जागरूकता सूचना' : 'ℹ GENERAL PUBLIC AWARENESS NOTICE'}
          </strong>
          <p className="leading-relaxed text-slate-700">
            {language === 'hi'
              ? 'इस वेबसाइट पर प्रस्तुत उदाहरण एवं मार्गदर्शिकाएं केवल सामान्य जन-जागरूकता हेतु हैं। इन्हें विधिक सलाह (legal advice) के रूप में न लिया जाए।'
              : 'Examples and guides provided on this portal are for general public awareness and should not be treated as legal advice.'}
          </p>
        </div>
      </div>
    </div>
  );
};
