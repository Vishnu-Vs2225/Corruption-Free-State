import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { FileCheck2, ArrowRight } from 'lucide-react';

export const ProcurementProcess: React.FC = () => {
  const { language } = useLanguage();

  const steps = [
    { num: '01', title: language === 'hi' ? 'आवश्यकता निर्धारण' : 'Requirement', desc: language === 'hi' ? 'सार्वजनिक विभाग द्वारा कार्य या आपूर्ति का आकलन' : 'Public department assesses need & budget.' },
    { num: '02', title: language === 'hi' ? 'निविदा प्रकाशन' : 'Tender Published', desc: language === 'hi' ? 'सीपीपीपी पोर्टल पर खुली सूचना का प्रकाशन' : 'Notice published on official e-procurement.' },
    { num: '03', title: language === 'hi' ? 'बोली प्रस्तुति' : 'Bids Submitted', desc: language === 'hi' ? 'पात्र बोलीदाताओं द्वारा प्रतिस्पर्धी प्रस्तुतियां' : 'Eligible vendors submit competitive bids.' },
    { num: '04', title: language === 'hi' ? 'तकनीकी मूल्यांकन' : 'Evaluation', desc: language === 'hi' ? 'पारदर्शी समिति द्वारा तकनीकी एवं वित्तीय समीक्षा' : 'Committee evaluates technical & financial bids.' },
    { num: '05', title: language === 'hi' ? 'अनुबंध आबंटन' : 'Award & Contract', desc: language === 'hi' ? 'न्यूनतम वैध बोलीदाता (L1) को अनुबंध आवंटन' : 'Contract awarded to lowest compliant bidder (L1).' },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="space-y-1 border-b border-slate-200 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 uppercase">
          <FileCheck2 className="w-4 h-4 text-amber-500" />
          <span>{language === 'hi' ? 'सार्वजनिक खरीद प्रक्रिया' : 'PUBLIC PROCUREMENT PROCESS'}</span>
        </div>
        <h3 className="text-xl font-black text-blue-950 uppercase">
          {language === 'hi' ? 'निविदा प्रक्रिया के चरण' : 'Phases of Public Procurement'}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((step, idx) => (
          <div key={step.num} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 relative font-sans flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-600">
                <span>PHASE {step.num}</span>
                {idx < steps.length - 1 && <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300" />}
              </div>
              <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
