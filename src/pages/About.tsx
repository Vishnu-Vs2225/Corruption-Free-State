import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { organizationData } from '../data/organization';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ShieldCheck, Target, Award, Phone, Mail, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12">
      <Breadcrumb items={[{ label: t('nav.about') }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Reg. No: {organizationData.registrationNumber}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('nav.about')} — {t('hero.titleMain')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {t('org.subtitle')}. {t('hero.desc')}
          </p>
        </div>
      </section>

      {/* DETAILED ORGANIZATION INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Registration & Legal Status Box */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-950">
                  {language === 'hi' ? 'आधिकारिक पंजीकरण विवरण' : 'Official Registration Credentials'}
                </h3>
                <p className="text-xs text-slate-500">{t('org.regNotice')}</p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono space-y-1 text-slate-700">
              <div>REGISTRATION NUMBER: <span className="font-bold text-blue-950">{organizationData.registrationNumber}</span></div>
              <div>CLASSIFICATION: AUTONOMOUS CIVIC ACCOUNTABILITY INITIATIVE</div>
              <div>STATUS: ACTIVE & RECOGNIZED</div>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-600 leading-relaxed font-sans border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
            <p>
              {language === 'hi'
                ? 'भ्रष्टाचार मुक्त राज्य एक स्वायत्त, गैर-पक्षपाती और गैर-लाभकारी सार्वजनिक पहल है। हमारा मुख्य ध्येय सरकारी विभागों और प्रशासनिक निकायों में पारदर्शिता स्थापित करना है।'
                : 'Corruption Free State is an autonomous, non-partisan, public accountability initiative dedicated to embedding structural transparency across administrative machinery.'}
            </p>
            <p>
              {language === 'hi'
                ? 'हम तकनीकी समाधानों, आरटीआई सहायतार्थ सामग्री और जागरूकता सत्रों के माध्यम से आम नागरिकों को उनके अधिकारों के प्रति सशक्त बनाते हैं।'
                : 'We empower citizens through civic-tech digital tools, RTI filing resources, whistleblower legal support, and community awareness drives.'}
            </p>
          </div>
        </div>

        {/* OBJECTIVES GRID */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Target className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
              {t('org.objectivesTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-slate-200 rounded-xl space-y-3 shadow-sm">
              <div className="w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center font-bold text-xs">01</div>
              <h3 className="text-base font-bold text-slate-900">
                {language === 'hi' ? 'बजटीय एवं टेंडर पारदर्शिता' : 'Budgetary & Tender Transparency'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{t('org.obj1')}</p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xl space-y-3 shadow-sm">
              <div className="w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center font-bold text-xs">02</div>
              <h3 className="text-base font-bold text-slate-900">
                {language === 'hi' ? 'व्हिसलब्लोअर कानूनी संरक्षण' : 'Whistleblower Legal Rights'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{t('org.obj2')}</p>
            </div>

            <div className="bg-white p-6 border border-slate-200 rounded-xl space-y-3 shadow-sm">
              <div className="w-8 h-8 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center font-bold text-xs">03</div>
              <h3 className="text-base font-bold text-slate-900">
                {language === 'hi' ? 'नागरिक अधिकार अनुपालन' : 'Citizen Charter Enforcement'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{t('org.obj3')}</p>
            </div>
          </div>
        </div>

        {/* OFFICIAL CONTACT CARDS */}
        <div className="bg-blue-950 text-white rounded-2xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-amber-400">
            {language === 'hi' ? 'आधिकारिक संपर्क जानकारी' : 'Official Secretariat Contact Details'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-4 bg-blue-900/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{t('topBar.helpline')}</span>
              </div>
              <p className="text-slate-300 font-mono">
                {organizationData.phones[0]} / {organizationData.phones[1]}
              </p>
            </div>

            <div className="p-4 bg-blue-900/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{t('topBar.email')}</span>
              </div>
              <p className="text-slate-300 font-mono">{organizationData.email}</p>
            </div>

            <div className="p-4 bg-blue-900/50 rounded-lg space-y-2">
              <div className="flex items-center gap-2 font-bold text-white">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{t('contact.officeTitle')}</span>
              </div>
              <p className="text-slate-300 font-sans">{organizationData.officeAddressBilingual[language]}</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};
