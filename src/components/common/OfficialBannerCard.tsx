import React from 'react';
import { organizationData } from '../../data/organization';
import { Phone, Mail, UserCheck } from 'lucide-react';

export const OfficialBannerCard: React.FC = () => {
  return (
    <div className="w-full bg-[#0b1442] text-white rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1e2b6e] font-sans">
      {/* HEADER SECTION */}
      <div className="p-6 sm:p-8 text-center space-y-3 relative bg-gradient-to-b from-[#0e184e] to-[#0b1442]">
        {/* Top Badges / Logos */}
        <div className="flex items-center justify-between gap-4">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400 bg-white p-1 shadow-lg shrink-0 flex items-center justify-center">
            <img src="/logo.png" alt="CFS Logo" className="w-full h-full object-contain rounded-full" />
          </div>

          <div className="text-center flex-1">
            <h2 className="text-3xl sm:text-5xl font-black text-amber-300 tracking-wider font-serif">
              कार्यालय
            </h2>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mt-1">
              CORRUPTION FREE <span className="text-emerald-500">STATE</span>
            </h1>
          </div>

          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400 bg-white p-1 shadow-lg shrink-0 flex items-center justify-center">
            <img src="/logo.png" alt="CFS Logo Right" className="w-full h-full object-contain rounded-full" />
          </div>
        </div>

        {/* Founder Tagline */}
        <div className="pt-2 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-amber-400/10 border border-amber-400/40 rounded-full text-xs sm:text-sm font-extrabold text-amber-300 tracking-wide shadow-sm">
            <UserCheck className="w-4 h-4 text-amber-400" />
            <span>Founder / संस्थापक: {organizationData.founder} ({organizationData.founderHindi})</span>
          </div>
        </div>
      </div>

      {/* ADDRESSES SECTION */}
      <div className="px-6 sm:px-10 py-5 text-center space-y-3 bg-[#091035] border-t border-b border-[#1b2663]">
        {/* Office Address */}
        <div className="text-amber-300 font-bold text-base sm:text-xl leading-snug">
          <span className="underline decoration-amber-400">Office Adress :-</span> {organizationData.officeAddressBilingual.en}
        </div>

        {/* Residential Office Address */}
        <div className="text-amber-300 font-bold text-base sm:text-xl leading-snug">
          <span className="underline decoration-amber-400">Residential Office :-</span> {organizationData.residentialAddressBilingual.en}
        </div>
      </div>

      {/* CONTACT & SOCIAL SECTION */}
      <div className="p-6 sm:p-8 text-center space-y-4 bg-[#080d2d]">
        {/* Email */}
        <div className="text-white font-black text-lg sm:text-2xl tracking-wide flex items-center justify-center gap-2">
          <Mail className="w-6 h-6 text-amber-400" />
          <span>Email Id :- <a href={`mailto:${organizationData.email}`} className="hover:text-amber-300 underline">{organizationData.email}</a></span>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white font-extrabold text-base sm:text-xl">
          <a
            href={organizationData.socialHandles.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <span className="w-7 h-7 bg-blue-600 text-white font-black rounded-full flex items-center justify-center text-sm shadow">f</span>
            <span>{organizationData.socialHandles.facebook}</span>
          </a>

          <a
            href={organizationData.socialHandles.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
          >
            <span className="w-7 h-7 bg-slate-900 text-white font-black border border-slate-700 rounded-full flex items-center justify-center text-sm shadow">𝕏</span>
            <span>{organizationData.socialHandles.twitter}</span>
          </a>
        </div>

        {/* Registration Banner Pill */}
        <div className="pt-2">
          <div className="inline-block bg-[#160c38] text-white px-6 py-2 rounded-xl border border-purple-500/50 text-xl sm:text-3xl font-black font-mono tracking-widest shadow-inner">
            Reg : <span className="text-purple-300">{organizationData.registrationNumber}</span>
          </div>
        </div>
      </div>

      {/* RED HELPLINE STRIP */}
      <div className="bg-red-600 text-white py-3.5 px-4 sm:px-8 flex items-center justify-center gap-3 sm:gap-6 shadow-inner">
        <Phone className="w-7 h-7 sm:w-9 sm:h-9 text-white animate-pulse" />
        <div className="text-2xl sm:text-4xl md:text-5xl font-black font-mono tracking-wider text-white drop-shadow-md">
          <a href={`tel:${organizationData.phones[0]}`} className="hover:underline">{organizationData.phones[0]}</a>,{' '}
          <a href={`tel:${organizationData.phones[1]}`} className="hover:underline">{organizationData.phones[1]}</a>
        </div>
      </div>
    </div>
  );
};
