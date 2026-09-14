export interface NewsArticle {
  id: string;
  title: { hi: string; en: string };
  category: { hi: string; en: string };
  date: string;
  excerpt: { hi: string; en: string };
  content: { hi: string; en: string };
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'NEWS-01',
    title: {
      hi: 'राज्य में डिजिटल ई-टेंडरिंग प्रणाली से पारदर्शिता में 40% की ऐतिहासिक वृद्धि',
      en: 'Historic 40% Rise in Transparency via Digital E-Tendering System in State',
    },
    category: { hi: 'प्रशासनिक सुधार', en: 'Administrative Reform' },
    date: '01 सितंबर 2026',
    excerpt: {
      hi: 'ई-प्रोक्योरमेंट पोर्टल के अनिवार्य कार्यान्वयन के बाद निविदा प्रक्रिया में मानवीय हस्तक्षेप समाप्त हुआ।',
      en: 'Mandatory e-procurement portal implementation eliminates manual intervention in bidding process.',
    },
    content: {
      hi: 'राज्य सरकार द्वारा सार्वजनिक ठेकों में धांधली रोकने के लिए पूरी तरह से पारदर्शी ई-टेंडरिंग प्रक्रिया लागू की गई है। इस सुधार से वित्तीय हेरफेर पर अंकुश लगा है और आम जनता का भरोसा बढ़ा है।',
      en: 'The state has institutionalized end-to-end transparent e-tendering across all public works contracts, mitigating financial manipulation and enhancing civic trust.',
    },
  },
  {
    id: 'NEWS-02',
    title: {
      hi: 'विजिलेंस जागरूकता सप्ताह 2026: "ईमानदारी ही राज्य की उन्नति की कुंजी"',
      en: 'Vigilance Awareness Week 2026: "Integrity is Key to State Progress"',
    },
    category: { hi: 'जागरूकता अभियान', en: 'Awareness Campaign' },
    date: '25 अगस्त 2026',
    excerpt: {
      hi: 'नागरिकों को भ्रष्टाचार मुक्त शासन में भागीदार बनाने के लिए व्यापक कार्यशालाओं का आयोजन।',
      en: 'Statewide workshops launched to empower citizens as partners in corruption-free governance.',
    },
    content: {
      hi: 'सभी जिलों में व्हिसलब्लोअर संरक्षण और आरटीआय (RTI) के प्रभावी उपयोग पर विशेष शिक्षण सत्र आयोजित किए गए हैं, जिसमें युवाओं की सक्रिय सहभागिता रही।',
      en: 'Special educational workshops covering whistleblower protections and effective RTI usage were conducted across all districts with active youth participation.',
    },
  },
  {
    id: 'NEWS-03',
    title: {
      hi: 'सार्वजनिक राशन वितरण प्रणाली में बायोमेट्रिक सत्यापन से कालाबाजारी पर रोक',
      en: 'Biometric Verification Stops Ration Black Marketing in Public Distribution',
    },
    category: { hi: 'नागरिक अधिकार', en: 'Citizen Rights' },
    date: '10 अगस्त 2026',
    excerpt: {
      hi: 'प्रत्येक पात्र परिवार को सीधे खाद्यान्न उपलब्धता सुनिश्चित करने के लिए डिजिटलीकरण।',
      en: 'Digitalization ensures direct foodgrain availability for every eligible family without leaks.',
    },
    content: {
      hi: 'सार्वजनिक वितरण दुकानों पर बायोमेट्रिक एवं ओटीपी आधारित सत्यापन लागू होने से फर्जी राशन कार्ड समाप्त हुए हैं और वास्तविक लाभार्थियों तक राशन पहुंच रहा है।',
      en: 'Implementation of biometric and OTP authentication at fair price shops eliminated ghost ration cards, guaranteeing genuine beneficiary distribution.',
    },
  },
];
