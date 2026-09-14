import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <span className="text-sm font-bold text-slate-900 leading-snug">{title}</span>
        <div className="p-1 bg-slate-100 text-slate-700 rounded-full flex-shrink-0">
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {isOpen && (
        <div
          id={`accordion-content-${id}`}
          className="px-4 pb-4 pt-1 text-xs text-slate-600 font-sans leading-relaxed border-t border-slate-100 bg-slate-50/50"
        >
          {children}
        </div>
      )}
    </div>
  );
};
