import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { SafetyNotice } from '../components/SafetyNotice';
import { Lock, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';

export const WhistleblowerPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumb items={[{ label: t('nav.whistleblower') }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>{t('whistleblower.title')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('whistleblower.title')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {t('whistleblower.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* STATUTORY OVERVIEW */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <ShieldCheck className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-blue-950">
                {t('whistleblower.protectionTitle')}
              </h2>
              <span className="text-xs text-slate-500 font-mono">STATUTORY LEGAL PROTECTION FRAMEWORK</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {t('whistleblower.protectionDesc')}
          </p>
        </div>

        {/* SAFETY NOTICE COMPONENT */}
        <SafetyNotice />

        {/* DO'S AND DONT'S GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* DO'S */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900 font-bold uppercase tracking-wider text-sm border-b border-emerald-200 pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>{t('whistleblower.dosTitle')}</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-800 font-sans leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>{language === 'hi' ? 'केवल सत्य, लिखित एवं सत्यापनीय साक्ष्यों के आधार पर ही शिकायत दर्ज करें।' : 'File complaints based strictly on true, documented, and verifiable evidence.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>{language === 'hi' ? 'यदि व्यक्तिगत सुरक्षा को खतरा हो तो गोपनीय (गुमनाम) विकल्प चुनें।' : 'Choose confidential/anonymous reporting if personal safety or career is at risk.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>{language === 'hi' ? 'दस्तावेजों की मूल प्रतियों को सुरक्षित स्थान पर रखें और केवल प्रतियां संलग्न करें।' : 'Keep original evidence files in safe custody; attach copies only.'}</span>
              </li>
            </ul>
          </div>

          {/* DONT'S */}
          <div className="bg-red-50/70 border border-red-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-red-900 font-bold uppercase tracking-wider text-sm border-b border-red-200 pb-3">
              <XCircle className="w-5 h-5 text-red-700" />
              <span>{t('whistleblower.dontsTitle')}</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-800 font-sans leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-700 font-bold">•</span>
                <span>{language === 'hi' ? 'व्यक्तिगत दुश्मनी या झूठे आरोपों के तहत शिकायत न दर्ज कराएं (यह कानूनी अपराध है)।' : 'Do not lodge complaints out of personal malice or unverified rumors.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-700 font-bold">•</span>
                <span>{language === 'hi' ? 'गैर-कानूनी तरीकों (जैसे अनधिकृत हैकिंग या चोरी) से साक्ष्य न जुटाएं।' : 'Do not collect evidence through unlawful means like hacking or theft.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-700 font-bold">•</span>
                <span>{language === 'hi' ? 'जांच जारी रहने तक सोशल मीडिया पर अपरिपक्व खुलासे न करें।' : 'Avoid premature public disclosures on social media while inquiry is ongoing.'}</span>
              </li>
            </ul>
          </div>

        </div>

      </section>
    </div>
  );
};
