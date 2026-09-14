export interface FAQItem {
  id: string;
  category: 'reporting' | 'tracking' | 'whistleblower' | 'rti' | 'general';
  categoryLabel: { hi: string; en: string };
  question: { hi: string; en: string };
  answer: { hi: string; en: string };
}

export const faqList: FAQItem[] = [
  {
    id: 'FAQ-01',
    category: 'reporting',
    categoryLabel: { hi: 'शिकायत प्रक्रिया', en: 'Complaint Reporting' },
    question: {
      hi: 'भ्रष्टाचार की शिकायत दर्ज कराने के लिए किन साक्ष्यों की आवश्यकता होती है?',
      en: 'What evidence is required to lodge a corruption complaint?',
    },
    answer: {
      hi: 'साक्ष्यों में आधिकारिक पत्राचार, ऑडियो/वीडियो रिकॉर्डिंग, बैंक ट्रांसमिशन रसीदें, या निविधा दस्तावेज शामिल हो सकते हैं। ध्यान रखें कि साक्ष्य वैध और सत्य होने चाहिए।',
      en: 'Evidence may include official correspondence, audio/video clips, bank transaction receipts, or tender documents. All evidence provided must be authentic and verifiable.',
    },
  },
  {
    id: 'FAQ-02',
    category: 'whistleblower',
    categoryLabel: { hi: 'व्हिसलब्लोअर सुरक्षा', en: 'Whistleblower Safety' },
    question: {
      hi: 'क्या मैं अपनी पहचान उजागर किए बिना (गुमनाम) शिकायत दर्ज कर सकता हूँ?',
      en: 'Can I report corruption anonymously without disclosing my identity?',
    },
    answer: {
      hi: 'हाँ, पोर्टल पर गोपनीय/गुमनाम रिपोर्टिंग का विकल्प उपलब्ध है। आपकी पहचान पूरी तरह से सुरक्षित रखी जाती है और किसी भी प्रशासनिक स्तर पर उजागर नहीं की जाती।',
      en: 'Yes, anonymous reporting options are supported. Your identity remains strictly confidential and is protected under anti-corruption whistleblower frameworks.',
    },
  },
  {
    id: 'FAQ-03',
    category: 'tracking',
    categoryLabel: { hi: 'शिकायत ट्रैकिंग', en: 'Complaint Tracking' },
    question: {
      hi: 'शिकायत दर्ज करने के बाद उसकी स्थिति (Status) कैसे ट्रैक करें?',
      en: 'How do I track the status of my complaint after submission?',
    },
    answer: {
      hi: 'शिकायत दर्ज होने के बाद एक अद्वितीय संदर्भ नंबर (जैसे CFS-DEMO-001) प्राप्त होता है। आप "ट्रैक शिकायत" पेज पर जाकर यह नंबर दर्ज कर अद्यतन स्थिति देख सकते हैं।',
      en: 'Upon submission, a unique reference ID (e.g. CFS-DEMO-001) is assigned. Visit the "Track Complaint" page and enter your ID to check real-time progress timelines.',
    },
  },
  {
    id: 'FAQ-04',
    category: 'rti',
    categoryLabel: { hi: 'सूचना का अधिकार (RTI)', en: 'Right to Information (RTI)' },
    question: {
      hi: 'RTI (सूचना का अधिकार) अधिनियम के तहत सरकारी जानकारी कैसे प्राप्त करें?',
      en: 'How to seek official information under the Right to Information (RTI) Act?',
    },
    answer: {
      hi: 'नागरिक संबंधित विभाग के जन सूचना अधिकारी (PIO) को आवेदन प्रस्तुत कर सकते हैं। आवेदन का प्रारूप हमारी वेबसाइट के नागरिक अधिकार अनुभाग में उपलब्ध है।',
      en: 'Citizens can file an application addressed to the Public Information Officer (PIO) of the concerned department. Application guides are available in our Citizen Rights section.',
    },
  },
  {
    id: 'FAQ-05',
    category: 'general',
    categoryLabel: { hi: 'सामान्य प्रश्न', en: 'General Information' },
    question: {
      hi: 'संगठन का पंजीकरण क्रमांक क्या है और इसकी वैधता क्या है?',
      en: 'What is the registration number of the organization and its validity?',
    },
    answer: {
      hi: 'संगठन का आधिकारिक पंजीकरण क्रमांक 1597/210/2026 है। यह एक स्वायत्त एवं गैर-लाभकारी सार्वजनिक जवाबदेही पहल के रूप में पंजीकृत है।',
      en: 'The official registration number of the organization is 1597/210/2026. It is registered as an autonomous public accountability initiative.',
    },
  },
];
