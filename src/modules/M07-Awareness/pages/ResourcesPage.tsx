import React, { useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { ResourceCard } from '../components/ResourceCard';
import { EDUCATIONAL_RESOURCES } from '../data/resources';
import { BookOpen, Search, Filter } from 'lucide-react';

export const ResourcesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filteredResources = EDUCATIONAL_RESOURCES.filter((res) => {
    const matchesQuery =
      !query.trim() ||
      res.titleEn.toLowerCase().includes(query.toLowerCase()) ||
      res.titleHi.includes(query);

    const matchesCategory = category === 'all' || res.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.awareness'), path: '/awareness' }, { label: 'Educational Resources' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>RESOURCE LIBRARY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'शैक्षणिक संसाधन एवं मार्गदर्शिकाएं' : 'Educational Resources & Guides'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'आरटीआई आवेदन प्रारूप, कानूनी नियम पुस्तिकाओं एवं नागरिक सुरक्षा हैंडबुक की निर्देशिका।'
              : 'Browse guides, RTI application toolkits, posters, and legal literacy resources.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* FILTER TOOLBAR */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
              <Filter className="w-4 h-4 text-amber-500" />
              <span>{language === 'hi' ? 'संसाधन खोजें एवं फ़िल्टर करें' : 'Search & Filter Resources'}</span>
            </h4>
            <span className="text-[11px] font-mono text-slate-400">{filteredResources.length} RESOURCES AVAILABLE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-8">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={language === 'hi' ? 'शीर्षक से खोजें...' : 'Search by title...'}
                  className="w-full p-3 pl-9 bg-slate-50 border border-slate-300 rounded-xl text-xs font-sans text-slate-900 focus:bg-white focus:border-blue-900 outline-none"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div className="sm:col-span-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-sans text-slate-900 focus:bg-white focus:border-blue-900 outline-none"
              >
                <option value="all">{language === 'hi' ? 'सभी श्रेणियां (All)' : 'All Categories'}</option>
                <option value="guide">{language === 'hi' ? 'मार्गदर्शिका (Guides)' : 'Guides'}</option>
                <option value="poster">{language === 'hi' ? 'पोस्टर व हैंडबुक' : 'Posters & Handbooks'}</option>
                <option value="legal">{language === 'hi' ? 'कानूनी नियम' : 'Legal Resources'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* RESOURCE GRID */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        ) : (
          <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
            <p className="text-xs text-slate-600 font-sans">
              {language === 'hi' ? 'आपकी खोज से मेल खाता कोई संसाधन नहीं मिला।' : 'No educational resources match your search criteria.'}
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
