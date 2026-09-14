import React from 'react';
import { AddressCard } from './AddressCard';
import { RegistrationCard } from './RegistrationCard';
import { useLanguage } from '../../../i18n/LanguageContext';

export const OfficeInformation: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight">
        {language === 'hi' ? 'कार्यालय एवं संस्था ब्योरा' : 'Office & Registration Info'}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AddressCard />
        <RegistrationCard />
      </div>
    </div>
  );
};
