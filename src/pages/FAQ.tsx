import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { faqList } from '../data/faq';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { HelpCircle, Search, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'FAQ-01': true });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqList.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const q = item.question[language].toLowerCase();
    const a = item.answer[language].toLowerCase();
    const s = searchQuery.toLowerCase().trim();
    const matchesSearch = !s || q.includes(s) || a.includes(s);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12">
      <Breadcrumb items={[{ label: t('nav.faq') }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>{t('nav.faq')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('nav.faq')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'नागरिक अधिकारों, RTI प्रक्रियाओं, व्हिसलब्लोअर सुरक्षा और पारदर्शिता से संबंधित बहुप्रचलित प्रश्नों के उत्तर।'
              : 'Frequently asked questions regarding citizen rights, RTI procedures, whistleblower protections, and public transparency.'}
          </p>
        </div>
      </section>

      {/* FAQ SEARCH & CATEGORY FILTERS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16">
        
        {/* SEARCH BAR */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'hi' ? 'प्रश्नों में खोजें (जैसे साक्ष्य, RTI, गुमनाम)...' : 'Search FAQ questions...'}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:border-blue-900 outline-none shadow-sm font-sans"
          />
        </div>

        {/* CATEGORY FILTER BUTTONS */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors ${
              selectedCategory === 'all' ? 'bg-blue-950 text-amber-400' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'hi' ? 'सभी प्रश्न' : 'All FAQs'}
          </button>
          <button
            onClick={() => setSelectedCategory('rights')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors ${
              selectedCategory === 'rights' ? 'bg-blue-950 text-amber-400' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'hi' ? 'नागरिक अधिकार' : 'Citizen Rights'}
          </button>
          <button
            onClick={() => setSelectedCategory('whistleblower')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors ${
              selectedCategory === 'whistleblower' ? 'bg-blue-950 text-amber-400' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {language === 'hi' ? 'व्हिसलब्लोअर सुरक्षा' : 'Whistleblower'}
          </button>
          <button
            onClick={() => setSelectedCategory('rti')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors ${
              selectedCategory === 'rti' ? 'bg-blue-950 text-amber-400' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            RTI
          </button>
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div key={faq.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-amber-600 font-bold uppercase block">
                      {faq.categoryLabel[language]}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {faq.question[language]}
                    </h3>
                  </div>

                  <div className="p-1.5 bg-slate-100 text-slate-700 rounded-full flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 font-sans leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer[language]}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white border border-slate-200 rounded-xl text-xs text-slate-500 font-mono">
              {language === 'hi' ? 'कोई प्रश्न नहीं मिला।' : 'No matching questions found.'}
            </div>
          )}
        </div>

      </section>
    </div>
  );
};
