import React, { useState, useEffect } from 'react';
import { dataManager } from '../services/db';
import { useStudentProfile } from '../hooks/useStudentProfile';
import {
  Download,
  Upload,
  Trash2,
  RotateCcw,
  ShieldCheck,
  HardDrive,
  CheckCircle2,
  AlertTriangle,
  Server,
  Zap,
  ExternalLink
} from 'lucide-react';

interface ProviderStatus {
  id: string;
  name: string;
  isConfigured: boolean;
  isLiveAvailable: boolean;
  statusMessage: string;
  officialDocUrl: string;
}

export const SettingsPage: React.FC = () => {
  const { reloadProfile, resetProfile } = useStudentProfile();
  const [exporting, setExporting] = useState<boolean>(false);
  const [importMessage, setImportMessage] = useState<{ success: boolean; message: string } | null>(null);
  const [providers, setProviders] = useState<ProviderStatus[]>([]);
  const [loadingProviders, setLoadingProviders] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/providers/status')
      .then(res => res.json())
      .then(json => {
        if (json.success && Array.isArray(json.data)) {
          setProviders(json.data);
        }
      })
      .catch(() => {
        // Fallback default status display if offline
        setProviders([
          {
            id: 'myscheme-apisetu',
            name: 'myScheme (via API Setu)',
            isConfigured: false,
            isLiveAvailable: false,
            statusMessage: 'Operating on verified curated dataset. API Setu client registration required for live push.',
            officialDocUrl: 'https://docs.apisetu.gov.in/'
          },
          {
            id: 'datagov-india',
            name: 'Open Government Data (data.gov.in)',
            isConfigured: false,
            isLiveAvailable: false,
            statusMessage: 'Operating on verified curated dataset. Developer API key placeholder configured in .env.',
            officialDocUrl: 'https://data.gov.in/'
          },
          {
            id: 'nsp-portal',
            name: 'National Scholarship Portal (NSP)',
            isConfigured: false,
            isLiveAvailable: false,
            statusMessage: 'NSP public API restricted. Operating on official verified scheme dataset.',
            officialDocUrl: 'https://scholarships.gov.in/'
          },
          {
            id: 'buddy4study',
            name: 'Buddy4Study Partner Integration',
            isConfigured: false,
            isLiveAvailable: false,
            statusMessage: 'Partner feed integration adapter active with verified CSR scholarships fallback.',
            officialDocUrl: 'https://www.buddy4study.com/'
          },
          {
            id: 'state-schemes-unified',
            name: 'State Government Portals (SSP/MahaDBT/SVMCM)',
            isConfigured: false,
            isLiveAvailable: false,
            statusMessage: 'State gateway adapters ready. Operating on verified state domicile datasets.',
            officialDocUrl: 'https://ssp.postmatric.karnataka.gov.in/'
          }
        ]);
      })
      .finally(() => setLoadingProviders(false));
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
    } catch (err) {
      alert('Failed to export data.');
    } finally {
      setExporting(false);
    }
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target?.result as string;
      const res = await dataManager.importData(content);
      setImportMessage(res);
      if (res.success) {
        await reloadProfile();
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleClearAll = async () => {
    if (confirm('Are you sure you want to delete all locally stored profile, bookmarks, and application tracking data? This action cannot be undone.')) {
      await dataManager.clearAllData();
      await resetProfile();
      alert('All local data cleared successfully.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
          Settings & Data Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
          Control your local IndexedDB storage, export/import backups, and view API integration health.
        </p>
      </div>

      {/* Privacy Notice Box */}
      <div className="p-6 bg-gradient-to-br from-indigo-50/60 to-brand-50/40 rounded-3xl border border-brand-100 space-y-2">
        <div className="flex items-center gap-2 text-brand-900 font-bold text-sm">
          <HardDrive size={18} className="text-brand-600" />
          <span>Local Device Data Privacy</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          GRANTLY uses a guest-first, decentralized architecture. Your profile attributes, saved opportunities, notes, and document checklists are stored directly inside your browser’s <strong>IndexedDB</strong>. Your private data is never transmitted to any advertising network or third-party AI service.
        </p>
        <p className="text-[11px] text-slate-500">
          Note: Because data is stored on this device, it does not automatically synchronize across other devices unless you export your backup file below and import it on your other browser.
        </p>
      </div>

      {/* Data Backup & Restore */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <h2 className="text-base font-bold text-navy-900">Backup & Restore</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Export */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <Download size={16} className="text-brand-600" />
              <span>Export My Data</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Download a complete JSON snapshot containing your profile, saved bookmarks, notes, and application tracking records.
            </p>
            <button
              onClick={handleExport}
              disabled={exporting}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              <Download size={14} />
              <span>{exporting ? 'Generating JSON...' : 'Download JSON Backup'}</span>
            </button>
          </div>

          {/* Import */}
          <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3">
            <h3 className="text-sm font-bold text-navy-900 flex items-center gap-2">
              <Upload size={16} className="text-brand-600" />
              <span>Import Data</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Restore a previously exported GRANTLY backup JSON file onto this device or browser.
            </p>
            <label className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer">
              <Upload size={14} />
              <span>Upload Backup File</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportFile}
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

      {/* API Integrations Status */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-navy-900 flex items-center gap-2">
              <Server size={18} className="text-brand-600" />
              <span>Provider Integrations & Data Adapters</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Status of all 5 documented scholarship providers.
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          {providers.map(p => (
            <div
              key={p.id}
              className="p-4 rounded-2xl border border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-navy-900">{p.name}</span>
                  {p.isConfigured ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      <Zap size={10} /> Live Push Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      Verified Curated Fallback
                    </span>
                  )}
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  {p.statusMessage}
                </p>
              </div>

              <a
                href={p.officialDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-brand-600 hover:underline font-semibold text-xs inline-flex items-center gap-1"
              >
                <span>Docs</span>
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
