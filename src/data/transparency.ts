export interface BudgetItem {
  id: string;
  sector: { hi: string; en: string };
  allocated: string;
  spent: string;
  transparencyScore: string;
  status: { hi: string; en: string };
}

export interface TenderItem {
  id: string;
  title: { hi: string; en: string };
  department: { hi: string; en: string };
  value: string;
  publishDate: string;
  closingDate: string;
  status: { hi: string; en: string };
}

export interface AssetItem {
  id: string;
  officialName: { hi: string; en: string };
  designation: { hi: string; en: string };
  declarationYear: string;
  movableAssets: string;
  immovableAssets: string;
  verifiedStatus: { hi: string; en: string };
}

export const transparencyData = {
  budgets: [
    { id: 'B-01', sector: { hi: 'ग्रामीण विकास एवं पंचायत', en: 'Rural Development & Panchayat' }, allocated: '₹4,250 Cr', spent: '₹3,890 Cr', transparencyScore: '92%', status: { hi: 'सत्यापित / ऑडिट पूर्ण', en: 'Verified / Audit Complete' } },
    { id: 'B-02', sector: { hi: 'लोक निर्माण (सड़क एवं पुल)', en: 'Public Works (Roads & Bridges)' }, allocated: '₹6,100 Cr', spent: '₹5,400 Cr', transparencyScore: '86%', status: { hi: 'समीक्षाधीन', en: 'Under Review' } },
    { id: 'B-03', sector: { hi: 'स्वास्थ्य एवं परिवार कल्याण', en: 'Health & Family Welfare' }, allocated: '₹3,800 Cr', spent: '₹3,450 Cr', transparencyScore: '95%', status: { hi: 'सत्यापित / पारदर्शी', en: 'Verified / Transparent' } },
    { id: 'B-04', sector: { hi: 'शिक्षा एवं कौशल विकास', en: 'Education & Skill Development' }, allocated: '₹5,200 Cr', spent: '₹4,910 Cr', transparencyScore: '94%', status: { hi: 'सत्यापित / पारदर्शी', en: 'Verified / Transparent' } },
  ] as BudgetItem[],

  tenders: [
    { id: 'TND-2026-089', title: { hi: 'स्मार्ट सिटी सीसीटीव्ही निगरानी तंत्र निविदा', en: 'Smart City CCTV Surveillance System Tender' }, department: { hi: 'गृह एवं पुलिस प्रशासन', en: 'Home & Police Administration' }, value: '₹48.5 Cr', publishDate: '01 Aug 2026', closingDate: '30 Aug 2026', status: { hi: 'पारदर्शी आवंटन पूर्ण', en: 'Transparent Allocation Complete' } },
    { id: 'TND-2026-092', title: { hi: 'जिला अस्पताल सौर ऊर्जा संयंत्र स्थापना', en: 'District Hospital Solar Power Plant Erection' }, department: { hi: 'नवीन एवं नवकरणीय ऊर्जा', en: 'Renewable Energy Department' }, value: '₹12.2 Cr', publishDate: '10 Aug 2026', closingDate: '10 Sep 2026', status: { hi: 'तकनीकी मूल्यांकन जारी', en: 'Technical Evaluation Active' } },
    { id: 'TND-2026-104', title: { hi: 'राज्य जल जीवन मिशन पाइपलाइन विस्तार', en: 'State Jal Jeevan Mission Pipeline Expansion' }, department: { hi: 'लोक स्वास्थ्य यांत्रिकी (PHED)', en: 'Public Health Engineering' }, value: '₹85.0 Cr', publishDate: '15 Aug 2026', closingDate: '15 Sep 2026', status: { hi: 'खुली बोली प्रक्रिया', en: 'Open Bidding Phase' } },
  ] as TenderItem[],

  assets: [
    { id: 'AST-01', officialName: { hi: 'श्री राजेश कुमार शर्मा', en: 'Shri Rajesh Kumar Sharma' }, designation: { hi: 'मुख्य अभियंता, PWD', en: 'Chief Engineer, PWD' }, declarationYear: '2025-2026', movableAssets: '₹42.5 लाख', immovableAssets: '₹1.20 करोड़', verifiedStatus: { hi: 'सार्वजनिक सत्यापन पूर्ण', en: 'Public Audit Verified' } },
    { id: 'AST-02', officialName: { hi: 'श्रीमती अनीता वर्मा', en: 'Smt. Anita Verma' }, designation: { hi: 'निदेशक, खाद्य सुरक्षा', en: 'Director, Food Safety' }, declarationYear: '2025-2026', movableAssets: '₹28.0 लाख', immovableAssets: '₹85.0 लाख', verifiedStatus: { hi: 'सार्वजनिक सत्यापन पूर्ण', en: 'Public Audit Verified' } },
    { id: 'AST-03', officialName: { hi: 'डॉ. विक्रम सिंह', en: 'Dr. Vikram Singh' }, designation: { hi: 'अधीक्षक, राज्य चिकित्सालय', en: 'Superintendent, State Hospital' }, declarationYear: '2025-2026', movableAssets: '₹35.2 लाख', immovableAssets: '₹95.0 लाख', verifiedStatus: { hi: 'अभिलेख अद्यतन', en: 'Record Updated' } },
  ] as AssetItem[],
};
