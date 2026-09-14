import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { organizationData } from '../data/organization';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12">
      <Breadcrumb items={[{ label: t('nav.contact') }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{t('contact.title')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('contact.title')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: OFFICIAL CONTACT DETAILS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t('contact.helplineTitle')}</h3>
                  <span className="text-[11px] text-slate-500 font-mono">24x7 ASSISTANCE</span>
                </div>
              </div>

              <div className="space-y-1 text-sm font-mono font-bold text-blue-950 pt-2 border-t border-slate-100">
                <div>
                  <a href={`tel:${organizationData.phones[0]}`} className="hover:text-amber-600 underline">
                    {organizationData.phones[0]}
                  </a>
                </div>
                <div>
                  <a href={`tel:${organizationData.phones[1]}`} className="hover:text-amber-600 underline">
                    {organizationData.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t('contact.emailTitle')}</h3>
                  <span className="text-[11px] text-slate-500 font-mono">OFFICIAL MAIL</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 font-mono font-bold text-blue-950 text-sm">
                <a href={`mailto:${organizationData.email}`} className="hover:text-amber-600 underline">
                  {organizationData.email}
                </a>
              </div>
            </div>

            {/* Office Addresses Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm text-xs font-sans">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{t('contact.officeTitle')}</h3>
                  <span className="text-[11px] text-slate-500 font-mono">REGISTRATION: 1597/210/2026</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div>
                  <strong className="block text-slate-900 mb-0.5">{t('contact.officeTitle')}:</strong>
                  <p className="text-slate-600 leading-relaxed">{organizationData.officeAddressBilingual[language]}</p>
                </div>
                <div>
                  <strong className="block text-slate-900 mb-0.5">{t('contact.residentialTitle')}:</strong>
                  <p className="text-slate-600 leading-relaxed">{organizationData.residentialAddressBilingual[language]}</p>
                </div>
              </div>
            </div>

            {/* WHATSAPP CTA BUTTON */}
            <a
              href={`https://api.whatsapp.com/send?phone=91${organizationData.phones[0]}&text=${encodeURIComponent(language === 'hi' ? 'नमस्कार, मुझे भ्रष्टाचार शिकायत संबंधी जानकारी चाहिए।' : 'Hello, I need information regarding corruption reporting.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>{t('contact.whatsappBtn')}</span>
            </a>

          </div>

          {/* RIGHT: CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-blue-950 uppercase border-b border-slate-200 pb-3">
                {t('contact.formTitle')}
              </h2>

              {submitted ? (
                <div className="py-12 text-center space-y-4 bg-slate-50 border border-emerald-300 rounded-xl">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">{t('contact.demoResponse')}</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto font-sans">
                    {language === 'hi'
                      ? 'यह एक static/demo संपर्क फॉर्म है। आपकी प्रविष्टि स्थानीय रूप से प्राप्त हुई।'
                      : 'This is a static demonstration contact form. Entry received locally.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-blue-950 text-white text-xs font-bold uppercase rounded"
                  >
                    {language === 'hi' ? 'नया संदेश भेजें' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase block">{t('complaint.nameLabel')} *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t('complaint.namePlaceholder')}
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs outline-none focus:border-blue-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase block">{t('complaint.emailLabel')} *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs outline-none focus:border-blue-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase block">Subject / विषय *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Enter inquiry topic..."
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs outline-none focus:border-blue-900"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 uppercase block">Message / संदेश *</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message..."
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-xs outline-none focus:border-blue-900 resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{t('contact.sendBtn')}</span>
                    <Send className="w-4 h-4 text-amber-400" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
