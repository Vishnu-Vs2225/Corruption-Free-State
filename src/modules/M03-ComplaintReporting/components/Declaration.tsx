import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import type { ComplaintDraft } from '../../../types/complaint';
import type { ValidationErrors } from '../../../utils/complaintValidation';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

interface Props {
  draft: ComplaintDraft;
  onChange: (updated: Partial<ComplaintDraft>) => void;
  errors: ValidationErrors;
}

export const Declaration: React.FC<Props> = ({ draft, onChange, errors }) => {
  const { language } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 pb-3 border-b border-slate-200 text-blue-950 font-bold uppercase text-sm">
        <ShieldCheck className="w-5 h-5 text-amber-600" />
        <span>{language === 'hi' ? 'वैधानिक घोषणा एवं स्वीकारोक्ति' : 'Statutory Declaration & Compliance'}</span>
      </div>

      <p className="text-xs text-slate-600 font-sans leading-relaxed">
        {language === 'hi'
          ? 'समीक्षा पृष्ठ पर आगे बढ़ने से पहले आपको निम्नलिखित घोषणाओं को ध्यानपूर्वक पढ़कर स्वीकार करना होगा:'
          : 'Before reviewing your draft, please read and confirm the following statutory compliance statements:'}
      </p>

      <div className="space-y-4">
        {/* Checkbox 1 */}
        <label className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 cursor-pointer hover:border-slate-300 transition-colors">
          <input
            type="checkbox"
            checked={draft.declarationAccurate}
            onChange={(e) => onChange({ declarationAccurate: e.target.checked })}
            className="w-4 h-4 mt-0.5 accent-blue-950 cursor-pointer flex-shrink-0"
          />
          <div className="space-y-0.5 text-xs text-slate-800 font-sans">
            <span className="font-bold text-slate-900 block">
              {language === 'hi'
                ? '1. जानकारी की सत्यता एवं प्रामाणिकता की पुष्टि'
                : '1. Confirmation of Accuracy'}
            </span>
            <p className="text-slate-600 leading-relaxed">
              {language === 'hi'
                ? 'मैं पुष्टि करता/करती हूँ कि इस शिकायत में प्रदान की गई सभी जानकारी मेरी सर्वोत्तम जानकारी के अनुसार सत्य और सटीक है।'
                : 'I confirm that the information provided in this report is true and accurate to the best of my knowledge.'}
            </p>
          </div>
        </label>
        {errors.declarationAccurate && (
          <p className="text-[11px] font-bold text-red-600 pl-2">{errors.declarationAccurate}</p>
        )}

        {/* Checkbox 2 */}
        <label className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 cursor-pointer hover:border-slate-300 transition-colors">
          <input
            type="checkbox"
            checked={draft.declarationLegalWarning}
            onChange={(e) => onChange({ declarationLegalWarning: e.target.checked })}
            className="w-4 h-4 mt-0.5 accent-blue-950 cursor-pointer flex-shrink-0"
          />
          <div className="space-y-0.5 text-xs text-slate-800 font-sans">
            <span className="font-bold text-slate-900 block flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {language === 'hi'
                  ? '2. झूठी शिकायत के वैधानिक परिणाम की स्वीकारोक्ति'
                  : '2. Legal Warning Acknowledgment'}
              </span>
            </span>
            <p className="text-slate-600 leading-relaxed">
              {language === 'hi'
                ? 'मैं समझता/समझती हूँ कि जानबूझकर गलत या भ्रामक जानकारी प्रस्तुत करना कानूनी रूप से दंडनीय अपराध है।'
                : 'I understand that knowingly providing false or malicious information carries legal consequences.'}
            </p>
          </div>
        </label>
        {errors.declarationLegalWarning && (
          <p className="text-[11px] font-bold text-red-600 pl-2">{errors.declarationLegalWarning}</p>
        )}

        {/* Checkbox 3 */}
        <label className="p-4 bg-amber-50/80 border border-amber-300 rounded-xl flex items-start gap-3 cursor-pointer hover:border-amber-400 transition-colors">
          <input
            type="checkbox"
            checked={draft.declarationStaticDemo}
            onChange={(e) => onChange({ declarationStaticDemo: e.target.checked })}
            className="w-4 h-4 mt-0.5 accent-amber-700 cursor-pointer flex-shrink-0"
          />
          <div className="space-y-0.5 text-xs text-slate-800 font-sans">
            <span className="font-bold text-amber-950 block">
              {language === 'hi'
                ? '3. स्टैटिक डेमो पोर्टल स्वीकारोक्ति (Static Demo Acknowledgment)'
                : '3. Static Demonstration Acknowledgment'}
            </span>
            <p className="text-slate-700 leading-relaxed">
              {language === 'hi'
                ? 'मैं स्वीकार करता/करती हूँ कि यह वेबसाइट एक केवल-सूचनात्मक स्टैटिक डेमो है और यह रिपोर्ट किसी सरकारी प्राधिकरण को जमा नहीं की जाती है।'
                : 'I understand that this website is a static demonstration interface and does not submit this report to any authority.'}
            </p>
          </div>
        </label>
        {errors.declarationStaticDemo && (
          <p className="text-[11px] font-bold text-red-600 pl-2">{errors.declarationStaticDemo}</p>
        )}
      </div>
    </div>
  );
};
