import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { BookOpen, CheckCircle2, XCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export const ReportGuidelinesPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12 pb-16">
      <Breadcrumb items={[{ label: t('nav.report'), path: '/report-corruption' }, { label: language === 'hi' ? 'दिशानिर्देश' : 'Guidelines' }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'रिपोर्टिंग दिशानिर्देश' : 'Citizen Reporting Guidelines'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'जिम्मेदार शिकायत रिपोर्टिंग गाइड' : 'Responsible Reporting Guidelines'}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'सटीक, तथ्यात्मक और प्रामाणिक शिकायत दर्ज करने हेतु दिशानिर्देश। जानें कि क्या शामिल करना चाहिए और किन बातों से बचना चाहिए।'
              : 'Guidelines for submitting clear, factual, and verifiable reports. Understand what to include and what pitfalls to avoid.'}
          </p>
        </div>
      </section>

      {/* DETAILED CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* BEFORE YOU REPORT */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <ShieldCheck className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl font-bold text-blue-950 uppercase tracking-tight">
              {language === 'hi' ? 'शिकायत दर्ज करने से पूर्व (Before Reporting)' : 'Before Submitting a Report'}
            </h2>
          </div>

          <ul className="space-y-3 text-xs text-slate-700 font-sans leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                {language === 'hi'
                  ? 'घटना से संबंधित केवल सत्य और तथ्यात्मक जानकारी ही एकत्र करें।'
                  : 'Gather true and objective information regarding the incident.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                {language === 'hi'
                  ? 'घटना की तारीख, समय और स्थान का रिकॉर्ड रखें।'
                  : 'Maintain a record of the date, approximate time, and location of occurrence.'}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span>
                {language === 'hi'
                  ? 'मूल साक्ष्य (जैसे रसीदें या पत्र) को सुरक्षित स्थान पर रखें और केवल प्रतियाँ या स्कैन फाइलें ही संलग्न करें।'
                  : 'Keep original evidence files safely in your custody; attach digital copies or scans only.'}
              </span>
            </li>
          </ul>
        </div>

        {/* WHAT TO INCLUDE VS WHAT TO AVOID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* WHAT TO INCLUDE */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-900 font-bold uppercase tracking-wider text-sm border-b border-emerald-200 pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>{language === 'hi' ? 'शिकायत में क्या शामिल करें (What to Include)' : 'What to Include'}</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-800 font-sans leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">1.</span>
                <span><strong>WHAT:</strong> {language === 'hi' ? 'क्या हुआ (घटना या मांग का स्पष्ट विवरण)' : 'Factual sequence of what happened.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">2.</span>
                <span><strong>WHEN:</strong> {language === 'hi' ? 'कब हुआ (तारीख एवं अनुमानित समय)' : 'Date and approximate time.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">3.</span>
                <span><strong>WHERE:</strong> {language === 'hi' ? 'कहाँ हुआ (कार्यालय, प्रखंड, जिला)' : 'Exact department, office location, and district.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">4.</span>
                <span><strong>WHO:</strong> {language === 'hi' ? 'कौन शामिल था (अधिकारी/कर्मचारी का नाम व पद)' : 'Name and designation of persons involved, if known.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">5.</span>
                <span><strong>EVIDENCE:</strong> {language === 'hi' ? 'उपलब्ध लिखित या डिजिटल साक्ष्य' : 'Supporting documentation, photos, or recordings.'}</span>
              </li>
            </ul>
          </div>

          {/* WHAT TO AVOID */}
          <div className="bg-red-50/70 border border-red-200 rounded-2xl p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-red-900 font-bold uppercase tracking-wider text-sm border-b border-red-200 pb-3">
              <XCircle className="w-5 h-5 text-red-700" />
              <span>{language === 'hi' ? 'किन बातों से बचें (What to Avoid)' : 'What to Avoid'}</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-800 font-sans leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-red-700 font-bold">✕</span>
                <span>{language === 'hi' ? 'व्यक्तिगत दुश्मनी या द्वेषवश झूठी शिकायत दर्ज न करें।' : 'Do not lodge false reports out of personal grudge or malice.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-700 font-bold">✕</span>
                <span>{language === 'hi' ? 'छेड़छाड किए गए या फर्जी साक्ष्य प्रस्तुत न करें।' : 'Do not upload fabricated, altered, or forged evidence files.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-700 font-bold">✕</span>
                <span>{language === 'hi' ? 'अभद्र भाषा या धमकी भरे शब्दों का प्रयोग न करें।' : 'Avoid using abusive, threatening, or vulgar language.'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-700 font-bold">✕</span>
                <span>{language === 'hi' ? 'अनुमानों को अंतिम सत्य के रूप में न प्रस्तुत करें।' : 'Do not state mere rumors or guesses as proven facts.'}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* CTA TO FORM */}
        <div className="text-center pt-4">
          <Link
            to="/report-corruption/form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors"
          >
            <span>{language === 'hi' ? 'शिकायत फॉर्म पर जाएं' : 'Proceed to Report Form'}</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>

      </section>
    </div>
  );
};
