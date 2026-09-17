import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { PageSeo } from '../components/PageSeo';
import { FileQuestion, Home, AlertTriangle, Search, PhoneCall, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/faq?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="py-12 md:py-20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
      <PageSeo
        title={language === 'hi' ? '404 - पृष्ठ नहीं मिला | भ्रष्टाचार मुक्त राज्य' : '404 - Page Not Found | Corruption Free State'}
        description="The requested page could not be found on the Corruption Free State portal."
      />

      <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-amber-500 mb-6 shadow-inner animate-pulse">
        <FileQuestion className="w-10 h-10" />
      </div>

      <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
        404 ERROR
      </span>

      <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
        {language === 'hi' ? 'क्षमा करें, यह पृष्ठ उपलब्ध नहीं है' : 'Page Not Found'}
      </h1>

      <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl leading-relaxed">
        {language === 'hi'
          ? 'आपके द्वारा खोजा गया वेब पृष्ठ स्थानांतरित कर दिया गया है, हटा दिया गया है या इसका यूआरएल गलत दर्ज हुआ है।'
          : 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'}
      </p>

      {/* SEARCH BAR FORM */}
      <form onSubmit={handleSearchSubmit} className="w-full max-w-md mb-8 flex gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'पोर्टल पर सामग्री खोजें...' : 'Search portal topics...'}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow flex items-center gap-1.5"
        >
          <span>{language === 'hi' ? 'खोजें' : 'Search'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* QUICK SUGGESTIONS GRID */}
      <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm text-left mb-8">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
          {language === 'hi' ? 'अनुशंसित अनुभाग:' : 'Recommended Destinations'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold">
          <Link
            to="/"
            className="p-3.5 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 flex items-center gap-3 transition-colors text-slate-800"
          >
            <Home className="w-5 h-5 text-blue-600 shrink-0" />
            <div>
              <div>{language === 'hi' ? 'मुख्य पृष्ठ' : 'Homepage'}</div>
              <div className="text-[11px] font-normal text-slate-500">Return to the central portal home</div>
            </div>
          </Link>

          <Link
            to="/citizen-rights"
            className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 flex items-center gap-3 transition-colors text-slate-800"
          >
            <AlertTriangle className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <div>{language === 'hi' ? 'नागरिक अधिकार' : 'Citizen Rights'}</div>
              <div className="text-[11px] font-normal text-slate-500">View RTI and citizen charter info</div>
            </div>
          </Link>

          <Link
            to="/faq"
            className="p-3.5 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 flex items-center gap-3 transition-colors text-slate-800"
          >
            <Search className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <div>{language === 'hi' ? 'प्रश्नोत्तरी (FAQ)' : 'FAQ & Knowledge'}</div>
              <div className="text-[11px] font-normal text-slate-500">Frequently asked questions</div>
            </div>
          </Link>

          <Link
            to="/contact"
            className="p-3.5 rounded-xl border border-slate-200 hover:border-purple-400 hover:bg-purple-50/30 flex items-center gap-3 transition-colors text-slate-800"
          >
            <PhoneCall className="w-5 h-5 text-purple-600 shrink-0" />
            <div>
              <div>{language === 'hi' ? 'सम्पर्क एवं हेल्पलाइन' : 'Helpline & Contact'}</div>
              <div className="text-[11px] font-normal text-slate-500">Get direct citizen support</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
