import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import type { ComplaintDraft } from '../../../types/complaint';
import { INCIDENT_CATEGORIES } from '../../../data/incidentTypes';
import type { ValidationErrors } from '../../../utils/complaintValidation';
import { AlertCircle, User, Calendar, Clock, MapPin, Building } from 'lucide-react';

interface Props {
  draft: ComplaintDraft;
  onChange: (updated: Partial<ComplaintDraft>) => void;
  errors: ValidationErrors;
}

export const IncidentDetails: React.FC<Props> = ({ draft, onChange, errors }) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      
      {/* INCIDENT CATEGORY */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-800 uppercase block tracking-wider">
          {language === 'hi' ? 'भ्रष्टाचार / अनियमितता का प्रकार *' : 'Incident Category *'}
        </label>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INCIDENT_CATEGORIES.map((cat) => {
            const isSelected = draft.incidentType === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onChange({ incidentType: cat.id })}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-blue-50 border-blue-900 text-blue-950 ring-1 ring-blue-900'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-400 text-slate-800'
                }`}
              >
                <div className="text-xs font-bold">{cat.label[language]}</div>
                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-sans">
                  {cat.description[language]}
                </div>
              </div>
            );
          })}
        </div>
        {errors.incidentType && (
          <p className="text-[11px] font-bold text-red-600 flex items-center gap-1 mt-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.incidentType}</span>
          </p>
        )}
      </div>

      {/* LOCATION & DEPARTMENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        
        {/* District */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-blue-900" />
            <span>{language === 'hi' ? 'जिला *' : 'District *'}</span>
          </label>
          <input
            type="text"
            value={draft.district}
            onChange={(e) => onChange({ district: e.target.value })}
            placeholder={language === 'hi' ? 'जैसे रांची, गढ़वा...' : 'e.g. Ranchi, Garhwa...'}
            className={`w-full p-3 bg-slate-50 border ${
              errors.district ? 'border-red-500' : 'border-slate-300'
            } rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none`}
          />
          {errors.district && <span className="text-[11px] font-bold text-red-600">{errors.district}</span>}
        </div>

        {/* City/Village */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase block">
            {language === 'hi' ? 'शहर / प्रखंड / गाँव' : 'City / Block / Village'}
          </label>
          <input
            type="text"
            value={draft.cityVillage}
            onChange={(e) => onChange({ cityVillage: e.target.value })}
            placeholder={language === 'hi' ? 'जैसे सिमलिया, रातू...' : 'e.g. Simliya, Ratu...'}
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none"
          />
        </div>

        {/* Department / Office */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1">
            <Building className="w-3.5 h-3.5 text-blue-900" />
            <span>{language === 'hi' ? 'संबंधित विभाग / कार्यालय *' : 'Department / Office *'}</span>
          </label>
          <input
            type="text"
            value={draft.department}
            onChange={(e) => onChange({ department: e.target.value })}
            placeholder={language === 'hi' ? 'जैसे PWD, स्वास्थ्य विभाग, आपूर्ति कार्यालय...' : 'e.g. PWD, Health Dept, Ration Office...'}
            className={`w-full p-3 bg-slate-50 border ${
              errors.department ? 'border-red-500' : 'border-slate-300'
            } rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none`}
          />
          {errors.department && <span className="text-[11px] font-bold text-red-600">{errors.department}</span>}
        </div>

      </div>

      {/* DATE & TIME (OPTIONAL) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{language === 'hi' ? 'घटना की तिथि (यदि ज्ञात हो)' : 'Date of Incident (If known)'}</span>
          </label>
          <input
            type="date"
            value={draft.incidentDate}
            onChange={(e) => onChange({ incidentDate: e.target.value })}
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>{language === 'hi' ? 'अनुमानित समय' : 'Approximate Time'}</span>
          </label>
          <input
            type="text"
            value={draft.incidentTime}
            onChange={(e) => onChange({ incidentTime: e.target.value })}
            placeholder={language === 'hi' ? 'जैसे दोपहर 2:00 बजे' : 'e.g. Around 2:00 PM'}
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none"
          />
        </div>
      </div>

      {/* PERSON / OFFICIAL INVOLVED (OPTIONAL, NEUTRAL WORDING) */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase">
          <User className="w-4 h-4 text-blue-950" />
          <span>{language === 'hi' ? 'संबंधित व्यक्ति / अधिकारी की जानकारी (यदि ज्ञात हो)' : 'Person / Official Involved (If known)'}</span>
        </div>
        <p className="text-[11px] text-slate-500 font-sans">
          {language === 'hi'
            ? 'केवल शिकायतकर्ता के विवरण के आधार पर जानकारी दर्ज करें। निष्कर्ष प्रस्तुत न करें।'
            : 'Enter information based strictly on your account. Avoid presenting allegations as verified facts.'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <input
            type="text"
            value={draft.officialName}
            onChange={(e) => onChange({ officialName: e.target.value })}
            placeholder={language === 'hi' ? 'अधिकारी / कर्मचारी का नाम' : 'Name of person/official'}
            className="p-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 outline-none"
          />
          <input
            type="text"
            value={draft.officialDesignation}
            onChange={(e) => onChange({ officialDesignation: e.target.value })}
            placeholder={language === 'hi' ? 'पदनाम (Designation)' : 'Designation / Post'}
            className="p-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 outline-none"
          />
        </div>
      </div>

      {/* INCIDENT DESCRIPTION */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-700 uppercase block">
            {language === 'hi' ? 'घटना का विस्तृत विवरण *' : 'Detailed Incident Description *'}
          </label>
          <span
            className={`text-[11px] font-mono font-bold ${
              draft.description.length < 50
                ? 'text-amber-600'
                : draft.description.length > 5000
                ? 'text-red-600'
                : 'text-emerald-700'
            }`}
          >
            {draft.description.length} / 5000 {language === 'hi' ? 'अक्षर' : 'chars'}
          </span>
        </div>

        <textarea
          rows={6}
          value={draft.description}
          onChange={(e) => onChange({ description: e.target.value })}
          placeholder={
            language === 'hi'
              ? 'घटना का तथ्यात्मक ब्योरा लिखें: क्या हुआ, कब हुआ, कहाँ हुआ, किसने क्या मांग की अथवा कौन सी अनिमितता हुई... (न्यूनतम 50 अक्षर)'
              : 'Provide factual step-by-step description: what happened, where, when, who was involved, and what took place... (min 50 chars)'
          }
          className={`w-full p-3.5 bg-slate-50 border ${
            errors.description ? 'border-red-500' : 'border-slate-300'
          } rounded-xl text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none resize-none font-sans leading-relaxed`}
        />
        {errors.description && <span className="text-[11px] font-bold text-red-600">{errors.description}</span>}
      </div>

    </div>
  );
};
