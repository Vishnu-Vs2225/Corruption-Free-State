import React from 'react';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Breadcrumb } from '../../../components/common/Breadcrumb';
import { AwarenessHero } from '../components/AwarenessHero';
import { AwarenessIntro } from '../components/AwarenessIntro';
import { CorruptionTypeCard } from '../components/CorruptionTypeCard';
import { ImpactCard } from '../components/ImpactCard';
import { DoList } from '../components/DoList';
import { DontList } from '../components/DontList';
import { LegalGuideCard } from '../components/LegalGuideCard';
import { WhistleblowerInfo } from '../components/WhistleblowerInfo';
import { SuccessStoryCard } from '../components/SuccessStoryCard';
import { ResourceCard } from '../components/ResourceCard';
import { CORRUPTION_TYPES } from '../data/corruptionTypes';
import { IMPACT_CARDS } from '../data/awareness';
import { LEGAL_GUIDES } from '../data/legalResources';
import { SUCCESS_STORIES } from '../data/successStories';
import { EDUCATIONAL_RESOURCES } from '../data/resources';
import '../styles/awareness.css';

export const AwarenessPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-10 pb-20">
      <Breadcrumb items={[{ label: t('nav.awareness') }]} />

      <AwarenessHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <AwarenessIntro />

        {/* CORRUPTION TYPES PREVIEW */}
        <div className="space-y-4 font-sans">
          <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'भ्रष्टाचार के मुख्य रूप' : 'Forms of Corruption'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORRUPTION_TYPES.slice(0, 3).map((item) => (
              <CorruptionTypeCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* SOCIETAL IMPACT */}
        <div className="space-y-4 font-sans">
          <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'भ्रष्टाचार का समाज पर प्रभाव' : 'How Corruption Affects Society'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_CARDS.map((item) => (
              <ImpactCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* DO'S & DONT'S PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <DoList />
          <DontList />
        </div>

        {/* LEGAL GUIDE PREVIEW */}
        <div className="space-y-4 font-sans">
          <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'कानूनी ढांचा एवं वैधानिक अधिनियम' : 'Anti-Corruption Legal Framework'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEGAL_GUIDES.map((guide) => (
              <LegalGuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        </div>

        {/* WHISTLEBLOWER AWARENESS */}
        <WhistleblowerInfo />

        {/* SUCCESS STORIES PREVIEW */}
        <div className="space-y-4 font-sans">
          <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'सत्यापित सफलता की गाथाएं' : 'Verified Success Stories'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUCCESS_STORIES.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        {/* RESOURCES PREVIEW */}
        <div className="space-y-4 font-sans">
          <h2 className="text-2xl font-black text-blue-950 uppercase tracking-tight">
            {language === 'hi' ? 'शैक्षणिक संसाधन एवं मार्गदर्शिकाएं' : 'Educational Resources & Guides'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATIONAL_RESOURCES.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
