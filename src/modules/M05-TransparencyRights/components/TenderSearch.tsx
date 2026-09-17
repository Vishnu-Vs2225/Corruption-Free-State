import React, { useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Search, Filter, AlertCircle } from 'lucide-react';

interface TenderSearchProps {
  onSearchSubmit: (query: string, category: string) => void;
}

export const TenderSearch: React.FC<TenderSearchProps> = ({ onSearchSubmit }) => {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('ALL');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(query, category);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
        <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <Filter className="w-4 h-4 text-amber-500" />
          <span>{language === 'hi' ? 'सरकारी निविदाएं खोजें' : 'Search Government Tenders'}</span>
        </h4>
        <span className="text-[11px] font-mono text-slate-400">TENDER SEARCH</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        <div className="sm:col-span-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'hi' ? 'शीर्षक या निविदा संदर्भ से खोजें...' : 'Search by title or reference...'}
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-sans text-slate-900 focus:bg-white focus:border-blue-900 outline-none"
          />
        </div>

        <div className="sm:col-span-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-sans text-slate-900 focus:bg-white focus:border-blue-900 outline-none"
          >
            <option value="ALL">{language === 'hi' ? 'सभी श्रेणियां (All Categories)' : 'All Categories'}</option>
            <option value="Security">{language === 'hi' ? 'सुरक्षा एवं इलेक्ट्रॉनिक्स' : 'Security & Electronics'}</option>
            <option value="Energy">{language === 'hi' ? 'ऊर्जा एवं अवसंरचना' : 'Energy & Infrastructure'}</option>
            <option value="Water">{language === 'hi' ? 'जल एवं स्वच्छता' : 'Water & Sanitation'}</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="w-full p-3 bg-blue-950 hover:bg-blue-900 text-amber-400 text-xs font-bold uppercase rounded-xl transition-colors inline-flex items-center justify-center gap-1.5 shadow"
          >
            <Search className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'खोजें' : 'Search'}</span>
          </button>
        </div>
      </div>

      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 text-xs text-slate-500 font-sans">
        <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
        <span>
          {language === 'hi'
            ? 'कीवर्ड, विभाग, स्थिति या श्रेणी के आधार पर आधिकारिक निविदा रिकॉर्ड्स खोजें।'
            : 'Search official government tenders by keyword, department, status, or procurement type.'}
        </span>
      </div>
    </form>
  );
};
