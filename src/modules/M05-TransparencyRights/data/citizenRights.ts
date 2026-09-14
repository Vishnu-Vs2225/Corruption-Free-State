import type { RTIStep, CitizenCharterItem, OfficialSource } from '../types/transparency';

export const RTI_STEPS: RTIStep[] = [
  {
    step: 1,
    title: 'Identify Desired Information',
    titleHi: 'वांछित जानकारी की पहचान करें',
    description: 'Determine which public authority, department or local body holds the official records.',
    descriptionHi: 'यह निर्धारित करें कि कौन सा सरकारी विभाग या स्थानीय निकाय आधिकारिक रिकॉर्ड रखता है।',
  },
  {
    step: 2,
    title: 'Draft Application to PIO',
    titleHi: 'जन सूचना अधिकारी (PIO) को आवेदन तैयार करें',
    description: 'Address the application to the concerned Public Information Officer (PIO) with concise questions.',
    descriptionHi: 'संबंधित जन सूचना अधिकारी (PIO) को स्पष्ट और संक्षिप्त प्रश्नों के साथ आवेदन लिखें।',
  },
  {
    step: 3,
    title: 'Pay Prescribed Fee',
    titleHi: 'निर्धारित आवेदन शुल्क का भुगतान करें',
    description: 'Attach the statutory RTI fee (usually ₹10 via IPO, Demand Draft, or online portal). BPL citizens are exempt.',
    descriptionHi: 'वैधानिक आरटीआई शुल्क (आमतौर पर ₹10) संलग्न करें। गरीबी रेखा से नीचे (BPL) के नागरिक नि:शुल्क हैं।',
  },
  {
    step: 4,
    title: '30-Day Mandatory Resolution',
    titleHi: '30-दिवसीय अनिवार्य समाधान समयसीमा',
    description: 'Public authority must provide response within 30 days (or 48 hours for life & liberty matters).',
    descriptionHi: 'लोक प्राधिकरण को 30 दिनों के भीतर उत्तर प्रदान करना अनिवार्य है (जीवन/स्वतंत्रता मामलों में 48 घंटे)।',
  },
  {
    step: 5,
    title: 'First & Second Appeal Provision',
    titleHi: 'प्रथम एवं द्वितीय अपील का कानूनी प्रावधान',
    description: 'If information is refused or delayed, file an appeal to the First Appellate Authority (FAA) or Information Commission.',
    descriptionHi: 'यदि जानकारी अस्वीकृत या विलंबित होती है, तो प्रथम अपीलीय अधिकारी या सूचना आयोग में अपील करें।',
  },
];

export const CITIZEN_CHARTER_DEMO: CitizenCharterItem[] = [
  {
    id: 'cc-1',
    service: 'Issuance of Income Certificate (Sample)',
    serviceHi: 'आय प्रमाण पत्र जारी करना (नमूना)',
    timeline: '15 Working Days',
    timelineHi: '15 कार्य दिवस',
    office: 'Tehsildar / Sub-Divisional Officer',
    officeHi: 'तहसीलदार / उप-विभागीय अधिकारी',
    source: 'Official Public Services Guarantee Act',
    sourceHi: 'आधिकारिक लोक सेवा गारंटी अधिनियम',
  },
  {
    id: 'cc-2',
    service: 'New Ration Card Registration (Sample)',
    serviceHi: 'नया राशन कार्ड पंजीकरण (नमूना)',
    timeline: '30 Working Days',
    timelineHi: '30 कार्य दिवस',
    office: 'District Food & Civil Supplies Office',
    officeHi: 'जिला खाद्य एवं नागरिक आपूर्ति कार्यालय',
    source: 'Official Public Services Guarantee Act',
    sourceHi: 'आधिकारिक लोक सेवा गारंटी अधिनियम',
  },
  {
    id: 'cc-3',
    service: 'Residential Building Plan Sanction (Sample)',
    serviceHi: 'आवासीय भवन नक्शा स्वीकृति (नमूना)',
    timeline: '30 Working Days',
    timelineHi: '30 कार्य दिवस',
    office: 'Municipal Corporation / Town Planning',
    officeHi: 'नगर निगम / नगर एवं ग्राम निवेश',
    source: 'Official Public Services Guarantee Act',
    sourceHi: 'आधिकारिक लोक सेवा गारंटी अधिनियम',
  },
];

export const RIGHTS_OFFICIAL_SOURCES: OfficialSource[] = [
  {
    id: 'src-rti-1',
    title: 'RTI Online Portal (Govt of India)',
    titleHi: 'आरटीआई ऑनलाइन पोर्टल (भारत सरकार)',
    description: 'Official national portal for filing online RTI applications and first appeals across Central Ministries.',
    descriptionHi: 'केन्द्रीय मंत्रालयों में ऑनलाइन आरटीआई आवेदन और प्रथम अपील दर्ज करने हेतु आधिकारिक राष्ट्रीय पोर्टल।',
    url: 'https://rtionline.gov.in',
    authority: 'Department of Personnel and Training (DoPT)',
    authorityHi: 'कार्मिक एवं प्रशिक्षण विभाग (DoPT)',
    verified: true,
  },
  {
    id: 'src-dbt-1',
    title: 'Direct Benefit Transfer (DBT) Bharat Portal',
    titleHi: 'प्रत्यक्ष लाभ अंतरण (DBT) भारत पोर्टल',
    description: 'Official central directory for tracking welfare schemes, beneficiary transfers, and Direct Benefit Transfer guidelines.',
    descriptionHi: 'कल्याणकारी योजनाओं, लाभार्थी हस्तांतरण और डीबीटी दिशानिर्देशों को ट्रैक करने के लिए आधिकारिक केन्द्रीय पोर्टल।',
    url: 'https://dbtbharat.gov.in',
    authority: 'Cabinet Secretariat, Govt of India',
    authorityHi: 'मंत्रिमंडल सचिवालय, भारत सरकार',
    verified: true,
  },
];
