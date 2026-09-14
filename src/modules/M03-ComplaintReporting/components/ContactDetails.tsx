import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import type { ComplaintDraft } from '../../../types/complaint';
import type { ValidationErrors } from '../../../utils/complaintValidation';
import { UserCheck, Lock, Phone, Mail, ShieldCheck } from 'lucide-react';

interface Props {
  draft: ComplaintDraft;
  onChange: (updated: Partial<ComplaintDraft>) => void;
  errors: ValidationErrors;
}

export const ContactDetails: React.FC<Props> = ({ draft, onChange, errors }) => {
  const { language } = useLanguage();

  if (draft.reportingMode === 'anonymous') {
    return (
      <div className="p-6 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3 text-amber-950">
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-900">
          <Lock className="w-4 h-4 text-amber-700" />
          <span>{language === 'hi' ? 'गोपनीय (गुमनाम) मोड सक्रिय है' : 'Anonymous Mode Active'}</span>
        </div>
        <p className="text-xs text-slate-700 font-sans leading-relaxed">
          {language === 'hi'
            ? 'आपने गुमनाम शिकायत का चयन किया है। आपका नाम, ईमेल या फोन नंबर एकत्र नहीं किया जा रहा है। यदि आप गोपनीयता बनाए रखना चाहते हैं तो विवरण में कोई ऐसा व्यक्तिगत तथ्य न लिखें जिससे आपकी पहचान उजागर हो सके।'
            : 'You have selected anonymous reporting. No contact details will be requested or stored. Avoid entering directly identifying personal info in the description field to remain anonymous.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pt-2 border-t border-slate-200">
      <div className="flex items-center gap-2 text-xs font-bold text-blue-950 uppercase tracking-wider">
        <UserCheck className="w-4 h-4 text-blue-900" />
        <span>{language === 'hi' ? 'शिकायतकर्ता का संपर्क विवरण (Identified Mode)' : 'Complainant Contact Details'}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase block">
            {language === 'hi' ? 'नागरिक का पूरा नाम *' : 'Full Name *'}
          </label>
          <input
            type="text"
            value={draft.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            placeholder={language === 'hi' ? 'अपना पूरा नाम दर्ज करें' : 'Enter your full name'}
            className={`w-full p-3 bg-slate-50 border ${
              errors.fullName ? 'border-red-500' : 'border-slate-300'
            } rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none`}
          />
          {errors.fullName && <span className="text-[11px] font-bold text-red-600">{errors.fullName}</span>}
        </div>

        {/* Mobile Number */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-blue-900" />
            <span>{language === 'hi' ? 'मोबाइल नंबर (+91) *' : 'Mobile Number (+91) *'}</span>
          </label>
          <input
            type="tel"
            value={draft.mobile}
            onChange={(e) => onChange({ mobile: e.target.value })}
            placeholder="9973076434"
            className={`w-full p-3 bg-slate-50 border ${
              errors.mobile ? 'border-red-500' : 'border-slate-300'
            } rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none font-mono`}
          />
          {errors.mobile && <span className="text-[11px] font-bold text-red-600">{errors.mobile}</span>}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-blue-900" />
            <span>{language === 'hi' ? 'ईमेल पता (ऐच्छिक)' : 'Email Address (Optional)'}</span>
          </label>
          <input
            type="email"
            value={draft.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="example@domain.com"
            className={`w-full p-3 bg-slate-50 border ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            } rounded-lg text-xs text-slate-900 focus:bg-white focus:border-blue-900 outline-none`}
          />
          {errors.email && <span className="text-[11px] font-bold text-red-600">{errors.email}</span>}
        </div>
      </div>

      <div className="text-[11px] text-slate-500 font-sans flex items-center gap-1.5 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>
          {language === 'hi'
            ? 'आपकी जानकारी केवल स्पष्टीकरण प्रयोजनों हेतु सुरक्षित रखी जाएगी।'
            : 'Your details will strictly be held confidential for administrative contact only.'}
        </span>
      </div>
    </div>
  );
};
