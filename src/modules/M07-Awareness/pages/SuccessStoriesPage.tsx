import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { SuccessStoryCard } from '../components/SuccessStoryCard';
import { SUCCESS_STORIES } from '../data/successStories';
import { Award } from 'lucide-react';

export const SuccessStoriesPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20 font-sans">
      <Breadcrumb items={[{ label: t('nav.awareness'), path: '/awareness' }, { label: 'Success Stories' }]} />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 border-b-4 border-emerald-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-xs font-bold text-emerald-300">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>VERIFIED CASE OUTCOMES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {language === 'hi' ? 'सफलता की गाथाएं' : 'Verified Success Stories'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {language === 'hi'
              ? 'नागरिक जागरूकता एवं ऑडिट से उजागर हुए मामलों के वास्तविक और सत्यापित परिणाम।'
              : 'Explore verified outcomes resulting from active citizen audit and RTI awareness.'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUCCESS_STORIES.map((story) => (
            <SuccessStoryCard key={story.id} story={story} />
          ))}
        </div>
      </section>
    </div>
  );
};
