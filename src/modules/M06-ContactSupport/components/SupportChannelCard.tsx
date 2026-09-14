import React from 'react';
import { Link } from 'react-router-dom';
import type { SupportChannel } from '../types/contact';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Phone, MessageSquare, MapPin, Send, ArrowRight, ExternalLink } from 'lucide-react';

interface SupportChannelCardProps {
  channel: SupportChannel;
}

export const SupportChannelCard: React.FC<SupportChannelCardProps> = ({ channel }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? channel.titleHi : channel.titleEn;
  const desc = language === 'hi' ? channel.descHi : channel.descEn;
  const actionLabel = language === 'hi' ? channel.actionLabelHi : channel.actionLabelEn;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Phone':
        return <Phone className="w-5 h-5 text-amber-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-blue-600" />;
      case 'Send':
        return <Send className="w-5 h-5 text-indigo-600" />;
      default:
        return <Phone className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans hover:border-blue-900 transition-all flex flex-col justify-between group">
      <div className="space-y-3">
        <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
          {renderIcon(channel.iconName)}
        </div>

        <h4 className="text-base font-bold text-slate-900 uppercase">{title}</h4>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">{desc}</p>
      </div>

      <div className="pt-2 border-t border-slate-100">
        {channel.isExternal ? (
          <a
            href={channel.href}
            target={channel.href.startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors uppercase tracking-wider"
          >
            <span>{actionLabel}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <Link
            to={channel.href}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors uppercase tracking-wider"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};
