import React from 'react';
import { CITIZEN_CHARTER_DEMO } from '../data/citizenRights';
import { useLanguage } from '../../../i18n/LanguageContext';
import { FileText, Clock, Building } from 'lucide-react';

export const CitizenCharterTable: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm space-y-0 font-sans">
      <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase">
            {language === 'hi' ? 'लोक सेवा गारंटी अधिनियम' : 'GUARANTEED SERVICE DELIVERY'}
          </span>
          <h3 className="text-lg font-bold uppercase flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span>{language === 'hi' ? 'नागरिक अधिकार पत्र सेवा मानक' : 'Citizen Charter Service Standards'}</span>
          </h3>
        </div>
        <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-xs font-mono font-bold">
          {language === 'hi' ? 'नमूना सरणी' : 'SAMPLE TABLE'}
        </span>
      </div>

      <div className="table-responsive-container">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200 font-mono">
            <tr>
              <th className="p-4">{language === 'hi' ? 'लोक सेवा (Service)' : 'Service'}</th>
              <th className="p-4">{language === 'hi' ? 'नियत समयसीमा (Timeline)' : 'Expected Timeline'}</th>
              <th className="p-4">{language === 'hi' ? 'उत्तरदायी कार्यालय' : 'Responsible Office'}</th>
              <th className="p-4">{language === 'hi' ? 'कानूनी आधार' : 'Statutory Source'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 font-sans">
            {CITIZEN_CHARTER_DEMO.map((item) => {
              const service = language === 'hi' ? item.serviceHi : item.service;
              const timeline = language === 'hi' ? item.timelineHi : item.timeline;
              const office = language === 'hi' ? item.officeHi : item.office;
              const source = language === 'hi' ? item.sourceHi : item.source;

              return (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-900">{service}</td>
                  <td className="p-4 font-mono font-bold text-amber-700">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span>{timeline}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>{office}</span>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-slate-500">{source}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
