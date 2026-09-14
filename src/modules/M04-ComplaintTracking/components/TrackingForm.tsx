import React, { useState } from 'react';
import { ComplaintReferenceInput } from './ComplaintReferenceInput';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Search } from 'lucide-react';

interface TrackingFormProps {
  initialValue?: string;
  onSearch: (refCode: string) => void;
}

export const TrackingForm: React.FC<TrackingFormProps> = ({ initialValue = '', onSearch }) => {
  const { language } = useLanguage();
  const [refValue, setRefValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = refValue.trim();

    if (!trimmed) {
      setError(
        language === 'hi'
          ? 'कृपया अपनी शिकायत संदर्भ संख्या दर्ज करें।'
          : 'Please enter your complaint reference number.'
      );
      return;
    }

    if (trimmed.length < 3) {
      setError(
        language === 'hi'
          ? 'संदर्भ संख्या कम से कम 3 अक्षरों की होनी चाहिए।'
          : 'Reference number must be at least 3 characters long.'
      );
      return;
    }

    setError(null);
    onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row items-xs-end gap-3">
        <div className="flex-1">
          <ComplaintReferenceInput
            label={language === 'hi' ? 'शिकायत संदर्भ संख्या' : 'Complaint Reference Number'}
            placeholder={language === 'hi' ? 'जैसे DEMO-0001 दर्ज करें...' : 'e.g. CFS-DEMO-0001'}
            value={refValue}
            error={error}
            onChange={(val) => {
              setRefValue(val);
              if (error) setError(null);
            }}
          />
        </div>

        <div className="sm:self-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <Search className="w-4 h-4 text-amber-400" />
            <span>{language === 'hi' ? 'स्थिति जांचें' : 'Check Status'}</span>
          </button>
        </div>
      </div>
    </form>
  );
};
