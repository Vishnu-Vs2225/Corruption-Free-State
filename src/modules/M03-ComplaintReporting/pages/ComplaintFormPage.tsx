import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { initialComplaintDraft } from '../../../types/complaint';
import type { ComplaintDraft, ReportingMode, EvidenceFile } from '../../../types/complaint';
import { validateComplaintStep1, validateComplaintDeclaration } from '../../../utils/complaintValidation';
import type { ValidationErrors } from '../../../utils/complaintValidation';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { FormProgress } from '../components/FormProgress';
import { IncidentDetails } from '../components/IncidentDetails';
import { ContactDetails } from '../components/ContactDetails';
import { EvidenceUploader } from '../components/EvidenceUploader';
import { EvidenceList } from '../components/EvidenceList';
import { Declaration } from '../components/Declaration';
import { ReviewReport } from '../components/ReviewReport';
import { DemoSubmission } from '../components/DemoSubmission';
import { ReportingTypeSelector } from '../components/ReportingTypeSelector';
import { ArrowLeft, ArrowRight, ShieldAlert } from 'lucide-react';

export const ComplaintFormPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [step, setStep] = useState<number>(1); // 1: Details, 2: Evidence, 3: Declaration, 4: Review, 5: Submitted
  const [draft, setDraft] = useState<ComplaintDraft>(initialComplaintDraft);
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Initialize mode from URL query if available
  useEffect(() => {
    const modeParam = searchParams.get('mode') as ReportingMode;
    if (modeParam && (modeParam === 'identified' || modeParam === 'anonymous')) {
      setDraft((prev) => ({ ...prev, reportingMode: modeParam }));
    }
  }, [searchParams]);

  const updateDraft = (updated: Partial<ComplaintDraft>) => {
    setDraft((prev) => ({ ...prev, ...updated }));
    // Clear field-specific errors
    setErrors((prev) => {
      const copy = { ...prev };
      Object.keys(updated).forEach((key) => delete copy[key]);
      return copy;
    });
  };

  const handleNextFromDetails = () => {
    const errs = validateComplaintStep1(draft, language);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleNextFromEvidence = () => {
    setStep(3);
  };

  const handleNextFromDeclaration = () => {
    const errs = validateComplaintDeclaration(draft, language);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(4);
  };

  const handleAddEvidence = (file: EvidenceFile) => {
    setDraft((prev) => ({
      ...prev,
      evidence: [...prev.evidence, file],
    }));
  };

  const handleRemoveEvidence = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      evidence: prev.evidence.filter((e) => e.id !== id),
    }));
  };

  const handleReset = () => {
    setDraft(initialComplaintDraft);
    setStep(1);
    setErrors({});
    navigate('/report-corruption/form');
  };

  if (step === 5) {
    return (
      <div className="space-y-8 pb-16">
        <Breadcrumb items={[{ label: t('nav.report'), path: '/report-corruption' }, { label: language === 'hi' ? 'डेमो प्रस्तुति' : 'Demo Submission' }]} />
        <DemoSubmission onReset={handleReset} />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumb items={[{ label: t('nav.report'), path: '/report-corruption' }, { label: language === 'hi' ? 'शिकायत फॉर्म' : 'Complaint Form' }]} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* MODE SELECTOR IF NOT YET SELECTED */}
        {!draft.reportingMode ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <ReportingTypeSelector
              selectedMode={draft.reportingMode}
              onSelectMode={(mode) => updateDraft({ reportingMode: mode })}
            />
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* STEP PROGRESS BAR */}
            <FormProgress currentStep={step} />

            {/* DEMO NOTICE BANNER */}
            <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-xl flex items-center justify-between text-xs text-amber-900">
              <div className="flex items-center gap-2 font-bold">
                <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>
                  {language === 'hi'
                    ? `मोड: ${draft.reportingMode === 'anonymous' ? 'गोपनीय (गुमनाम)' : 'पहचान सहित'} • स्टैटिक डेमो इंटरफ़ेस`
                    : `Mode: ${draft.reportingMode === 'anonymous' ? 'Anonymous Mode' : 'Identified Mode'} • Static Demo`}
                </span>
              </div>

              <button
                type="button"
                onClick={() => updateDraft({ reportingMode: null })}
                className="text-[11px] font-bold text-amber-800 underline hover:text-amber-950"
              >
                {language === 'hi' ? 'मोड बदलें' : 'Change Mode'}
              </button>
            </div>

            {/* STEP 1: DETAILS & CONTACT */}
            {step === 1 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in duration-200">
                <IncidentDetails draft={draft} onChange={updateDraft} errors={errors} />
                <ContactDetails draft={draft} onChange={updateDraft} errors={errors} />

                <div className="flex justify-end pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={handleNextFromDetails}
                    className="px-8 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center gap-2"
                  >
                    <span>{language === 'hi' ? 'अगला: साक्ष्य संलग्न करें ➔' : 'Next: Attach Evidence ➔'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: EVIDENCE */}
            {step === 2 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in duration-200">
                <div className="space-y-1 pb-2 border-b border-slate-200">
                  <h2 className="text-xl font-bold text-blue-950 uppercase tracking-tight">
                    {language === 'hi' ? 'साक्ष्य फाइलें संलग्न करें (ऐच्छिक)' : 'Attach Supporting Evidence (Optional)'}
                  </h2>
                  <p className="text-xs text-slate-500 font-sans">
                    {language === 'hi'
                      ? 'यदि आपके पास रसीदें, तस्वीरें, अथवा ऑडियो/वीडियो साक्ष्य उपलब्ध हैं तो उन्हें यहाँ स्थानीय रूप से चुनें।'
                      : 'If you have relevant documents, photos, or recordings, attach them here for local preview.'}
                  </p>
                </div>

                <EvidenceUploader evidenceList={draft.evidence} onAddEvidence={handleAddEvidence} />
                <EvidenceList files={draft.evidence} onRemove={handleRemoveEvidence} />

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{language === 'hi' ? 'पीछे' : 'Back'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextFromEvidence}
                    className="px-8 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center gap-2"
                  >
                    <span>{language === 'hi' ? 'अगला: घोषणा ➔' : 'Next: Statutory Declaration ➔'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: DECLARATION */}
            {step === 3 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8 animate-in fade-in duration-200">
                <Declaration draft={draft} onChange={updateDraft} errors={errors} />

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{language === 'hi' ? 'पीछे' : 'Back'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextFromDeclaration}
                    className="px-8 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center gap-2"
                  >
                    <span>{language === 'hi' ? 'अगला: समीक्षा करें ➔' : 'Next: Review Draft ➔'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW */}
            {step === 4 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm animate-in fade-in duration-200">
                <ReviewReport
                  draft={draft}
                  onEdit={() => setStep(1)}
                  onSubmitDemo={() => setStep(5)}
                />
              </div>
            )}

          </div>
        )}

      </section>
    </div>
  );
};
