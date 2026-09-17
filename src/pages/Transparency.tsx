import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { transparencyData } from '../data/transparency';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Eye, DollarSign, FileSpreadsheet, Award, CheckCircle2 } from 'lucide-react';

export const Transparency: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'budget' | 'tenders' | 'assets'>('budget');

  return (
    <div className="space-y-12">
      <Breadcrumb items={[{ label: t('nav.transparency') }]} />

      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-8 sm:p-12 space-y-4 border-b-4 border-amber-500 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/40 rounded text-xs font-bold text-amber-300">
            <Eye className="w-4 h-4 text-amber-400" />
            <span>{t('transparency.title')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            {t('transparency.title')}
          </h1>

          <p className="text-base text-slate-300 font-sans leading-relaxed max-w-3xl">
            {t('transparency.subtitle')}
          </p>
        </div>
      </section>

      {/* MAIN DATA TABLES & TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16">
        
        {/* TAB NAVIGATION */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
          <button
            onClick={() => setActiveTab('budget')}
            className={`px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 ${
              activeTab === 'budget' ? 'bg-blue-950 text-amber-400 shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>{t('transparency.budgetTab')}</span>
          </button>

          <button
            onClick={() => setActiveTab('tenders')}
            className={`px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 ${
              activeTab === 'tenders' ? 'bg-blue-950 text-amber-400 shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>{t('transparency.tendersTab')}</span>
          </button>

          <button
            onClick={() => setActiveTab('assets')}
            className={`px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 ${
              activeTab === 'assets' ? 'bg-blue-950 text-amber-400 shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>{t('transparency.assetsTab')}</span>
          </button>
        </div>

        {/* TAB 1: BUDGET TABLE */}
        {activeTab === 'budget' && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm animate-in fade-in duration-200">
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <h3 className="text-base font-bold text-white uppercase flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-400" />
                <span>{t('transparency.budgetTab')}</span>
              </h3>
              <span className="text-xs font-mono text-amber-400">FY 2025-2026</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-4">{t('transparency.tableSector')}</th>
                    <th className="p-4">{t('transparency.tableAllocated')}</th>
                    <th className="p-4">{t('transparency.tableSpent')}</th>
                    <th className="p-4">{t('transparency.tableScore')}</th>
                    <th className="p-4">{t('transparency.tableStatus')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-sans">
                  {transparencyData.budgets.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-900">{item.sector[language]}</td>
                      <td className="p-4 font-mono font-bold text-blue-900">{item.allocated}</td>
                      <td className="p-4 font-mono font-bold text-emerald-700">{item.spent}</td>
                      <td className="p-4 font-mono font-bold text-amber-600">{item.transparencyScore}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{item.status[language]}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: TENDERS TABLE */}
        {activeTab === 'tenders' && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm animate-in fade-in duration-200">
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
              <h3 className="text-base font-bold text-white uppercase flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-amber-400" />
                <span>{t('transparency.tendersTab')}</span>
              </h3>
              <span className="text-xs font-mono text-amber-400">OPEN TENDERS REGISTER</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Tender ID</th>
                    <th className="p-4">Title / Description</th>
                    <th className="p-4">Department</th>
                    <th className="p-4">Value</th>
                    <th className="p-4">Closing Date</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-sans">
                  {transparencyData.tenders.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="p-4 font-mono font-bold text-blue-950">{item.id}</td>
                      <td className="p-4 font-bold text-slate-900 max-w-xs">{item.title[language]}</td>
                      <td className="p-4 text-slate-600">{item.department[language]}</td>
                      <td className="p-4 font-mono font-bold text-blue-900">{item.value}</td>
                      <td className="p-4 font-mono text-slate-600">{item.closingDate}</td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-100 text-amber-900 rounded font-bold text-[11px]">
                          <span>{item.status[language]}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: ASSET DECLARATIONS GRID */}
        {activeTab === 'assets' && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-6 space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-base font-bold text-blue-950 uppercase flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                <span>{t('transparency.assetsTab')}</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">PUBLIC VERIFIED AUDIT</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {transparencyData.assets.map((item) => (
                <div key={item.id} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-amber-600 font-bold uppercase">{item.declarationYear}</span>
                    <h4 className="text-base font-bold text-slate-900">{item.officialName[language]}</h4>
                    <p className="text-xs text-slate-500 font-semibold">{item.designation[language]}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Movable Assets:</span>
                      <span className="font-bold text-blue-950">{item.movableAssets}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Immovable Assets:</span>
                      <span className="font-bold text-blue-950">{item.immovableAssets}</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.verifiedStatus[language]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>
    </div>
  );
};
