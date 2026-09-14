import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DemoSubmission } from '../components/DemoSubmission';

export const DemoSubmissionPage: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumb items={[{ label: t('nav.report'), path: '/report-corruption' }, { label: language === 'hi' ? 'डेमो स्थिति' : 'Demo Result' }]} />
      <DemoSubmission onReset={() => navigate('/report-corruption/form')} />
    </div>
  );
};
