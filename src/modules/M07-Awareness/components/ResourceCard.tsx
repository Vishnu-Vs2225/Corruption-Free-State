import React from 'react';
import { Link } from 'react-router-dom';
import type { ResourceItem } from '../types/awareness';
import { useLanguage } from '../../../i18n/LanguageContext';
import { BookOpen, ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  resource: ResourceItem;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const { language } = useLanguage();

  const title = language === 'hi' ? resource.titleHi : resource.titleEn;
  const desc = language === 'hi' ? resource.descHi : resource.descEn;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 font-sans hover:border-blue-900 transition-all flex flex-col justify-between group">
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-blue-950 font-bold text-xs uppercase font-mono">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>RESOURCE</span>
          </div>

          <span className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-300 text-[10px] font-mono font-bold rounded">
            {resource.format}
          </span>
        </div>

        <h4 className="text-base font-bold text-slate-900 leading-snug">{title}</h4>
        <p className="text-xs text-slate-600 leading-relaxed font-sans">{desc}</p>
      </div>

      <div className="pt-2 border-t border-slate-100">
        {resource.url.startsWith('http') ? (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors uppercase tracking-wider"
          >
            <span>{language === 'hi' ? 'संसाधन देखें ↗' : 'View Resource ↗'}</span>
          </a>
        ) : (
          <Link
            to={resource.url}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors uppercase tracking-wider"
          >
            <span>{language === 'hi' ? 'संसाधन खोलें' : 'Open Resource'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};
