import React from 'react';

export const AccessibilitySkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-amber-500 focus:text-slate-950 focus:font-bold focus:text-xs focus:uppercase focus:rounded-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-950"
    >
      मुख्य सामग्री पर जाएं (Skip to main content)
    </a>
  );
};
