import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { LayoutDashboard, ArrowRight } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const { language } = useLanguage();

  const overviewCards = [
    {
      id: 'ov-1',
      title: language === 'hi' ? 'सार्वजनिक बजट जानकारी' : 'Budget Information',
      desc: language === 'hi' ? 'केन्द्रीय एवं राज्य वित्त विभागों के माध्यम से सुलभ' : 'Available through official finance portals & publications.',
      route: '/transparency/budget',
      tag: 'FINANCE',
    },
    {
      id: 'ov-2',
      title: language === 'hi' ? 'निविदा एवं खरीद पोर्टल' : 'Tenders & Procurement',
      desc: language === 'hi' ? 'केन्द्रीय सार्वजनिक खरीद पोर्टल (CPPP) एवं GeM संसाधनों द्वारा उपलब्ध' : 'Accessible via CPPP and GeM procurement resources.',
      route: '/transparency/tenders',
      tag: 'PROCUREMENT',
    },
    {
      id: 'ov-3',
      title: language === 'hi' ? 'सार्वजनिक व्यय एवं ऑडिट' : 'Public Expenditure',
      desc: language === 'hi' ? 'कैग (CAG) लेखा परीक्षा रिपोर्ट एवं कोषागार अभिलेखों में दर्ज' : 'Recorded in CAG audit reports and state treasury archives.',
      route: '/transparency/expenditure',
      tag: 'AUDIT',
    },
    {
      id: 'ov-4',
      title: language === 'hi' ? 'संपत्ति घोषणा अभिलेख' : 'Asset Declarations',
      desc: language === 'hi' ? 'वैधानिक नियमों के तहत लोक सेवकों की प्रकटीकरण निर्देशिका' : 'Statutory public official disclosure directories.',
      route: '/transparency/assets',
      tag: 'DISCLOSURE',
    },
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-900 uppercase">
            <LayoutDashboard className="w-4 h-4 text-amber-500" />
            <span>{language === 'hi' ? 'पारदर्शिता अवलोकन डैशबोर्ड' : 'TRANSPARENCY OVERVIEW DASHBOARD'}</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 uppercase">
            {language === 'hi' ? 'सार्वजनिक सूचना क्षेत्र' : 'Public Information Resources'}
          </h3>
        </div>

        <span className="px-3 py-1 bg-slate-100 border border-slate-300 text-slate-700 font-mono text-xs font-bold rounded-full">
          {language === 'hi' ? 'सूचनात्मक डैशबोर्ड' : 'Informational Dashboard'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewCards.map((card) => (
          <div key={card.id} className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-amber-600 uppercase">{card.tag}</span>
              <h4 className="text-sm font-bold text-slate-900">{card.title}</h4>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">{card.desc}</p>
            </div>

            <Link
              to={card.route}
              className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors pt-2 uppercase"
            >
              <span>{language === 'hi' ? 'विवरण देखें' : 'View Info'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
