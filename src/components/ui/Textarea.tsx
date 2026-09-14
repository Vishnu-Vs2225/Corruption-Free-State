import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  requiredMarker?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  error,
  requiredMarker = false,
  className = '',
  id,
  rows = 4,
  ...props
}) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label htmlFor={textareaId} className="text-xs font-bold text-slate-700 uppercase block">
          {label} {requiredMarker && <span className="text-red-600">*</span>}
        </label>
      )}

      <textarea
        id={textareaId}
        rows={rows}
        className={`w-full p-3 bg-slate-50 border ${
          error ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
        } rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-colors resize-none font-sans ${className}`}
        {...props}
      />

      {error && <p className="text-[11px] font-bold text-red-600">{error}</p>}
      {!error && helperText && <p className="text-[11px] text-slate-500 font-mono">{helperText}</p>}
    </div>
  );
};
