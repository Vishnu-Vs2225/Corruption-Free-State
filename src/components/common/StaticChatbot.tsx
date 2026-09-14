import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { X, Bot, HelpCircle } from 'lucide-react';

interface PredefinedQA {
  id: string;
  q: { hi: string; en: string };
  a: { hi: string; en: string };
}

const QUICK_QUESTIONS: PredefinedQA[] = [
  {
    id: '1',
    q: { hi: 'भ्रष्टाचार की शिकायत कैसे दर्ज करें?', en: 'How to report corruption?' },
    a: {
      hi: 'पोर्टल के "शिकायत दर्ज करें" पेज पर जाकर आप गोपनीय (गुमनाम) या साक्ष्य सहित शिकायत दर्ज कर सकते हैं।',
      en: 'Navigate to the "Report Corruption" page where you can lodge confidential or evidence-backed complaints.',
    },
  },
  {
    id: '2',
    q: { hi: 'शिकायत की प्रगति कैसे ट्रैक करें?', en: 'How to track complaint status?' },
    a: {
      hi: 'शिकायत दर्ज होने पर प्राप्त संदर्भ संख्या (जैसे CFS-DEMO-001) को "ट्रैक शिकायत" पेज पर दर्ज करके स्थिति देखें।',
      en: 'Use your assigned Reference ID (e.g. CFS-DEMO-001) on the "Track Complaint" page to view progress timelines.',
    },
  },
  {
    id: '3',
    q: { hi: 'क्या मेरी पहचान सुरक्षित रहेगी?', en: 'Will my identity remain confidential?' },
    a: {
      hi: 'हाँ, व्हिसलब्लोअर संरक्षण कानून के तहत शिकायतकर्ता की पहचान पूरी तरह से गुप्त रखी जाती है।',
      en: 'Yes, under Whistleblower protection legal frameworks, complainant identity is strictly safeguarded.',
    },
  },
  {
    id: '4',
    q: { hi: 'हेल्पलाइन नंबर क्या हैं?', en: 'What are the helpline numbers?' },
    a: {
      hi: 'आधिकारिक सहायता हेतु 9973076434 एवं 9110067384 पर संपर्क करें।',
      en: 'For direct assistance, call helpline numbers: 9973076434 or 9110067384.',
    },
  },
];

export const StaticChatbot: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string }[]>([
    {
      sender: 'bot',
      text:
        language === 'hi'
          ? 'नमस्कार! मैं भ्रष्टाचार मुक्त राज्य का प्री-डिफाइंड सहायता बोट हूँ। कृपया नीचे दिए गए प्रश्नों में से चुनें:'
          : 'Hello! I am the predefined assistance assistant. Please select a quick question below:',
    },
  ]);

  const handleSelectQA = (item: PredefinedQA) => {
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: item.q[language] },
      { sender: 'bot', text: item.a[language] },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* CHATBOT TOGGLE BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-slate-900"
          aria-label="Open Citizen Assistance Bot"
        >
          <Bot className="w-5 h-5 text-slate-950" />
          <span>{language === 'hi' ? 'नागरिक सहायता सहायक' : 'Citizen Assistant'}</span>
        </button>
      )}

      {/* CHATBOT WINDOW */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white border-2 border-slate-900 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[460px] animate-in slide-in-from-bottom duration-300">
          
          {/* HEADER */}
          <div className="bg-blue-950 text-white p-3.5 flex items-center justify-between border-b border-blue-900">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-amber-500 text-slate-950 rounded-full">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-tight">
                  {language === 'hi' ? 'नागरिक सहायता सहायिका (Static Bot)' : 'Predefined Assistance Bot'}
                </h4>
                <span className="text-[10px] text-amber-400 font-semibold block">
                  {language === 'hi' ? 'पूर्व-निर्धारित प्रश्नोत्तरी' : 'Predefined FAQ Assistant'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-300 hover:text-white rounded"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CHAT MESSAGES BODY */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto bg-slate-50 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-2.5 rounded-lg font-sans leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-blue-900 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* PREDEFINED QUESTIONS SELECTOR */}
          <div className="p-2.5 bg-white border-t border-slate-200 space-y-1.5">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-amber-600" />
              <span>{language === 'hi' ? 'त्वरित प्रश्न चुनें:' : 'Select a quick question:'}</span>
            </div>

            <div className="grid grid-cols-1 gap-1 max-h-32 overflow-y-auto">
              {QUICK_QUESTIONS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectQA(item)}
                  className="text-left text-[11px] font-medium p-1.5 bg-slate-100 hover:bg-amber-100 text-slate-800 rounded border border-slate-200 transition-colors truncate"
                >
                  ➔ {item.q[language]}
                </button>
              ))}
            </div>
          </div>

          {/* FOOTER NOTICE */}
          <div className="bg-slate-900 text-slate-400 p-2 text-[10px] text-center border-t border-slate-800">
            {language === 'hi' ? 'यह एक ऑटोमेटेड static सहायता टूल है।' : 'Predefined FAQ guide — no AI server required.'}
          </div>

        </div>
      )}
    </div>
  );
};
