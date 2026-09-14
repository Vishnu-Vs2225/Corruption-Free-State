import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { Search, AlertCircle } from 'lucide-react';

export const TrackComplaintPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [inputRefId, setInputRefId] = useState('');
  const [searched, setSearched] = useState(false);
  const [isDemoCode, setIsDemoCode] = useState(false);

  useEffect(() => {
    const queryId = searchParams.get('id');
    if (queryId) {
      setInputRefId(queryId);
      handleTrack(queryId);
    }
  }, [searchParams]);

  const handleTrack = (code: string) => {
    setSearched(true);
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'DEMO-0001' || cleaned === 'CFS-DEMO-001' || cleaned.startsWith('DEMO-')) {
      setIsDemoCode(true);
    } else {
      setIsDemoCode(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleTrack(inputRefId);
  };

  const sampleSteps = [
    {
      step: 1,
      title: language === 'hi' ? 'नमूना रिपोर्ट प्राप्त हुई' : 'Sample Report Received',
      date: '2026-09-10',
      completed: true,
      desc: language === 'hi' ? 'नागरिक द्वारा प्रस्तुत प्राथमिक सूचना दर्ज की गई।' : 'Initial demonstration intake record generated.',
    },
    {
      step: 2,
      title: language === 'hi' ? 'सूचना सत्यापन एवं समीक्षा' : 'Information Review',
      date: '2026-09-12',
      completed: true,
      desc: language === 'hi' ? 'प्रारंभिक तथ्यात्मक जांच एवं क्षेत्राधिकार समीक्षा।' : 'Preliminary jurisdictional & factual classification.',
    },
    {
      step: 3,
      title: language === 'hi' ? 'आगामी प्रशासनिक कार्यवाही' : 'Further Administrative Action',
      date: language === 'hi' ? 'प्रक्रियाधीन' : 'In Progress',
      completed: false,
      active: true,
      desc: language === 'hi' ? 'संबंधित जांच अधिकारी को प्रेषण एवं अनुपालन रिपोर्ट।' : 'Assignment to concerned inspection authority.',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumb items={[{ label: t('nav.track') }]} />

      {/* HERO HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <Search className="w-4 h-4 text-amber-400" />
            <span>{t('tracking.title')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('tracking.title')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {t('tracking.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* MANDATORY STATIC LIMITATION NOTICE */}
        <div className="p-4 bg-amber-50 border-2 border-amber-400/80 rounded-2xl flex items-start gap-3 text-xs text-amber-950 shadow-sm">
          <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold block uppercase tracking-wider text-amber-900">
              {language === 'hi' ? 'ℹ स्टैटिक वेबसाइट सीमाबद्धता सूचना' : 'ℹ Static Website Limitation Notice'}
            </span>
            <p className="leading-relaxed text-slate-700 font-sans">
              {language === 'hi'
                ? 'यह स्टैटिक वेबसाइट वास्तविक समय (लाइव) शिकायत डेटा प्राप्त या पुनर्प्राप्त नहीं कर सकती है। नीचे दिए गए परिणाम केवल उदाहरण एवं प्रदर्शन के उद्देश्य से प्रस्तुत किए गए हैं।'
                : 'This static website cannot retrieve live complaint information. Any timelines shown below are for sample demonstration purposes only.'}
            </p>
          </div>
        </div>

        {/* SEARCH FORM */}
        <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
          <label className="text-xs font-bold text-slate-800 uppercase block">
            {language === 'hi' ? 'शिकायत संदर्भ नंबर (Reference Code) दर्ज करें' : 'Enter Complaint Reference Code'}
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={inputRefId}
              onChange={(e) => setInputRefId(e.target.value)}
              placeholder={language === 'hi' ? 'जैसे DEMO-0001 दर्ज करें...' : 'e.g. Enter DEMO-0001...'}
              className="flex-1 p-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono font-bold text-slate-900 focus:bg-white focus:border-blue-900 outline-none uppercase"
            />

            <button
              type="submit"
              className="px-8 py-3.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span>{t('tracking.trackBtn')}</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-500 pt-1 font-sans">
            <span>💡 {language === 'hi' ? 'नमूना कोड आज़माएं: DEMO-0001' : 'Try sample demo code: DEMO-0001'}</span>
          </div>
        </form>

        {/* SEARCH RESULTS DEMO TIMELINE */}
        {searched && isDemoCode && (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-8 animate-in fade-in duration-200">
            
            {/* DEMO HEADER */}
            <div className="p-6 bg-slate-900 text-white rounded-xl space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase block">
                    {language === 'hi' ? 'नमूना संदर्भ कोड' : 'SAMPLE DEMO CODE'}
                  </span>
                  <div className="text-2xl font-black font-mono tracking-wider">
                    DEMO-0001
                  </div>
                </div>

                <div className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-xs font-bold uppercase">
                  {language === 'hi' ? 'केवल प्रदर्शन डेटा' : 'DEMONSTRATION ONLY'}
                </div>
              </div>

              <div className="text-xs text-slate-300 font-sans">
                {language === 'hi'
                  ? 'यह समयसीमा केवल यह दर्शाती है कि भविष्य की बैकएंड प्रणाली में शिकायतों की स्थिति कैसे दिखाई देगी।'
                  : 'This timeline illustrates how complaint tracking progress will be rendered in a future backend system.'}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-blue-950 uppercase border-b border-slate-200 pb-3">
                {language === 'hi' ? 'नमूना प्रगति समयसीमा (Sample Progress Timeline)' : 'Sample Progress Timeline'}
              </h3>

              <div className="space-y-6 relative border-l-2 border-slate-200 pl-6 ml-3">
                {sampleSteps.map((step) => (
                  <div key={step.step} className="relative space-y-1">
                    <div
                      className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        step.completed
                          ? 'bg-emerald-600 border-emerald-600 text-white'
                          : step.active
                          ? 'bg-amber-500 border-amber-500 animate-ping'
                          : 'bg-slate-200 border-slate-300'
                      }`}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-blue-900">
                          STEP {step.step} /
                        </span>
                        <h4 className={`text-sm font-bold ${step.completed ? 'text-slate-900' : 'text-amber-700'}`}>
                          {step.title}
                        </h4>
                      </div>

                      <span className="text-xs font-mono text-slate-500">{step.date}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans pt-0.5">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* NOT FOUND / NON-DEMO CODE */}
        {searched && !isDemoCode && (
          <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-4 shadow-sm">
            <AlertCircle className="w-12 h-12 text-amber-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'hi' ? 'लाइव शिकायत डेटा उपलब्ध नहीं है' : 'Live Complaint Data Not Available'}
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
              {language === 'hi'
                ? 'यह एक स्टैटिक वेबसाइट है और कोई बैकएंड डेटाबेस मौजूद नहीं है। नमूना ट्रैकिंग देखने के लिए संदर्भ नंबर "DEMO-0001" दर्ज करें।'
                : 'This is a static website and no backend database exists. To view the sample tracking layout, please enter reference code "DEMO-0001".'}
            </p>
          </div>
        )}

      </section>
    </div>
  );
};
