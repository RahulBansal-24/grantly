import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ShieldCheck, Database, HardDrive, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 text-sm mt-auto border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand & Mission */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white font-black">
                <GraduationCap size={18} />
              </div>
              <span className="text-xl font-black text-white tracking-tight">GRANTLY</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Discover opportunities. Know where you stand. Fund your future. A transparent, deterministic scholarship eligibility platform.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-navy-900 border border-navy-800 text-[11px] text-emerald-400">
              <ShieldCheck size={14} />
              <span>Zero AI Hallucinations • 100% Deterministic</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/discover" className="hover:text-white transition-colors">
                  Discover All Opportunities
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition-colors">
                  Personalized Dashboard
                </Link>
              </li>
              <li>
                <Link to="/applications" className="hover:text-white transition-colors">
                  Application Management
                </Link>
              </li>
              <li>
                <Link to="/onboarding" className="hover:text-white transition-colors">
                  Student Profile Wizard
                </Link>
              </li>
              <li>
                <Link to="/settings" className="hover:text-white transition-colors">
                  Data Privacy & Backup
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Data Provenance & Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">Verified Sources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://scholarships.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>National Scholarship Portal (NSP)</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.myscheme.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>myScheme Portal (MeitY)</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://data.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Open Government Data India</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://ssp.postmatric.karnataka.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>State Scholarship Portals</span>
                  <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Local Storage & Privacy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Privacy & Architecture</h4>
            <div className="p-3 bg-navy-900/60 rounded-xl border border-navy-800 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-200 font-semibold text-[11px]">
                <HardDrive size={13} className="text-indigo-400" />
                <span>Client-Side IndexedDB</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Your guest profile and documents checklist are stored locally in your browser. No mandatory login required.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} GRANTLY — THE OUTPOST Hackathon. Built for student educational equity.</p>
          <div className="flex items-center gap-4">
            <Link to="/settings" className="hover:text-slate-400">Data Management</Link>
            <span>•</span>
            <span className="text-slate-400">PWA Offline Capable</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
