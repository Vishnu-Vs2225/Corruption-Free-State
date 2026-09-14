import type { ResourceItem } from '../types/awareness';

export const EDUCATIONAL_RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    titleEn: 'Citizen Guide: How to Draft an RTI Application',
    titleHi: 'नागरिक मार्गदर्शिका: आरटीआई आवेदन कैसे लिखें',
    descEn: 'Comprehensive guide covering point-to-point question drafting, fee payments, and first appeal procedures.',
    descHi: 'बिंदुवार प्रश्न पूछने, शुल्क भुगतान और प्रथम अपील प्रक्रिया को समझाने वाली मार्गदर्शिका।',
    category: 'guide',
    format: 'GUIDE',
    url: '/citizen-rights/rti',
    verified: true,
  },
  {
    id: 'res-2',
    titleEn: 'Anti-Bribery Citizen Action Do\'s and Don\'ts Poster',
    titleHi: 'भ्रष्टाचार विरोधी नागरिक कार्य पोस्टर (क्या करें और क्या न करें)',
    descEn: 'Summary handbook on immediate steps when asked for illegal gratification or speed money.',
    descHi: 'अनुचित राशि की मांग किए जाने पर तुरंत उठाए जाने वाले कदमों का संक्षिप्त हैंडबुक।',
    category: 'poster',
    format: 'WEB',
    url: '/awareness/dos-and-donts',
    verified: true,
  },
  {
    id: 'res-3',
    titleEn: 'Overview of Prevention of Corruption Act (PC Act)',
    titleHi: 'भ्रष्टाचार निवारण अधिनियम (PC Act) की मुख्य विशेषताएं',
    descEn: 'Educational legal reference summarizing statutory provisions, penal clauses, and public duties.',
    descHi: 'वैधानिक प्रावधानों, दंडात्मक धाराओं और सार्वजनिक कर्तव्यों का संक्षिप्त कानूनी संदर्भ।',
    category: 'legal',
    format: 'WEB',
    url: '/awareness/legal-guide',
    verified: true,
  },
];
