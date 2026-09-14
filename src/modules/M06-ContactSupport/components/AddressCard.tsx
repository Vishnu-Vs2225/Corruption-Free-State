import React from 'react';
import { CONTACT_CONFIG } from '../data/contact';
import { useLanguage } from '../../../i18n/LanguageContext';
import { MapPin, Building2 } from 'lucide-react';

export const AddressCard: React.FC = () => {
  const { language } = useLanguage();

  const officeAddr = language === 'hi' ? CONTACT_CONFIG.officeAddressHi : CONTACT_CONFIG.officeAddressEn;
  const resAddr = language === 'hi' ? CONTACT_CONFIG.residentialAddressHi : CONTACT_CONFIG.residentialAddressEn;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 text-blue-950">
        <MapPin className="w-5 h-5 text-amber-500" />
        <h4 className="text-sm font-bold uppercase tracking-wider">
          {language === 'hi' ? 'हमारा कार्यालय पता' : 'OUR OFFICE ADDRESS'}
        </h4>
      </div>

      <div className="space-y-3 text-xs">
        <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 uppercase">
            <Building2 className="w-3.5 h-3.5 text-blue-900" />
            <span>{language === 'hi' ? 'मुख्य प्रशासनिक कार्यालय:' : 'Main Administrative Office:'}</span>
          </div>
          <p className="text-slate-600 leading-relaxed font-sans">{officeAddr}</p>
        </div>

        <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900 uppercase">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>{language === 'hi' ? 'नागरिक संपर्क कार्यालय:' : 'Citizen Liaison Office:'}</span>
          </div>
          <p className="text-slate-600 leading-relaxed font-sans">{resAddr}</p>
        </div>
      </div>
    </div>
  );
};
