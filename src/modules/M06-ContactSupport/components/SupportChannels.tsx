import React from 'react';
import { SUPPORT_CHANNELS } from '../data/contact';
import { SupportChannelCard } from './SupportChannelCard';
import { useLanguage } from '../../../i18n/LanguageContext';

export const SupportChannels: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-black text-blue-950 uppercase tracking-tight">
        {language === 'hi' ? 'सहायता माध्यम' : 'Support Channels'}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUPPORT_CHANNELS.map((channel) => (
          <SupportChannelCard key={channel.id} channel={channel} />
        ))}
      </div>
    </div>
  );
};
