import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import type { ReportingMode } from '../../../types/complaint';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { ReportHero } from '../components/ReportHero';
import { ReportNotice } from '../components/ReportNotice';
import { HowToReport } from '../components/HowToReport';
import { ReportingTypeSelector } from '../components/ReportingTypeSelector';
import { SafetyNotice } from '../components/SafetyNotice';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const ReportLandingPage: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState<ReportingMode | null>(null);

  const handleModeSelect = (mode: ReportingMode) => {
    setSelectedMode(mode);
    navigate(`/report-corruption/form?mode=${mode}`);
  };

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumb items={[{ label: t('nav.report') }]} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <ReportHero />
        <ReportNotice />
      </section>

      {/* HOW TO REPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowToReport />
      </section>

      {/* REPORTING TYPE SELECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReportingTypeSelector selectedMode={selectedMode} onSelectMode={handleModeSelect} />
      </section>

      {/* WHAT INFORMATION IS NEEDED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl font-bold text-blue-950 uppercase tracking-tight">
                {language === 'hi' ? 'शिकायत हेतु आवश्यक जानकारी' : 'What Information You Should Prepare'}
              </h2>
              <p className="text-xs text-slate-500 font-sans">
                {language === 'hi'
                  ? 'सटीक एवं तथ्य-आधारित शिकायत दर्ज करने के लिए निम्नलिखित बिंदु तैयार रखें:'
                  : 'Key factual elements recommended for lodging a report:'}
              </p>
            </div>

            <Link
              to="/report-corruption/guidelines"
              className="text-xs font-bold text-blue-950 hover:text-amber-600 flex items-center gap-1"
            >
              <span>{language === 'hi' ? 'पूर्ण दिशानिर्देश पढ़ें' : 'Read Full Guidelines'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="font-bold text-blue-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>WHAT (क्या हुआ?)</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {language === 'hi' ? 'घटना अथवा अनिमितता का स्पष्ट ब्योरा।' : 'Factual account of the irregularity.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="font-bold text-blue-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>WHEN & WHERE (कब और कहाँ?)</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {language === 'hi' ? 'तारीख, स्थान, कार्यालय एवं संबंधित जिला।' : 'Date, location, office, and concerned district.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="font-bold text-blue-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>WHO (कौन शामिल था?)</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {language === 'hi' ? 'अधिकारी या कर्मचारी का नाम व पदनाम (यदि ज्ञात हो)।' : 'Official or person involved (if known).'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="font-bold text-blue-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>EVIDENCE (साक्ष्य)</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {language === 'hi' ? 'प्रासंगिक रसीदें, पत्र, फोटो या वीडियो।' : 'Relevant receipts, letters, photos, or recordings.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHISTLEBLOWER & SAFETY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SafetyNotice />
      </section>

      {/* START REPORT FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white rounded-2xl p-8 space-y-4 border-t-4 border-amber-500 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'क्या आप शिकायत दर्ज करने हेतु तैयार हैं?' : 'Ready to Proceed with Demonstration?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-sans">
            {language === 'hi'
              ? 'प्रक्रिया शुरू करने के लिए अपना पसंदीदा रिपोर्टिंग मोड चुनें।'
              : 'Select your preferred mode to experience the reporting interface.'}
          </p>

          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => handleModeSelect('identified')}
              className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow"
            >
              {language === 'hi' ? 'पहचान सहित रिपोर्ट करें' : 'Start Identified Report'}
            </button>

            <button
              onClick={() => handleModeSelect('anonymous')}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow"
            >
              {language === 'hi' ? 'गुमनाम रिपोर्ट करें' : 'Start Anonymous Report'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
