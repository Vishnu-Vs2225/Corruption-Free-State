import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { ShieldAlert, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SafetyNotice: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-4 shadow-sm font-sans">
      <div className="flex items-center gap-2 text-rose-400 border-b border-slate-800 pb-3">
        <ShieldAlert className="w-5 h-5 flex-shrink-0" />
        <h4 className="text-sm font-bold uppercase tracking-wider">
          {language === 'hi' ? 'सुरक्षा एवं गोपनीयता निर्देश' : 'SAFETY & PRIVACY GUIDANCE'}
        </h4>
      </div>

      <p className="text-xs text-slate-300 font-sans leading-relaxed">
        {language === 'hi'
          ? 'सामान्य संपर्क माध्यमों द्वारा कभी भी पासवर्ड, बैंक पिन, ओटीपी या अति-संवेदनशील दस्तावेज साझा न करें।'
          : 'Do not share passwords, bank PINs, OTPs or other highly sensitive information through general contact channels.'}
      </p>

      <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span className="text-slate-400 text-center sm:text-left">
          {language === 'hi'
            ? 'नागरिक अधिकारों एवं RTI संबंधी जानकारी प्राप्त करने के लिए गाइड देखें:'
            : 'For citizen rights and RTI assistance, explore our guidance section:'}
        </span>

        <Link
          to="/citizen-rights"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider rounded-xl transition-colors flex-shrink-0 shadow"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{language === 'hi' ? 'नागरिक अधिकार' : 'Citizen Rights'}</span>
        </Link>
      </div>
    </div>
  );
};
