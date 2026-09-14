import React from 'react';

interface ComplaintReferenceInputProps {
  label: string;
  placeholder?: string;
  value: string;
  error?: string | null;
  onChange: (value: string) => void;
  id?: string;
}

export const ComplaintReferenceInput: React.FC<ComplaintReferenceInputProps> = ({
  label,
  placeholder = 'Enter complaint reference',
  value,
  error,
  onChange,
  id = 'complaint-ref-input',
}) => {
  return (
    <div className="space-y-1.5 w-full">
      <label htmlFor={id} className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full px-4 py-3.5 bg-slate-50 border rounded-xl font-mono text-sm font-bold text-slate-900 focus:bg-white focus:outline-none transition-all ${
            error
              ? 'border-rose-500 focus:border-rose-600 focus:ring-2 focus:ring-rose-200'
              : 'border-slate-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-100'
          }`}
        />
      </div>

      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-rose-600 flex items-center gap-1 pt-0.5">
          <span>⚠️</span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};
