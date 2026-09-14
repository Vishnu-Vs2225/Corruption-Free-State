import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { ShieldCheck, FileText, Lock, ExternalLink } from 'lucide-react';

export const AssetInfo: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center text-amber-700">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 uppercase">
            {language === 'hi' ? 'संपत्ति घोषणा का उद्देश्य' : 'Why Declarations Matter'}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {language === 'hi'
              ? 'लोक सेवकों एवं जनप्रतिनिधियों की अचल व चल संपत्ति का प्रकटीकरण भ्रष्टाचार नियंत्रण एवं जन-विश्वास स्थापित करता है।'
              : 'Public official asset disclosure deters unlawful enrichment and builds public trust.'}
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center text-blue-700">
            <FileText className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 uppercase">
            {language === 'hi' ? 'प्रकट की जाने वाली जानकारी' : 'What May Be Disclosed'}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {language === 'hi'
              ? 'चल संपत्ति (बैंक खाते, शेयर, वाहन) तथा अचल संपत्ति (भूमि, भवन, अचल निवेश) का वार्षिक ब्योरा।'
              : 'Movable assets (bank balance, investments, vehicles) and immovable property (land, buildings).'}
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center text-emerald-700">
            <Lock className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 uppercase">
            {language === 'hi' ? 'आधिकारिक पहुंच' : 'Official Portal Access'}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {language === 'hi'
              ? 'सत्यापित संपत्ति घोषणाएं संबंधित राज्य विधानसभा, कार्मिक विभाग एवं निर्वाचन आयोग के पोर्टल पर उपलब्ध होती हैं।'
              : 'Verified asset filings are maintained by concerned assemblies, personnel departments, and election portals.'}
          </p>
        </div>
      </div>

      {/* SAMPLE ASSET CARD DEMO */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800 shadow-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
            {language === 'hi' ? 'नमूना संपत्ति प्रकटीकरण प्रारूप' : 'EXAMPLE ASSET DECLARATION LAYOUT'}
          </span>
          <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-[11px] font-mono">
            {language === 'hi' ? 'केवल निदर्शन' : 'DEMO CONTENT ONLY'}
          </span>
        </div>

        <p className="text-xs text-slate-300 font-sans leading-relaxed">
          {language === 'hi'
            ? 'यह वेबसाइट किसी अधिकारी की मनगढ़ंत संपत्ति सूची प्रदर्शित नहीं करती है। वास्तविक संपत्ति विवरण देखने हेतु आधिकारिक स्रोतों पर जाएं।'
            : 'This website does not generate fake official asset figures. To access genuine statutory declarations, please refer to official portals.'}
        </p>

        <div className="pt-2">
          <a
            href="https://eci.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase rounded-xl transition-colors shadow"
          >
            <span>{language === 'hi' ? 'निर्वाचन आयोग संपत्ति रिकॉर्ड्स ↗' : 'Election Commission Asset Records ↗'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
