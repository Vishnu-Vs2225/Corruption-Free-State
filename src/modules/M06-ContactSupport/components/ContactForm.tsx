import React, { useState } from 'react';
import { StaticFormNotice } from './StaticFormNotice';
import { useLanguage } from '../../../i18n/LanguageContext';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm font-sans">
      <div className="space-y-1 border-b border-slate-200 pb-3">
        <h3 className="text-xl font-black text-blue-950 uppercase">
          {language === 'hi' ? 'सामान्य पूछताछ फ़ॉर्म' : 'General Enquiry Form'}
        </h3>
        <p className="text-xs text-slate-500 font-sans">
          {language === 'hi' ? 'सामान्य प्रश्न या जानकारी हेतु संदेश लिखें।' : 'Have a question? Write your message below.'}
        </p>
      </div>

      <StaticFormNotice />

      {submitted ? (
        <div className="p-8 bg-slate-50 border border-slate-300 rounded-2xl text-center space-y-4 font-sans animate-in fade-in duration-200">
          <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto" />
          <h4 className="text-lg font-bold text-slate-900">
            {language === 'hi' ? 'डेमो प्रविष्टि स्थानीय रूप से प्राप्त' : 'Demo Entry Received Locally'}
          </h4>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            {language === 'hi'
              ? 'यह एक स्टैटिक डेमो फ़ॉर्म है। कोई डेटा सर्वर पर नहीं भेजा गया। आपातकालीन अथवा त्वरित पूछताछ के लिए हेल्पलाइन 9973076434 पर कॉल करें।'
              : 'This is a static demo form. No data was transmitted to a server. For immediate assistance, call helpline 9973076434.'}
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-amber-400 text-xs font-bold font-mono uppercase rounded-xl transition-colors"
          >
            {language === 'hi' ? 'नया संदेश लिखें' : 'Write Another Message'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="contact-name" className="text-xs font-bold text-slate-800 uppercase block">
                {language === 'hi' ? 'आपका नाम *' : 'Your Name *'}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === 'hi' ? 'अपना पूरा नाम दर्ज करें' : 'Enter your full name'}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs outline-none focus:border-blue-900 focus:bg-white"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="contact-info" className="text-xs font-bold text-slate-800 uppercase block">
                {language === 'hi' ? 'फोन / ईमेल *' : 'Phone / Email *'}
              </label>
              <input
                id="contact-info"
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={language === 'hi' ? 'फोन नंबर या ईमेल दर्ज करें' : 'Enter phone or email address'}
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs outline-none focus:border-blue-900 focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="contact-subject" className="text-xs font-bold text-slate-800 uppercase block">
              {language === 'hi' ? 'विषय (Subject) *' : 'Subject *'}
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={language === 'hi' ? 'पूछताछ का विषय...' : 'Enter inquiry topic...'}
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs outline-none focus:border-blue-900 focus:bg-white"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="contact-message" className="text-xs font-bold text-slate-800 uppercase block">
              {language === 'hi' ? 'संदेश (Message) *' : 'Message *'}
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={language === 'hi' ? 'अपना संदेश यहाँ लिखें...' : 'Write your message here...'}
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs outline-none focus:border-blue-900 focus:bg-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>{language === 'hi' ? 'संदेश प्रस्तुत करें (Demo Submit)' : 'Submit Enquiry (Demo UI)'}</span>
            <Send className="w-4 h-4 text-amber-400" />
          </button>
        </form>
      )}
    </div>
  );
};
