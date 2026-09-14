import type { TransparencyPrinciple, InformationArea } from '../types/transparency';

export const TRANSPARENCY_PRINCIPLES: TransparencyPrinciple[] = [
  {
    id: 'p1',
    title: 'OPEN INFORMATION',
    titleHi: 'खुली सूचना तंत्र',
    description: 'Make public information transparent, accessible, and simple to inspect.',
    descriptionHi: 'सार्वजनिक जानकारी को पारदर्शी, सुलभ और निरीक्षण में आसान बनाना।',
    iconName: 'BookOpen',
  },
  {
    id: 'p2',
    title: 'ACCOUNTABILITY',
    titleHi: 'प्रशासनिक जवाबदेही',
    description: 'Encourage responsible, audited use of public funds and assets.',
    descriptionHi: 'सार्वजनिक धन एवं संपत्ति के जिम्मेदार व लेखा-परीक्षित उपयोग को प्रोत्साहन।',
    iconName: 'ShieldCheck',
  },
  {
    id: 'p3',
    title: 'UNIVERSAL ACCESS',
    titleHi: 'सार्वभौमिक पहुंच',
    description: 'Help every citizen locate statutory rules, RTI rights, and public records.',
    descriptionHi: 'प्रत्येक नागरिक को वैधानिक नियमों, आरटीआई अधिकारों व अभिलेखों की त्वरित पहुंच।',
    iconName: 'Eye',
  },
  {
    id: 'p4',
    title: 'CITIZEN PARTICIPATION',
    titleHi: 'नागरिक सहभागिता',
    description: 'Empower active citizens to audit administrative decisions independently.',
    descriptionHi: 'सक्रिय नागरिकों को प्रशासनिक निर्णयों के स्वतंत्र ऑडिट हेतु सशक्त बनाना।',
    iconName: 'Users',
  },
];

export const INFORMATION_AREAS: InformationArea[] = [
  {
    id: 'area-budget',
    title: 'Public Budget',
    titleHi: 'सार्वजनिक बजट',
    description: 'Understand state and departmental budget planning, allocations and expenditures.',
    descriptionHi: 'राज्य एवं विभागीय बजटीय नियोजन, आबंटन और व्यय ब्योरा देखें।',
    route: '/transparency/budget',
    iconName: 'DollarSign',
  },
  {
    id: 'area-tenders',
    title: 'Tenders & Procurement',
    titleHi: 'निविदाएं एवं खरीद',
    description: 'Review public contracts, tender bidding guidelines and official procurement portals.',
    descriptionHi: 'सरकारी अनुबंधों, निविदा बोली नियमों तथा आधिकारिक खरीद पोर्टलों की जानकारी।',
    route: '/transparency/tenders',
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'area-expenditure',
    title: 'Public Expenditure',
    titleHi: 'सार्वजनिक व्यय',
    description: 'Inspect public fund utilization, audit reports and treasury tracking systems.',
    descriptionHi: 'सार्वजनिक धन के उपयोग, ऑडिट रिपोर्ट और खजाना ट्रैकिंग प्रणालियों की जानकारी।',
    route: '/transparency/expenditure',
    iconName: 'BarChart3',
  },
  {
    id: 'area-assets',
    title: 'Asset Declarations',
    titleHi: 'संपत्ति घोषणा',
    description: 'Learn about public official asset disclosures, statutory frameworks and official links.',
    descriptionHi: 'लोक सेवकों की संपत्ति प्रकटीकरण नियमों और आधिकारिक रिकॉर्ड्स की जानकारी।',
    route: '/transparency/assets',
    iconName: 'Award',
  },
];
