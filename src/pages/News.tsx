import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { newsArticles } from '../data/news';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { FileText, Calendar, Tag } from 'lucide-react';

export const News: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12">
      <Breadcrumb items={[{ label: t('nav.news') }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>{t('nav.news')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('nav.news')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'प्रशासनिक पारदर्शिता, सरकारी आदेशों और एंटी-करप्शन विजिलेंस अभियानों से जुड़ी हालिया खबरें।'
              : 'Recent press releases, administrative reforms, and vigilance updates.'}
          </p>
        </div>
      </section>

      {/* ARTICLES FEED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-100 text-blue-900 rounded font-bold">
                  <Tag className="w-3 h-3 text-blue-900" />
                  <span>{article.category[language]}</span>
                </span>

                <span className="inline-flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.date}</span>
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 leading-snug">
                {article.title[language]}
              </h2>

              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                {article.excerpt[language]}
              </p>

              <div className="pt-4 border-t border-slate-100 text-xs font-sans text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                {article.content[language]}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
