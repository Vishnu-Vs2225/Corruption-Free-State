export interface ComplaintRecord {
  id: string;
  category: { hi: string; en: string };
  department: { hi: string; en: string };
  dateSubmitted: string;
  status: 'received' | 'review' | 'investigation' | 'action_taken' | 'closed';
  isAnonymous: boolean;
  summary: { hi: string; en: string };
  timeline: {
    step: string;
    title: { hi: string; en: string };
    date: string;
    completed: boolean;
    active: boolean;
    description: { hi: string; en: string };
  }[];
}

export const sampleComplaints: Record<string, ComplaintRecord> = {
  'CFS-DEMO-001': {
    id: 'CFS-DEMO-001',
    category: { hi: 'सार्वजनिक निर्माण / टेंडर गबन', en: 'Public Works / Tender Malpractice' },
    department: { hi: 'लोक निर्माण विभाग (PWD)', en: 'Public Works Department (PWD)' },
    dateSubmitted: '2026-08-15',
    status: 'investigation',
    isAnonymous: false,
    summary: {
      hi: 'सड़क निर्माण परियोजना में गुणवत्ता की कमी और निविदा आवंटन में अनियमितता की शिकायत।',
      en: 'Complaint regarding quality compromise and tender allocation irregularities in road construction project.',
    },
    timeline: [
      {
        step: '01',
        title: { hi: 'शिकायत दर्ज हुई', en: 'Complaint Received' },
        date: '15 अगस्त 2026',
        completed: true,
        active: false,
        description: { hi: 'शिकायत का प्राथमिक पंजीकरण और संदर्भ संख्या जनरेट हुई।', en: 'Initial registration and reference number generated.' },
      },
      {
        step: '02',
        title: { hi: 'प्राथमिक समीक्षा', en: 'Initial Review' },
        date: '18 अगस्त 2026',
        completed: true,
        active: false,
        description: { hi: 'जांच समिति द्वारा साक्ष्यों की वैधता की जांच की गई।', en: 'Evidentiary validity reviewed by assessment panel.' },
      },
      {
        step: '03',
        title: { hi: 'सघन जांच जारी', en: 'Under Investigation' },
        date: '25 अगस्त 2026',
        completed: false,
        active: true,
        description: { hi: 'क्षेत्रीय अधिकारियों एवं वित्तीय अभिलेखों का सत्यापन जारी है।', en: 'On-site audit and financial documentation verification underway.' },
      },
      {
        step: '04',
        title: { hi: 'अनुशासनात्मक कार्रवाई', en: 'Action Taken' },
        date: 'लंबित',
        completed: false,
        active: false,
        description: { hi: 'जांच रिपोर्ट के आधार पर कार्रवाई निष्पादित की जाएगी।', en: 'Institutional action based on investigation findings.' },
      },
      {
        step: '05',
        title: { hi: 'मामला निस्तारित', en: 'Case Closed' },
        date: 'लंबित',
        completed: false,
        active: false,
        description: { hi: 'अंतिम रिपोर्ट सार्वजनिक पोर्टल पर प्रकाशित होगी।', en: 'Final report published on transparency portal.' },
      },
    ],
  },
  'CFS-DEMO-002': {
    id: 'CFS-DEMO-002',
    category: { hi: 'खाद्य एवं नागरिक आपूर्ति / राशन धांधली', en: 'Civil Supplies / Ration Irregularity' },
    department: { hi: 'खाद्य एवं नागरिक आपूर्ति विभाग', en: 'Department of Food & Civil Supplies' },
    dateSubmitted: '2026-08-20',
    status: 'action_taken',
    isAnonymous: true,
    summary: {
      hi: 'सार्वजनिक वितरण प्रणाली में खाद्यान्न का अवैध विपणन एवं कालाबाजारी।',
      en: 'Illegal diversion and black-marketing of foodgrains in Public Distribution System.',
    },
    timeline: [
      {
        step: '01',
        title: { hi: 'शिकायत दर्ज हुई (गोपनीय)', en: 'Complaint Received (Confidential)' },
        date: '20 अगस्त 2026',
        completed: true,
        active: false,
        description: { hi: 'गोपनीय चैनल से शिकायत दर्ज हुई।', en: 'Received via confidential reporting stream.' },
      },
      {
        step: '02',
        title: { hi: 'प्राथमिक समीक्षा', en: 'Initial Review' },
        date: '22 अगस्त 2026',
        completed: true,
        active: false,
        description: { hi: 'स्टॉक रजिस्ट्रार एवं डिपो रिकॉर्ड्स का मिलान किया गया।', en: 'Stock register and depot logs cross-checked.' },
      },
      {
        step: '03',
        title: { hi: 'सघन जांच', en: 'Investigation' },
        date: '28 अगस्त 2026',
        completed: true,
        active: false,
        description: { hi: 'आकस्मिक निरीक्षण में अनिमितता की पुष्टि हुई।', en: 'Surprise inspection verified stock discrepancies.' },
      },
      {
        step: '04',
        title: { hi: 'कार्रवाई की गई', en: 'Action Taken' },
        date: '02 सितंबर 2026',
        completed: true,
        active: true,
        description: { hi: 'संबद्ध लाइसेंस रद्द एवं प्राथमिकी (FIR) दर्ज।', en: 'License cancelled and FIR registered against violators.' },
      },
      {
        step: '05',
        title: { hi: 'मामला निस्तारित', en: 'Case Closed' },
        date: '05 सितंबर 2026',
        completed: true,
        active: false,
        description: { hi: 'सार्वजनिक खाद्य सुरक्षा बहाली सुनिश्चित की गई।', en: 'Public distribution audit compliance restored.' },
      },
    ],
  },
};
