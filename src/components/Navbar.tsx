import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Compass,
  LayoutDashboard,
  Bookmark,
  FileText,
  User,
  Download,
  CheckCircle,
  Wifi,
  WifiOff,
  Menu,
  X,
  GraduationCap,
  Settings
} from 'lucide-react';
import { usePWA } from '../hooks/usePWA';
import { PwaInstallModal } from './PwaInstallModal';
import { useStudentProfile } from '../hooks/useStudentProfile';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isInstalled, isOnline, showIOSModal, setShowIOSModal, triggerInstall } = usePWA();
  const { completeness, profile } = useStudentProfile();
  const [installFeedback, setInstallFeedback] = useState<string | null>(null);

  const handleInstallClick = async () => {
    const result = await triggerInstall();
    if (!result.success && result.message) {
      setInstallFeedback(result.message);
      setTimeout(() => setInstallFeedback(null), 5000);
    }
  };

  const navLinks = [
    { to: '/discover', label: 'Discover', icon: <Compass size={18} /> },
    { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { to: '/applications', label: 'Applications', icon: <FileText size={18} /> },
    { to: '/saved', label: 'Saved', icon: <Bookmark size={18} /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-navy-900 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                  <GraduationCap size={20} className="transform -rotate-6" />
                </div>
                <div>
                  <span className="text-xl font-black tracking-tight text-navy-900 group-hover:text-brand-600 transition-colors">
                    GRANTLY
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map(link => {
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? 'bg-brand-50 text-brand-700 font-semibold shadow-xs'
                          : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                      }`}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              {/* Online/Offline status badge */}
              <div
                className={`hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                  isOnline
                    ? 'bg-slate-50 text-slate-600 border-slate-200'
                    : 'bg-amber-50 text-amber-800 border-amber-300'
                }`}
                title={isOnline ? 'Online mode active' : 'Offline mode active (using local database)'}
              >
                {isOnline ? (
                  <>
                    <Wifi size={13} className="text-emerald-500" />
                    <span>Live</span>
                  </>
                ) : (
                  <>
                    <WifiOff size={13} className="text-amber-600" />
                    <span>Offline</span>
                  </>
                )}
              </div>

              {/* MANDATORY PWA INSTALL BUTTON */}
              {isInstalled ? (
                <div
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs"
                  title="GRANTLY is installed on this device"
                >
                  <CheckCircle size={14} className="text-emerald-600" />
                  <span>Installed</span>
                </div>
              ) : (
                <button
                  onClick={handleInstallClick}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-brand-600 to-navy-900 hover:from-brand-500 hover:to-navy-800 text-white shadow-sm hover:shadow transition-all active:scale-95"
                  title="Install GRANTLY as a desktop/mobile Progressive Web App"
                  aria-label="Install GRANTLY PWA"
                >
                  <Download size={15} />
                  <span>Install GRANTLY</span>
                </button>
              )}

              {/* Profile Link */}
              <Link
                to="/profile"
                className={`flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                  isActive('/profile')
                    ? 'border-brand-300 bg-brand-50/80 text-brand-700'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs">
                  {profile.firstName ? profile.firstName.charAt(0).toUpperCase() : <User size={14} />}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-semibold leading-tight text-navy-900">
                    {profile.firstName || 'Guest Student'}
                  </div>
                  <div className="text-[10px] text-slate-500 leading-tight">
                    {completeness.score}% complete
                  </div>
                </div>
              </Link>

              {/* Settings icon */}
              <Link
                to="/settings"
                className="text-slate-500 hover:text-navy-900 p-2 rounded-xl hover:bg-slate-100 transition-colors"
                title="Settings & Data Management"
              >
                <Settings size={18} />
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-slate-600 hover:text-navy-900 p-2 rounded-xl hover:bg-slate-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg">
            {navLinks.map(link => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium ${
                    active
                      ? 'bg-brand-50 text-brand-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/onboarding"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2 px-3 rounded-xl bg-brand-50 text-brand-700 font-semibold text-sm"
              >
                Profile Setup Wizard
              </Link>
              {!isInstalled && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleInstallClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-navy-900 text-white font-medium text-sm"
                >
                  <Download size={16} />
                  <span>Install App on Device</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Fallback toast for install banner */}
        {installFeedback && (
          <div className="bg-navy-900 text-white text-xs py-2 px-4 text-center">
            {installFeedback}
          </div>
        )}
      </header>

      {/* iOS Safari Instructions Modal */}
      <PwaInstallModal isOpen={showIOSModal} onClose={() => setShowIOSModal(false)} />
    </>
  );
};
