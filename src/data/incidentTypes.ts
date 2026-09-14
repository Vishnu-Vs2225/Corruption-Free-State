import type { IncidentType } from '../types/complaint';

export interface IncidentCategory {
  id: IncidentType;
  label: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
}

export const INCIDENT_CATEGORIES: IncidentCategory[] = [
  {
    id: 'bribery',
    label: {
      en: 'Bribery & Money Demands',
      hi: 'रिश्वतखोरी एवं धन की मांग',
    },
    description: {
      en: 'Demanding illegal cash or favors to perform official duties.',
      hi: 'सरकारी कार्य करने हेतु अवैध राशि या अनुचित लाभ मांगना।',
    },
  },
  {
    id: 'misuseOfResources',
    label: {
      en: 'Misuse of Public Resources',
      hi: 'सार्वजनिक परिसंपत्तियों का दुरुपयोग',
    },
    description: {
      en: 'Unauthorized usage of government funds, vehicles, or property.',
      hi: 'सरकारी धन, वाहनों अथवा संपत्तियों का अनधिकृत उपभोग।',
    },
  },
  {
    id: 'procurementIrregularity',
    label: {
      en: 'Tender & Procurement Irregularity',
      hi: 'टेंडर एवं खरीद में अनियमितता',
    },
    description: {
      en: 'Favoritism or contract rigging in public procurement contracts.',
      hi: 'सार्वजनिक खरीद और टेंडरों में पक्षपात या गपशप।',
    },
  },
  {
    id: 'fraud',
    label: {
      en: 'Financial Fraud / Misrepresentation',
      hi: 'वित्तीय धोखाधड़ी एवं गलत प्रस्तुति',
    },
    description: {
      en: 'Falsifying government records, bogus receipts, or ghost beneficiaries.',
      hi: 'सरकारी रिकॉर्डों, फर्जी रसीदों या काल्पनिक लाभार्थियों की हेराफेरी।',
    },
  },
  {
    id: 'abuseOfAuthority',
    label: {
      en: 'Abuse of Official Power',
      hi: 'पद एवं अधिकार का दुरुपयोग',
    },
    description: {
      en: 'Coercive actions or illegal denial of citizen entitlements.',
      hi: 'नागरिक अधिकारों को अवैध रूप से रोकना अथवा दमनकारी कार्यवाही।',
    },
  },
  {
    id: 'conflictOfInterest',
    label: {
      en: 'Conflict of Interest',
      hi: 'हितों का टकराव (Conflict of Interest)',
    },
    description: {
      en: 'Awarding contracts or benefits to personal relatives or associates.',
      hi: 'रिश्तेदारों या निजी सहयोगियों को नियम विरुद्ध लाभ पहुंचाना।',
    },
  },
  {
    id: 'other',
    label: {
      en: 'Other Governance Irregularity',
      hi: 'अन्य प्रशासनिक अनियमितता',
    },
    description: {
      en: 'Any other administrative misconduct requiring review.',
      hi: 'अन्य कोई प्रशासनिक गड़बड़ी जिसकी जांच आवश्यक हो।',
    },
  },
];
