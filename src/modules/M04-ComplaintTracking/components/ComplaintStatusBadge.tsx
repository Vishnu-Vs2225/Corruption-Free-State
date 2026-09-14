import React from 'react';
import type { TrackingStatus } from '../types/tracking';
import { useLanguage } from '../../../i18n/LanguageContext';
import { CheckCircle2, Clock, AlertTriangle, ArrowRightCircle, CheckCheck, XCircle } from 'lucide-react';

interface ComplaintStatusBadgeProps {
  status: TrackingStatus;
  size?: 'sm' | 'md' | 'lg';
}

export const ComplaintStatusBadge: React.FC<ComplaintStatusBadgeProps> = ({ status, size = 'md' }) => {
  const { language } = useLanguage();

  const getStatusConfig = () => {
    switch (status) {
      case 'received':
        return {
          icon: <CheckCircle2 className="w-4 h-4 text-blue-700" />,
          labelEn: 'Received',
          labelHi: 'प्राप्त हुई',
          bgColor: 'bg-blue-50 border-blue-300 text-blue-900',
        };
      case 'under_review':
        return {
          icon: <Clock className="w-4 h-4 text-amber-700 animate-spin-slow" />,
          labelEn: 'Under Review',
          labelHi: 'समीक्षाधीन',
          bgColor: 'bg-amber-50 border-amber-400 text-amber-950',
        };
      case 'information_required':
        return {
          icon: <AlertTriangle className="w-4 h-4 text-rose-700" />,
          labelEn: 'Information Required',
          labelHi: 'अतिरिक्त सूचना अपेक्षित',
          bgColor: 'bg-rose-50 border-rose-300 text-rose-950',
        };
      case 'action_in_progress':
        return {
          icon: <ArrowRightCircle className="w-4 h-4 text-indigo-700" />,
          labelEn: 'Action in Progress',
          labelHi: 'कार्यवाही प्रगति पर',
          bgColor: 'bg-indigo-50 border-indigo-300 text-indigo-950',
        };
      case 'resolved':
        return {
          icon: <CheckCheck className="w-4 h-4 text-emerald-700" />,
          labelEn: 'Resolved',
          labelHi: 'समाधानित',
          bgColor: 'bg-emerald-50 border-emerald-300 text-emerald-950',
        };
      case 'closed':
        return {
          icon: <XCircle className="w-4 h-4 text-slate-600" />,
          labelEn: 'Closed',
          labelHi: 'समाप्त / बंद',
          bgColor: 'bg-slate-100 border-slate-300 text-slate-800',
        };
      default:
        return {
          icon: <Clock className="w-4 h-4 text-slate-600" />,
          labelEn: 'Status Unknown',
          labelHi: 'स्थिति अज्ञात',
          bgColor: 'bg-slate-100 border-slate-300 text-slate-800',
        };
    }
  };

  const config = getStatusConfig();
  const label = language === 'hi' ? config.labelHi : config.labelEn;

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1 border',
    md: 'px-3 py-1 text-xs sm:text-sm gap-1.5 border font-semibold',
    lg: 'px-4 py-1.5 text-sm sm:text-base gap-2 border-2 font-bold',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-sans tracking-wide shadow-sm ${config.bgColor} ${sizeClasses[size]}`}
    >
      {config.icon}
      <span>{label}</span>
    </span>
  );
};
