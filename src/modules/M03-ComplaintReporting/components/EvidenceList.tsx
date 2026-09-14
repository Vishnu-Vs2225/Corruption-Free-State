import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import type { EvidenceFile } from '../../../types/complaint';
import { FileText, Image, Film, Music, Trash2 } from 'lucide-react';

interface Props {
  files: EvidenceFile[];
  onRemove: (id: string) => void;
}

export const EvidenceList: React.FC<Props> = ({ files, onRemove }) => {
  const { language } = useLanguage();

  if (files.length === 0) {
    return (
      <div className="text-center py-6 border border-slate-200 rounded-xl bg-slate-50 text-slate-400 text-xs font-mono">
        {language === 'hi' ? 'कोई साक्ष्य फाइल नहीं चुनी गई है' : 'No evidence files attached'}
      </div>
    );
  }

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getIcon = (type: string) => {
    if (type.startsWith('image/')) return Image;
    if (type.startsWith('audio/')) return Music;
    if (type.startsWith('video/')) return Film;
    return FileText;
  };

  return (
    <div className="space-y-3">
      <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
        {language === 'hi' ? `संलग्न साक्ष्य फाइलें (${files.length})` : `Attached Evidence Files (${files.length})`}
      </div>

      <div className="space-y-2">
        {files.map((file) => {
          const Icon = getIcon(file.type);
          return (
            <div
              key={file.id}
              className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-sm hover:border-slate-300 transition-all"
            >
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <div className="w-8 h-8 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="min-w-0 space-y-0.5">
                  <div className="text-xs font-bold text-slate-900 truncate">{file.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {formatSize(file.size)} • {file.type || 'Local File'}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRemove(file.id)}
                className="p-2 text-slate-400 hover:text-red-700 rounded-lg transition-colors flex-shrink-0"
                title={language === 'hi' ? 'फाइल हटाएं' : 'Remove file'}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
