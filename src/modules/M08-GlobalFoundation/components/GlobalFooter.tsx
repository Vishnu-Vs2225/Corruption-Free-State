import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../i18n/LanguageContext';
import { organizationData } from '../../../data/organization';
import { Phone, Mail, MapPin, ExternalLink, Info, CheckCircle } from 'lucide-react';

export const GlobalFooter: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800" aria-label="Global Site Footer">
      {/* MAIN FOOTER COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Organization & Registration */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Corruption Free State Logo"
              className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 object-contain"
            />
            <div>
              <div className="text-base font-black text-white leading-tight">
                {language === 'hi' ? 'भ्रष्टाचार मुक्त राज्य' : 'Corruption Free State'}
              </div>
              <div className="text-[11px] font-semibold text-amber-400">
                Reg No: {organizationData.registrationNumber}
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {language === 'hi'
              ? 'नागरिकों को भ्रष्टाचार के खिलाफ जागरूक, सशक्त एवं संगठित करने हेतु समर्पित एक निष्पक्ष, पारदर्शी एवं तकनीकी सार्वजनिक मंच।'
              : 'A dedicated, non-partisan public initiative aimed at empowering citizens, fostering transparency, and ending corruption across state administrative services.'}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-lg">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>
              {language === 'hi'
                ? 'WCAG 2.2 AA सुलभता अनुपालन मानकों पर निर्मित'
                : 'Built according to WCAG 2.2 AA Accessibility Guidelines'}
            </span>
          </div>
        </div>

        {/* Column 2: Quick Navigation */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            {language === 'hi' ? 'मुख्य अनुभाग' : 'Quick Navigation'}
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors">
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition-colors">
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/citizen-rights" className="hover:text-amber-400 transition-colors">
                {t('nav.citizenRights')}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-amber-400 transition-colors">
                {t('nav.faq')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition-colors">
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources & Support */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            {language === 'hi' ? 'संसाधन एवं सहायता' : 'Resources & Knowledge'}
          </h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link to="/citizen-rights/rti" className="hover:text-amber-400 transition-colors">
                {language === 'hi' ? 'RTI अधिनियम जानकारी' : 'RTI Act Guidelines'}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-amber-400 transition-colors">
                {t('nav.faq')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition-colors">
                {t('nav.contact')}
              </Link>
            </li>
            <li>
              <a
                href="https://rtionline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors inline-flex items-center gap-1"
              >
                <span>National RTI Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Verified Contact Info */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            {language === 'hi' ? 'हेल्पलाइन एवं सम्पर्क' : 'Verified Contact Info'}
          </h3>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2 text-slate-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">{t('topBar.helpline')}:</div>
                <a href={`tel:${organizationData.phones[0]}`} className="text-amber-400 font-bold hover:underline">
                  {organizationData.phones[0]}
                </a>
                <span className="mx-1">/</span>
                <a href={`tel:${organizationData.phones[1]}`} className="text-amber-400 font-bold hover:underline">
                  {organizationData.phones[1]}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${organizationData.email}`} className="text-slate-300 hover:text-amber-400 underline">
                {organizationData.email}
              </a>
            </div>

            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span className="text-slate-400">{organizationData.officeAddress}</span>
            </div>
          </div>
        </div>

      </div>

      {/* OFFICIAL NOTICE STRIP */}
      <div className="bg-slate-900 border-t border-b border-slate-800 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {language === 'hi'
              ? 'आधिकारिक सूचना: भ्रष्टाचार मुक्त राज्य (पंजीकरण संख्या 1597/210/2026) सार्वजनिक पारदर्शिता, नागरिक अधिकारों की शिक्षा और जन सहायता हेतु समर्पित है।'
              : 'Official Notice: Corruption Free State (Reg No: 1597/210/2026) is dedicated to public transparency, citizen rights education, and civic assistance.'}
          </span>
        </div>
      </div>

      {/* COPYRIGHT STRIP */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <div>
          © {new Date().getFullYear()} {language === 'hi' ? organizationData.nameHindi : organizationData.nameEnglish}. {language === 'hi' ? 'सर्वाधिकार सुरक्षित।' : 'All rights reserved.'}
        </div>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="hover:text-slate-300 transition-colors">
            {language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
          </Link>
          <span>•</span>
          <Link to="/terms" className="hover:text-slate-300 transition-colors">
            {language === 'hi' ? 'उपयोग की शर्तें' : 'Terms of Service'}
          </Link>
        </div>
      </div>
    </footer>
  );
};
