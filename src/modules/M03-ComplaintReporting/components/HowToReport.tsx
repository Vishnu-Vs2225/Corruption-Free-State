import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { FileText, Paperclip, CheckSquare } from 'lucide-react';

export const HowToReport: React.FC = () => {
  const { language } = useLanguage();

  const steps = [
    {
      step: '01',
      icon: FileText,
      title: language === 'hi' ? 'विवरण दर्ज करें' : 'Describe the Incident',
      desc:
        language === 'hi'
          ? 'क्या हुआ, कब हुआ, और कौन सा विभाग शामिल था, इसका तथ्यात्मक ब्योरा लिखें।'
          : 'Provide factual details of what happened, location, and concerned department.',
    },
    {
      step: '02',
      icon: Paperclip,
      title: language === 'hi' ? 'साक्ष्य संलग्न करें' : 'Provide Evidence',
      desc:
        language === 'hi'
          ? 'दस्तावेज, रसीदें, तस्वीरें या ऑडियो/वीडियो साक्ष्य स्थानीय रूप से चुनें।'
          : 'Select relevant documents, receipts, images, or audio/video files locally.',
    },
    {
      step: '03',
      icon: CheckSquare,
      title: language === 'hi' ? 'समीक्षा एवं घोषणा' : 'Review & Declare',
      desc:
        language === 'hi'
          ? 'अपनी दर्ज जानकारी की समीक्षा करें और वैधानिक घोषणा स्वीकार करें।'
          : 'Review entered information and accept the statutory declaration.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
          {language === 'hi' ? 'शिकायत प्रक्रिया के 3 सरल चरण' : '3-Step Reporting Process'}
        </h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded">
                  STEP {item.step}
                </span>
                <Icon className="w-6 h-6 text-blue-950" />
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
