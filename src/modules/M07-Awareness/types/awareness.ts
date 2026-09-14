export interface CorruptionType {
  id: string;
  nameEn: string;
  nameHi: string;
  descEn: string;
  descHi: string;
  exampleEn: string;
  exampleHi: string;
  iconName: string;
}

export interface DoDontItem {
  id: string;
  type: 'do' | 'dont';
  textEn: string;
  textHi: string;
  explanationEn: string;
  explanationHi: string;
}

export interface LegalGuide {
  id: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  actNameEn: string;
  actNameHi: string;
  officialUrl: string;
}

export interface SuccessStory {
  id: string;
  titleEn: string;
  titleHi: string;
  summaryEn: string;
  summaryHi: string;
  outcomeEn: string;
  outcomeHi: string;
  sourceEn: string;
  sourceHi: string;
  date: string;
  verified: true;
}

export interface CampaignItem {
  id: string;
  titleEn: string;
  titleHi: string;
  periodEn: string;
  periodHi: string;
  descEn: string;
  descHi: string;
  status: 'active' | 'archived';
}

export interface ResourceItem {
  id: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  category: 'guide' | 'poster' | 'legal' | 'faq';
  format: 'PDF' | 'WEB' | 'GUIDE';
  url: string;
  verified: true;
}
