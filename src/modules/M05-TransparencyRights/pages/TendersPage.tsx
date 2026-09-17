import React, { useState } from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { DataNotice } from '../components/DataNotice';
import { ProcurementProcess } from '../components/ProcurementProcess';
import { TenderSearch } from '../components/TenderSearch';
import { TenderCard } from '../components/TenderCard';
import { OfficialSourceCard } from '../components/OfficialSourceCard';
import { TENDER_ITEMS, TENDER_OFFICIAL_SOURCES } from '../data/tenders';
import { FileSpreadsheet } from 'lucide-react';

export const TendersPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [tendersList, setTendersList] = useState(TENDER_ITEMS);

  const handleSearch = (query: string, category: string) => {
    let filtered = TENDER_ITEMS;

    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.titleHi.includes(q) ||
          t.reference.toLowerCase().includes(q)
      );
    }

    if (category !== 'ALL') {
      filtered = filtered.filter((t) => t.category.includes(category));
    }

    setTendersList(filtered);
  };

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.transparency'), path: '/transparency' }, { label: 'Tenders & Procurement' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <FileSpreadsheet className="w-4 h-4 text-amber-400" />
            <span>TENDERS & PROCUREMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'निविदाएं एवं सार्वजनिक खरीद' : 'Tenders & Procurement'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'सरकारी निविदाओं, अनुबंधों तथा ई-प्रोक्योरमेंट प्रक्रियाओं की जानकारी प्राप्त करें।'
              : 'Understand how public procurement information can be accessed, audited, and reviewed.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <DataNotice />

        <ProcurementProcess />

        <TenderSearch onSearchSubmit={handleSearch} />

        {/* TENDERS RESULT */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-blue-950 uppercase tracking-tight">
              {language === 'hi' ? 'सक्रिय निविदा रिकॉर्ड्स' : 'Active Tender Records'}
            </h2>
            <span className="text-xs font-mono text-slate-500">{tendersList.length} TENDER RECORDS FOUND</span>
          </div>

          {tendersList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tendersList.map((tender) => (
                <TenderCard key={tender.id} tender={tender} />
              ))}
            </div>
          ) : (
            <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
              <p className="text-xs text-slate-600 font-sans">
                {language === 'hi'
                  ? 'कोई निविदा रिकॉर्ड नहीं मिला।'
                  : 'No tender records match your filter criteria.'}
              </p>
            </div>
          )}
        </div>

        {/* OFFICIAL SOURCES */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'आधिकारिक निविदा पोर्टल' : 'Official Procurement Portals'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TENDER_OFFICIAL_SOURCES.map((source) => (
              <OfficialSourceCard key={source.id} source={source} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
