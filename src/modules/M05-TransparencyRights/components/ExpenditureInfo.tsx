import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { BarChart3, FileSearch, Building } from 'lucide-react';

export const ExpenditureInfo: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center text-blue-700">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 uppercase">
            {language === 'hi' ? 'व्यय की श्रेणियां' : 'Expenditure Categories'}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {language === 'hi'
              ? 'पूंजीगत व्यय (अवसंरचना, सड़क, स्कूल) एवं राजस्व व्यय (वेतन, रखरखाव, प्रशासनिक खर्च)।'
              : 'Capital expenditure (infrastructure, roads, health) and revenue expenditure (salaries, maintenance).'}
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center text-emerald-700">
            <FileSearch className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 uppercase">
            {language === 'hi' ? 'सार्वजनिक ऑडिट रिपोर्ट' : 'Public Spending Audits'}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {language === 'hi'
              ? 'नियंत्रक एवं महालेखापरीक्षक (CAG) द्वारा राज्य विभागों की वित्तीय अनियमितताओं एवं फंड उपयोग का वैधानिक परीक्षण।'
              : 'Statutory examination of state department fund utilization by the Comptroller and Auditor General (CAG).'}
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center text-amber-700">
            <Building className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-slate-900 uppercase">
            {language === 'hi' ? 'कोषागार ट्रैकिंग' : 'Treasury Tracking'}
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            {language === 'hi'
              ? 'ई-कोषागार एवं सार्वजनिक वित्तीय प्रबंधन प्रणाली (PFMS) के माध्यम से सरकारी भुगतानों का सीधा हिसाब।'
              : 'Public Financial Management System (PFMS) tracking direct government payments and disbursements.'}
          </p>
        </div>
      </div>
    </div>
  );
};
