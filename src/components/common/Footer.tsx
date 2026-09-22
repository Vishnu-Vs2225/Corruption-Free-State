import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { organizationData } from '../../data/organization';
import { ShieldCheck, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* TOP FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* COL 1: ORGANIZATION BRAND & VISION (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img src="/logo.png" alt="Official Logo" className="w-14 h-14 rounded-full object-contain bg-white p-0.5 shadow-md flex-shrink-0" />
              <div>
                <h3 className="text-xl font-black text-white tracking-tight leading-tight">
                  {language === 'hi' ? 'भ्रष्टाचार मुक्त राज्य' : 'Corruption Free State'}
                </h3>
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase block">
                  {t('footer.regInfo')}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {t('org.subtitle')}. {t('footer.tagline')}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-amber-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'पंजीकरण संख्या: 1597/210/2026' : 'Registration No: 1597/210/2026'}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-slate-300 font-semibold">
                <span>{language === 'hi' ? `संस्थापक: ${organizationData.founderHindi}` : `Founder: ${organizationData.founder}`}</span>
              </div>
            </div>
          </div>

          {/* COL 2: QUICK LINKS (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">➔ {t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">➔ {t('nav.about')}</Link></li>
              <li><Link to="/citizen-rights" className="hover:text-amber-400 transition-colors">➔ {t('nav.citizenRights')}</Link></li>
              <li><Link to="/faq" className="hover:text-amber-400 transition-colors">➔ {t('nav.faq')}</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">➔ {t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* COL 3: CONTACT & HELPLINE (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              {t('contact.helplineTitle')} & {t('nav.contact')}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase">{t('topBar.helpline')}:</span>
                  <a href={`tel:${organizationData.phones[0]}`} className="font-bold text-white hover:text-amber-400 mr-2">
                    {organizationData.phones[0]}
                  </a>
                  <span>/</span>
                  <a href={`tel:${organizationData.phones[1]}`} className="font-bold text-white hover:text-amber-400 ml-2">
                    {organizationData.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase">{t('topBar.email')}:</span>
                  <a href={`mailto:${organizationData.email}`} className="font-bold text-white hover:text-amber-400">
                    {organizationData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase">{language === 'hi' ? 'कार्यालय पता (Office Address):' : 'Office Address:'}</span>
                    <p className="text-slate-300 text-xs">{organizationData.officeAddress}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] uppercase">{language === 'hi' ? 'आवासीय कार्यालय (Residential Office):' : 'Residential Office:'}</span>
                    <p className="text-slate-300 text-xs">{organizationData.residentialOffice}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* STATIC DEMO DISCLAIMER BANNER */}
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex items-start gap-3 text-xs text-slate-400">
          <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-amber-400 font-bold block uppercase tracking-wider">
              {language === 'hi' ? 'सार्वजनिक सूचना एवं डेमो डिस्क्लेमर' : 'Public Notice & Static Demo Disclaimer'}
            </span>
            <p className="leading-relaxed">
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>{t('footer.copyright')}</div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-300">{t('nav.about')}</Link>
            <span>•</span>
            <Link to="/citizen-rights" className="hover:text-slate-300">{t('nav.citizenRights')}</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300">{t('nav.contact')}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
