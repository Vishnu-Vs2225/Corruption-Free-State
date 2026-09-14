import React from 'react';
import { Info, CheckCircle2, AlertTriangle, XCircle, AlertCircle } from 'lucide-react';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'demo';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  className = '',
}) => {
  const styles = {
    info: {
      bg: 'bg-blue-50 border-blue-200 text-blue-900',
      icon: <Info className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />,
      titleColor: 'text-blue-950',
    },
    success: {
      bg: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />,
      titleColor: 'text-emerald-950',
    },
    warning: {
      bg: 'bg-amber-50 border-amber-300 text-amber-950',
      icon: <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />,
      titleColor: 'text-amber-950',
    },
    error: {
      bg: 'bg-red-50 border-red-200 text-red-900',
      icon: <XCircle className="w-5 h-5 text-red-700 flex-shrink-0 mt-0.5" />,
      titleColor: 'text-red-950',
    },
    demo: {
      bg: 'bg-slate-900 border-slate-800 text-slate-300',
      icon: <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />,
      titleColor: 'text-amber-400',
    },
  };

  const curr = styles[variant];

  return (
    <div className={`p-4 border rounded-xl flex items-start gap-3 text-xs shadow-sm ${curr.bg} ${className}`}>
      {curr.icon}
      <div className="space-y-1">
        {title && <span className={`font-bold block uppercase tracking-wider ${curr.titleColor}`}>{title}</span>}
        <div className="leading-relaxed font-sans">{children}</div>
      </div>
    </div>
  );
};
