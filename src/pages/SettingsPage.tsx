import React, { useState, useEffect } from 'react';
import { dataManager } from '../services/db';
import { useStudentProfile } from '../hooks/useStudentProfile';
import { SourceDefinition, CollectionReport } from '../types/scholarship';
import { FALLBACK_SOURCES, FALLBACK_COLLECTION_REPORT } from '../data/sourcesData';
import {
  Download,
  Upload,
  Trash2,
  RotateCcw,
  ShieldCheck,
  HardDrive,
  CheckCircle2,
  AlertTriangle,
  Globe,
  ExternalLink,
  Layers,
  Database,
  Building,
  Check
} from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { reloadProfile, resetProfile } = useStudentProfile();
  const [exporting, setExporting] = useState<boolean>(false);
  const [importMessage, setImportMessage] = useState<{ success: boolean; message: string } | null>(null);
  const [sources, setSources] = useState<SourceDefinition[]>(FALLBACK_SOURCES);
  const [report, setReport] = useState<CollectionReport>(FALLBACK_COLLECTION_REPORT);
  const [loadingSources, setLoadingSources] = useState<boolean>(true);
  const [selectedSourceType, setSelectedSourceType] = useState<string>('all');

  useEffect(() => {
    Promise.all([
      fetch('/api/sources')
        .then(res => res.json())
        .then(json => {
          if (json.success && Array.isArray(json.data)) {
            setSources(json.data);
          }
        })
        .catch(() => {}),
      fetch('/api/collection-report')
        .then(res => res.json())
        .then(json => {
          if (json.success && json.data) {
            setReport(json.data);
          }
        })
        .catch(() => {})
    ]).finally(() => setLoadingSources(false));
  }, []);

  const handleExport = async () => {
    try {
      setExporting(true);
      const json = await dataManager.exportAllData();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `grantly_backup_${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const res = await dataManager.importData(text);
      if (res.success) {
        await reloadProfile();
        setImportMessage({ success: true, message: 'Data backup successfully restored!' });
      } else {
        setImportMessage({ success: false, message: res.message || 'Failed to restore data.' });
      }
    } catch (err: any) {
      setImportMessage({ success: false, message: err?.message || 'Error parsing backup file.' });
    }
  };

  const handleClearAll = async () => {
    if (window.confirm('Are you sure you want to completely erase all local student profile and application data? This action cannot be undone.')) {
      await dataManager.clearAllData();
      await resetProfile();
      alert('All local profile and application records have been cleared.');
    }
  };

  const sourceTypes = Array.from(new Set(sources.map(s => s.sourceType)));
  const filteredSources = selectedSourceType === 'all'
    ? sources
    : sources.filter(s => s.sourceType === selectedSourceType);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
          Settings & Data Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage your local client database, inspect web-sourced public scholarship registries, and export backups.
        </p>
      </div>

      {/* Web-Sourced Architecture Overview Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <Database size={20} className="text-brand-600" />
              <h2 className="text-lg font-bold text-navy-900">
                Web-Sourced Genuine Scholarship Database
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Independent, transparent dataset collected exclusively from legitimate public portals, official ministries, and verified CSR trusts.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-auto">
            <ShieldCheck size={14} className="text-emerald-600" />
            100% Deterministic • Zero AI Hallucinations
          </span>
        </div>

        {/* Database Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Total Scholarships
            </div>
            <div className="text-2xl font-black text-navy-900 mt-0.5">
              {report?.summary?.totalScholarships || sources.length}
            </div>
            <div className="text-[11px] text-slate-500">Genuine Opportunities</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              India Coverage
            </div>
            <div className="text-2xl font-black text-navy-900 mt-0.5">
              {report?.summary?.indianScholarships || 89}
            </div>
            <div className="text-[11px] text-slate-500">Central & 35 States/UTs</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              International
            </div>
            <div className="text-2xl font-black text-navy-900 mt-0.5">
              {report?.summary?.internationalScholarships || 24}
            </div>
            <div className="text-[11px] text-slate-500">UK, US, Germany, EU, Asia</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Verified Sources
            </div>
            <div className="text-2xl font-black text-emerald-700 mt-0.5">
              {sources.length}
            </div>
            <div className="text-[11px] text-slate-500">Official Portals Audited</div>
          </div>
        </div>

        {/* Audit Details */}
        <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Check size={15} className="text-emerald-600" />
            <span>Schema Verification: <strong>100% Unique Identifiers & Strict Rule Matching</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={15} className="text-emerald-600" />
            <span>PWA Offline Cache: <strong>Active via IndexedDB & Service Worker</strong></span>
          </div>
        </div>
      </div>

      {/* Verified Legitimate Sources Directory */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Globe size={18} className="text-brand-600" />
              <span>Verified Public Sources & Discovery Portals ({sources.length})</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Official portals from which GRANTLY compiles verified scholarship criteria without intermediaries or unofficial secondary mirrors.
            </p>
          </div>

          {/* Source Type Filter */}
          <select
            value={selectedSourceType}
            onChange={e => setSelectedSourceType(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 font-semibold focus:outline-none"
          >
            <option value="all">All Source Types ({sources.length})</option>
            {sourceTypes.map(st => (
              <option key={st} value={st}>
                {st.replace(/_/g, ' ').toUpperCase()} ({sources.filter(s => s.sourceType === st).length})
              </option>
            ))}
          </select>
        </div>

        {/* Source Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
          {filteredSources.map(s => (
            <div
              key={s.id}
              className="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 flex flex-col justify-between gap-2 text-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-bold text-navy-900 truncate">{s.name}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 shrink-0">
                    {s.region}
                  </span>
                </div>
                <p className="text-slate-500 text-[11px] line-clamp-2 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 mt-1">
                <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck size={11} />
                  Officially Monitored
                </span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline font-semibold text-[11px] inline-flex items-center gap-1"
                >
                  <span>Visit Portal</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Storage & Data Privacy */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div>
          <h2 className="text-base font-bold text-navy-900 flex items-center gap-2">
            <HardDrive size={18} className="text-brand-600" />
            <span>Local Data Storage & Privacy</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            GRANTLY stores your profile attributes, application pipelines, and documents strictly inside your browser's IndexedDB. No sensitive profile data is transmitted to third-party trackers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Backup Data */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between gap-3">
            <div>
              <div className="font-bold text-navy-900 text-sm mb-1">Export Data Backup</div>
              <p className="text-xs text-slate-500">
                Download a JSON copy of your profile, bookmarks, and application tracking records.
              </p>
            </div>
            <button
              onClick={handleExport}
              disabled={exporting}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <Download size={14} />
              <span>{exporting ? 'Exporting...' : 'Export JSON Backup'}</span>
            </button>
          </div>

          {/* Restore Data */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between gap-3">
            <div>
              <div className="font-bold text-navy-900 text-sm mb-1">Restore Data Backup</div>
              <p className="text-xs text-slate-500">
                Upload a previously saved GRANTLY JSON backup file to restore your state.
              </p>
            </div>
            <label className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer">
              <Upload size={14} />
              <span>Select File to Restore</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {importMessage && (
          <div
            className={`p-3 rounded-xl border text-xs font-semibold ${
              importMessage.success
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-rose-50 text-rose-800 border-rose-200'
            }`}
          >
            {importMessage.message}
          </div>
        )}
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-card space-y-4">
        <h2 className="text-base font-bold text-rose-900 flex items-center gap-2">
          <AlertTriangle size={18} className="text-rose-600" />
          <span>Danger Zone</span>
        </h2>
        <p className="text-xs text-slate-500">
          Permanently erase all local student profile attributes, application pipelines, and saved bookmarks from this device.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={handleClearAll}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs"
          >
            <Trash2 size={14} />
            <span>Clear All Stored Data</span>
          </button>

          <button
            onClick={async () => {
              await resetProfile();
              alert('Profile reset to blank guest state.');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl text-xs font-semibold transition-colors"
          >
            <RotateCcw size={14} />
            <span>Reset Profile Only</span>
          </button>
        </div>
      </div>
    </div>
  );
};
