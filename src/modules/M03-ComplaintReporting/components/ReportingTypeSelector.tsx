import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import type { ReportingMode } from '../../../types/complaint';
import { UserCheck, Lock, ArrowRight } from 'lucide-react';

interface Props {
  selectedMode: ReportingMode | null;
  onSelectMode: (mode: ReportingMode) => void;
}

export const ReportingTypeSelector: React.FC<Props> = ({ selectedMode, onSelectMode }) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
          {language === 'hi' ? 'रिपोर्टिंग प्रकार का चयन करें' : 'Select Reporting Mode'}
        </h2>
        <p className="text-xs text-slate-600 max-w-xl mx-auto font-sans">
          {language === 'hi'
            ? 'अपनी पहचान उजागर करके अथवा पूर्ण रूप से गोपनीय (गुमनाम) रहकर शिकायत दर्ज करें।'
            : 'Choose whether to submit your report with your contact details or anonymously.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* IDENTIFIED REPORT */}
        <div
          onClick={() => onSelectMode('identified')}
          className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between space-y-4 ${
            selectedMode === 'identified'
              ? 'bg-blue-50/80 border-blue-900 shadow-md ring-2 ring-blue-900/20'
              : 'bg-white border-slate-200 hover:border-blue-700 shadow-sm'
          }`}
        >
          <div className="space-y-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'hi' ? 'पहचान सहित रिपोर्ट (Identified Report)' : 'Identified Report'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans mt-1">
                {language === 'hi'
                  ? 'अपना नाम और संपर्क विवरण प्रदान करें ताकि आवश्यकता पड़ने पर स्पष्टीकरण मांगा जा सके।'
                  : 'Provide your name and contact details so officials can reach out if clarification is needed.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-900">
            <span>{language === 'hi' ? 'पहचान सहित जारी रखें' : 'Continue as Identified'}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* ANONYMOUS REPORT */}
        <div
          onClick={() => onSelectMode('anonymous')}
          className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between space-y-4 ${
            selectedMode === 'anonymous'
              ? 'bg-amber-50/80 border-amber-600 shadow-md ring-2 ring-amber-600/20'
              : 'bg-white border-slate-200 hover:border-amber-600 shadow-sm'
          }`}
        >
          <div className="space-y-3">
            <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center font-bold">
              <Lock className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'hi' ? 'गोपनीय / गुमनाम रिपोर्ट (Anonymous Report)' : 'Anonymous Report'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans mt-1">
                {language === 'hi'
                  ? 'बिना नाम या व्यक्तिगत विवरण दिए शिकायत दर्ज करें। आपका संपर्क विवरण नहीं मांगा जाएगा।'
                  : 'Submit without providing your personal details. No contact information will be required.'}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-amber-800">
            <span>{language === 'hi' ? 'गुमनाम मोड में जारी रखें' : 'Continue Anonymously'}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
