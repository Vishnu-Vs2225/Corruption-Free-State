import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const ReportReviewPage: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-16 max-w-4xl mx-auto px-4">
      <Breadcrumb items={[{ label: t('nav.report'), path: '/report-corruption' }, { label: language === 'hi' ? 'समीक्षा' : 'Review' }]} />

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6 text-center">
        <ShieldCheck className="w-12 h-12 text-blue-950 mx-auto" />
        <h1 className="text-2xl font-black text-blue-950 uppercase">
          {language === 'hi' ? 'शिकायत समीक्षा पृष्ठ' : 'Report Review Interface'}
        </h1>
        <p className="text-xs text-slate-600 max-w-md mx-auto font-sans">
          {language === 'hi'
            ? 'शिकायत दर्ज करने की प्रक्रिया फॉर्म के चरण 4 से संचालित होती है।'
            : 'The report review step is part of the multi-step reporting workflow.'}
        </p>

        <button
          onClick={() => navigate('/report-corruption/form')}
          className="px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2"
        >
          <span>{language === 'hi' ? 'शिकायत फॉर्म खोलें' : 'Open Complaint Form'}</span>
          <ArrowRight className="w-4 h-4 text-amber-400" />
        </button>
      </div>
    </div>
  );
};
