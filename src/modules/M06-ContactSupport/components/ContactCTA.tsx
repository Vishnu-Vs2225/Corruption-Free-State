import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Send, Search } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
      {/* REPORT CORRUPTION CTA */}
      <div className="bg-blue-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 border-b-4 border-amber-500 shadow-md">
        <div className="flex items-center gap-2 text-amber-400">
          <Send className="w-5 h-5" />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {language === 'hi' ? 'भ्रष्टाचार की शिकायत करें' : 'Report Corruption'}
          </h4>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {language === 'hi'
            ? 'प्रशासनिक अनियमितताओं, रिश्वतखोरी या पद के दुरुपयोग की गोपनीय शिकायत दर्ज कराएं।'
            : 'Lodge a confidential or evidence-backed complaint regarding administrative malpractices or bribery.'}
        </p>

        <div className="pt-2">
          <Link
            to="/report-corruption"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow"
          >
            <span>{language === 'hi' ? 'शिकायत दर्ज करें ➔' : 'Report Corruption ➔'}</span>
          </Link>
        </div>
      </div>

      {/* TRACK COMPLAINT CTA */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 border-b-4 border-blue-500 shadow-md">
        <div className="flex items-center gap-2 text-blue-400">
          <Search className="w-5 h-5" />
          <h4 className="text-sm font-bold uppercase tracking-wider">
            {language === 'hi' ? 'शिकायत ट्रैक करें' : 'Track Complaint Status'}
          </h4>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed font-sans">
          {language === 'hi'
            ? 'अपनी दर्ज शिकायत की अद्यतन प्रगति देखने के लिए संदर्भ कोड दर्ज करें।'
            : 'Already submitted a complaint? Check real-time progress timelines using your Reference Code.'}
        </p>

        <div className="pt-2">
          <Link
            to="/track-complaint"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow border border-blue-700"
          >
            <span>{language === 'hi' ? 'स्थिति देखें ➔' : 'Track Complaint ➔'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
