import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { StaticTrackingNotice } from '../components/StaticTrackingNotice';
import { TrackingForm } from '../components/TrackingForm';
import { DemoTrackingOption } from '../components/DemoTrackingOption';
import { TrackingResult } from '../components/TrackingResult';
import { TrackingEmptyState } from '../components/TrackingEmptyState';
import { TrackingHelp } from '../components/TrackingHelp';
import { DEMO_COMPLAINTS } from '../data/demoTracking';
import type { DemoComplaint } from '../types/tracking';
import { Search } from 'lucide-react';
import '../styles/tracking.css';

export const TrackComplaintPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedRef, setSearchedRef] = useState<string>('');
  const [activeResult, setActiveResult] = useState<DemoComplaint | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  useEffect(() => {
    const queryId = searchParams.get('id');
    if (queryId) {
      handlePerformSearch(queryId);
    }
  }, [searchParams]);

  const handlePerformSearch = (refCode: string) => {
    const cleaned = refCode.trim().toUpperCase();
    setSearchedRef(cleaned);
    setHasSearched(true);

    if (DEMO_COMPLAINTS[cleaned]) {
      setActiveResult(DEMO_COMPLAINTS[cleaned]);
    } else {
      setActiveResult(null);
    }

    setSearchParams({ id: cleaned });
  };

  const handleSelectDemo = (code: string) => {
    handlePerformSearch(code);
  };

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.track') }]} />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="tracking-hero-gradient text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 border border-amber-500/40 rounded-full text-xs font-bold text-amber-300">
            <Search className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'शिकायत ट्रैकिंग मॉड्यूल M04' : 'Complaint Tracking Module M04'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'शिकायत की स्थिति देखें' : 'Track Your Complaint'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'अपनी शिकायत की वर्तमान स्थिति तथा प्रगति समयसीमा देखने के लिए आबंटित संदर्भ संख्या का उपयोग करें।'
              : 'Check the status and progress timeline of a complaint using its assigned reference number.'}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* MANDATORY STATIC NOTICE */}
        <StaticTrackingNotice />

        {/* RESPONSIVE LAYOUT CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: FORM & DEMO SHORTCUTS (5 COLS ON DESKTOP) */}
          <div className="lg:col-span-5 space-y-6">
            <TrackingForm initialValue={searchedRef} onSearch={handlePerformSearch} />
            <DemoTrackingOption onSelectDemo={handleSelectDemo} />
          </div>

          {/* RIGHT COLUMN: TRACKING RESULT / EMPTY STATE (7 COLS ON DESKTOP) */}
          <div className="lg:col-span-7 space-y-6">
            {hasSearched ? (
              <TrackingResult
                searchedRef={searchedRef}
                result={activeResult}
                onTryDemo={() => handleSelectDemo('DEMO-0001')}
              />
            ) : (
              <TrackingEmptyState onTryDemo={() => handleSelectDemo('DEMO-0001')} />
            )}
          </div>
        </div>

        {/* HELP & PRIVACY SECTION */}
        <div className="pt-4 border-t border-slate-200">
          <TrackingHelp />
        </div>

      </section>
    </div>
  );
};
