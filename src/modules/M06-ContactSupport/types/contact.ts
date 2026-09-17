export interface ContactInfo {
  phone: string;
  phoneSecondary?: string;
  email: string;
  registrationNumber: string;
  officeAddressEn: string;
  officeAddressHi: string;
  residentialAddressEn: string;
  residentialAddressHi: string;
  whatsappPhone?: string;
}

export interface SupportChannel {
  id: string;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  actionLabelEn: string;
  actionLabelHi: string;
  href: string;
  isExternal: boolean;
  iconName: string;
}

export interface FAQItem {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
  category: 'rights' | 'tracking' | 'general' | 'privacy';
}

export interface SocialLink {
  id: string;
  platform: 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'whatsapp';
  label: string;
  href: string;
  verified: boolean;
}
