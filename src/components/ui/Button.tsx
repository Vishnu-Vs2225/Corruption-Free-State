import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-bold tracking-wider uppercase rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  const variants = {
    primary: 'bg-blue-950 text-amber-400 hover:bg-blue-900 shadow-md border border-blue-900',
    secondary: 'bg-amber-500 text-slate-950 hover:bg-amber-600 shadow-md',
    outline: 'bg-transparent text-blue-950 border-2 border-blue-950 hover:bg-blue-950 hover:text-white',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-blue-950',
    danger: 'bg-red-700 text-white hover:bg-red-800 shadow-md',
    link: 'bg-transparent text-blue-950 underline hover:text-amber-600 p-0 shadow-none uppercase-none',
  };

  const sizes = {
    sm: 'text-[11px] px-3 py-1.5 gap-1.5',
    md: 'text-xs px-4 py-2.5 gap-2',
    lg: 'text-sm px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      disabled={disabled || loading}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
      <span>{children}</span>
    </button>
  );
};
