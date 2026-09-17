import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { HelpCircle, ShieldAlert, FileText, Send } from 'lucide-react';

export const TrackingHelp: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* PRIVACY WARNING CARD */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-rose-400">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {language === 'hi' ? 'गोपनीयता एवं सुरक्षा सूचना' : 'Privacy & Security Notice'}
          </h4>
        </div>

        <p className="text-xs text-slate-300 font-sans leading-relaxed">
          {language === 'hi'
            ? 'संदर्भ-संख्या फ़ील्ड में कभी भी व्यक्तिगत या गोपनीय जानकारी (जैसे पासवर्ड, आधार संख्या, बैंक विवरण या पूरा नाम) दर्ज न करें।'
            : 'Do not enter personal or confidential information into the reference-number field.'}
        </p>

        <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-1 text-[11px] text-slate-400">
          <span className="font-semibold text-amber-400 block uppercase">
            {language === 'hi' ? 'ट्रैकिंग के लिए कभी नहीं मांगा जाता:' : 'Never Requested For Tracking:'}
          </span>
          <p className="leading-relaxed">
            {language === 'hi'
              ? 'पासवर्ड • आधार / बैंक विवरण • व्यक्तिगत साक्ष्य दस्तावेज़ • क्रेडिट कार्ड'
              : 'Passwords • Aadhaar / Bank details • Personal evidence files • Credit card info'}
          </p>
        </div>
      </div>

      {/* HELP & REFERENCE GUIDANCE CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-blue-950">
          <HelpCircle className="w-5 h-5 flex-shrink-0 text-amber-500" />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {language === 'hi' ? 'क्या आपको संदर्भ संख्या नहीं मिल रही?' : 'Can\'t Find Your Reference Number?'}
          </h4>
        </div>

        <p className="text-xs text-slate-600 font-sans leading-relaxed">
          {language === 'hi'
            ? 'सामान्यतः शिकायत के सफलतापूर्वक दर्ज होने के बाद संदर्भ संख्या प्रदान की जाती है। चूंकि यह वर्तमान में स्टैटिक संस्करण है, इसलिए यहाँ वास्तविक संदर्भ संख्या उत्पन्न नहीं की जा सकती।'
            : 'Your reference number would normally be provided after a successful complaint submission. Since complaint submission is not connected in this version, a real reference number cannot be generated here.'}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            to="/citizen-rights"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
          >
            <FileText className="w-4 h-4 text-blue-900" />
            <span>{language === 'hi' ? 'नागरिक अधिकार' : 'Citizen Rights'}</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold rounded-xl transition-colors"
          >
            <Send className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'hi' ? 'संपर्क करें' : 'Contact Support'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
