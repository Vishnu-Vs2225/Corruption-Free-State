import React from 'react';
import type { DemoComplaint } from '../types/tracking';
import { ComplaintStatusBadge } from './ComplaintStatusBadge';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Tag, MapPin, AlertCircle, FileText } from 'lucide-react';

interface ComplaintSummaryProps {
  complaint: DemoComplaint;
}

export const ComplaintSummary: React.FC<ComplaintSummaryProps> = ({ complaint }) => {
  const { language } = useLanguage();

  const category = language === 'hi' ? complaint.categoryHi : complaint.category;
  const location = language === 'hi' ? complaint.locationHi : complaint.location;
  const lastUpdated = language === 'hi' ? complaint.lastUpdatedSampleHi : complaint.lastUpdatedSample;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
      {/* CARD HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-900" />
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
              {language === 'hi' ? 'शिकायत संदर्भ कोड' : 'Reference Code'}
            </span>
          </div>
          <div className="text-2xl font-black font-mono text-blue-950 tracking-wider pt-1">
            {complaint.reference}
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <ComplaintStatusBadge status={complaint.status} size="md" />
          <span className="text-[11px] text-slate-500 font-mono">
            {language === 'hi' ? 'अंतिम स्थिति अद्यतन:' : 'Last Updated:'} {lastUpdated}
          </span>
        </div>
      </div>

      {/* INFORMATION GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase">
            <Tag className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'hi' ? 'श्रेणी (Category)' : 'Category'}</span>
          </div>
          <p className="text-sm font-semibold text-slate-900">{category}</p>
        </div>

        <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 uppercase">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'hi' ? 'स्थान (Location)' : 'Location'}</span>
          </div>
          <p className="text-sm font-semibold text-slate-900">{location}</p>
        </div>
      </div>

      {/* REFERENCE STATUS FOOTER */}
      <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-2 text-xs text-blue-950">
        <AlertCircle className="w-4 h-4 text-blue-800 flex-shrink-0" />
        <span className="font-sans font-medium">
          {language === 'hi'
            ? 'यह पंजीकृत संदर्भ संख्या का आधिकारिक प्रगति रिकॉर्ड है।'
            : 'Official progress record for the registered reference number.'}
        </span>
      </div>
    </div>
  );
};
