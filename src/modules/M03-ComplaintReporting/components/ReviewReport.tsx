import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import type { ComplaintDraft } from '../../../types/complaint';
import { INCIDENT_CATEGORIES } from '../../../data/incidentTypes';
import { User, MapPin, Paperclip, ArrowLeft, Send } from 'lucide-react';

interface Props {
  draft: ComplaintDraft;
  onEdit: () => void;
  onSubmitDemo: () => void;
}

export const ReviewReport: React.FC<Props> = ({ draft, onEdit, onSubmitDemo }) => {
  const { language } = useLanguage();

  const categoryObj = INCIDENT_CATEGORIES.find((c) => c.id === draft.incidentType);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'शिकायत विवरण समीक्षा (Review Your Report)' : 'Review Your Report'}
          </h2>
          <p className="text-xs text-slate-500 font-sans">
            {language === 'hi'
              ? 'कृपया अंतिम प्रदर्शन प्रस्तुति से पहले सभी दर्ज जानकारियों का पुनरावलोकन करें।'
              : 'Please review all entered details carefully before final demonstration submission.'}
          </p>
        </div>

        <span
          className={`px-3 py-1.5 rounded-full text-xs font-bold font-mono ${
            draft.reportingMode === 'anonymous'
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-blue-100 text-blue-950 border border-blue-300'
          }`}
        >
          {draft.reportingMode === 'anonymous' ? 'ANONYMOUS MODE' : 'IDENTIFIED MODE'}
        </span>
      </div>

      {/* REPORTING SUMMARY CARD */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-6 text-xs text-slate-800 font-sans">
        
        {/* Category & Department */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block">
              {language === 'hi' ? 'भ्रष्टाचार की श्रेणी' : 'Incident Category'}
            </span>
            <span className="text-sm font-bold text-blue-950">
              {categoryObj ? categoryObj.label[language] : draft.incidentType}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block">
              {language === 'hi' ? 'संबंधित विभाग / कार्यालय' : 'Target Department'}
            </span>
            <span className="text-sm font-bold text-slate-900">{draft.department}</span>
          </div>
        </div>

        {/* Location & Time */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{language === 'hi' ? 'स्थान' : 'Location'}</span>
            </span>
            <span className="font-bold text-slate-800">
              {draft.district} {draft.cityVillage ? `, ${draft.cityVillage}` : ''} ({draft.state})
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block">
              {language === 'hi' ? 'घटना की तिथि / समय' : 'Date & Time'}
            </span>
            <span className="font-bold text-slate-800">
              {draft.incidentDate || (language === 'hi' ? 'उल्लेख नहीं' : 'Not specified')}
              {draft.incidentTime ? ` (${draft.incidentTime})` : ''}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-500 uppercase block flex items-center gap-1">
              <User className="w-3 h-3 text-slate-400" />
              <span>{language === 'hi' ? 'संबंधित व्यक्ति/अधिकारी' : 'Person Involved'}</span>
            </span>
            <span className="font-bold text-slate-800">
              {draft.officialName || (language === 'hi' ? 'अज्ञात / उल्लेख नहीं' : 'Unspecified')}
              {draft.officialDesignation ? ` (${draft.officialDesignation})` : ''}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="pb-4 border-b border-slate-200 space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase block">
            {language === 'hi' ? 'घटना का विस्तृत विवरण' : 'Incident Description'}
          </span>
          <div className="p-4 bg-white border border-slate-200 rounded-xl leading-relaxed text-slate-800 whitespace-pre-wrap">
            {draft.description}
          </div>
        </div>

        {/* Evidence */}
        <div className="pb-4 border-b border-slate-200 space-y-1">
          <span className="text-[11px] font-bold text-slate-500 uppercase block flex items-center gap-1">
            <Paperclip className="w-3 h-3 text-slate-400" />
            <span>{language === 'hi' ? 'संलग्न साक्ष्य' : 'Attached Evidence'}</span>
          </span>
          {draft.evidence.length > 0 ? (
            <div className="flex flex-wrap gap-2 pt-1">
              {draft.evidence.map((f) => (
                <span
                  key={f.id}
                  className="px-3 py-1 bg-white border border-slate-200 rounded text-xs font-bold text-slate-700 font-mono"
                >
                  ✓ {f.name} ({(f.size / 1024).toFixed(0)} KB)
                </span>
              ))}
            </div>
          ) : (
            <span className="text-slate-400 italic">
              {language === 'hi' ? 'कोई फाइल संलग्न नहीं की गई' : 'No evidence files attached'}
            </span>
          )}
        </div>

        {/* Complainant Identity */}
        <div>
          <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
            {language === 'hi' ? 'शिकायतकर्ता विवरण' : 'Complainant Identity'}
          </span>
          {draft.reportingMode === 'anonymous' ? (
            <span className="text-amber-800 font-bold bg-amber-100 px-3 py-1 rounded inline-block">
              {language === 'hi' ? 'गोपनीय (गुमनाम)' : 'Confidential (Anonymous)'}
            </span>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div>
                <strong>{language === 'hi' ? 'नाम:' : 'Name:'}</strong> {draft.fullName}
              </div>
              <div>
                <strong>{language === 'hi' ? 'मोबाइल:' : 'Mobile:'}</strong> {draft.mobile}
              </div>
              <div>
                <strong>{language === 'hi' ? 'ईमेल:' : 'Email:'}</strong> {draft.email || 'N/A'}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex items-center gap-4 pt-2">
        <button
          type="button"
          onClick={onEdit}
          className="w-1/3 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{language === 'hi' ? 'संशोधन करें' : 'Edit Report'}</span>
        </button>

        <button
          type="button"
          onClick={onSubmitDemo}
          className="w-2/3 py-3.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4 text-amber-300" />
          <span>{language === 'hi' ? 'डेमो शिकायत जमा करें (Demo Submit)' : 'Submit Demo Report'}</span>
        </button>
      </div>
    </div>
  );
};
