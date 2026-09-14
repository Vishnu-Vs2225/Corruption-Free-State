import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block font-mono">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-4xl font-black text-blue-950 uppercase tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">{subtitle}</p>}
      <div className={`w-16 h-1 bg-amber-500 rounded ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};
