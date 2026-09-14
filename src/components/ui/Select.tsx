import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  error?: string;
  requiredMarker?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  helperText,
  error,
  requiredMarker = false,
  className = '',
  id,
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label htmlFor={selectId} className="text-xs font-bold text-slate-700 uppercase block">
          {label} {requiredMarker && <span className="text-red-600">*</span>}
        </label>
      )}

      <select
        id={selectId}
        className={`w-full p-3 bg-slate-50 border ${
          error ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
        } rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition-colors ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-[11px] font-bold text-red-600">{error}</p>}
      {!error && helperText && <p className="text-[11px] text-slate-500 font-mono">{helperText}</p>}
    </div>
  );
};
