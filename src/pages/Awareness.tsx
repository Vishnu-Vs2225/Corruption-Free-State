import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { BookOpen, GraduationCap, Award } from 'lucide-react';

export const Awareness: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12">
      <Breadcrumb items={[{ label: t('nav.awareness') }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>{t('nav.awareness')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('nav.awareness')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'जन-जागरूकता, भ्रष्टाचार विरोधी शिक्षा और कानून साक्षरता ही भ्रष्टाचार की रोकथाम का सर्वोत्तम मार्ग है।'
              : 'Public awareness, anti-corruption literacy, and legal education are the primary pillars of corruption prevention.'}
          </p>
        </div>
      </section>

      {/* AWARENESS RESOURCES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        
        {/* SUCCESS STORIES SECTION */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
              {language === 'hi' ? 'सफलता की गाथाएं (Success Stories)' : 'Verified Success Stories'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="text-xs font-mono text-emerald-700 font-bold uppercase">CASE OUTCOME / 2026</div>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'hi' ? 'ग्राम पंचायत सड़क निर्माण में ₹18 लाख की अवैध कटौती उजागर' : '₹18 Lakh Illegal Deduction Exposed in Village Road Project'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {language === 'hi'
                  ? 'स्थानीय नागरिकों द्वारा RTI से प्राप्त मस्टर रोल के मिलान से फर्जी नाम उजागर हुए। संबंधित अधिकारी से राशि की वसूली की गई।'
                  : 'Citizens cross-verified muster rolls obtained via RTI, unearthing ghost entries. Department recovered funds and suspended defaulting officials.'}
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="text-xs font-mono text-emerald-700 font-bold uppercase">CASE OUTCOME / 2026</div>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'hi' ? 'स्वास्थ्य केंद्र में मुफ्त दवाओं के वितरण में पारदर्शिता बहाली' : 'Free Medicine Distribution Transparency Restored at District Clinic'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {language === 'hi'
                  ? 'स्टॉक रजिस्टर को ऑनलाइन सार्वजनिक प्रदर्शित करने से दवाओं की कालाबाजारी बंद हुई और मरीजों को समय पर दवा मिली।'
                  : 'Mandatory online publishing of medicine stock led to 100% genuine distribution to visiting patients without illegal fees.'}
              </p>
            </div>

          </div>
        </div>

        {/* EDUCATIONAL GUIDES */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
              {language === 'hi' ? 'कानूनी साक्षरता एवं शिक्षण संसाधन' : 'Legal Literacy Resources'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 bg-slate-900 text-white rounded-xl space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">GUIDE 01</span>
              <h3 className="text-base font-bold text-white">
                {language === 'hi' ? 'RTI आवेदन लेखन कला' : 'Effective RTI Drafting'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {language === 'hi' ? 'सटीक और बिंदुवार प्रश्न पूछने के तरीके।' : 'Methods for drafting concise, point-to-point information requests.'}
              </p>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-xl space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">GUIDE 02</span>
              <h3 className="text-base font-bold text-white">
                {language === 'hi' ? 'साक्ष्य संकलन सुरक्षा' : 'Evidence Safety Protocols'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {language === 'hi' ? 'दस्तावेजों और डिजिटल प्रतियों का सुरक्षित संरक्षण।' : 'Securing digital copies and preserving authentic documentary proof.'}
              </p>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-xl space-y-3">
              <span className="text-xs font-mono text-amber-400 font-bold">GUIDE 03</span>
              <h3 className="text-base font-bold text-white">
                {language === 'hi' ? 'नागरिक सेवा गांरटी' : 'Service Delivery Act'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {language === 'hi' ? 'समय सीमा के भीतर सरकारी सेवाओं का दावा।' : 'Claiming guaranteed services within statutory timeframes.'}
              </p>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
};
