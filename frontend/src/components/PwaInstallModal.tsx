import React from 'react';
import { Share, PlusSquare, X, Download } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const PwaInstallModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-navy-900 flex items-center justify-center text-white shadow-md">
            <Download size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy-900">Install GRANTLY</h3>
            <p className="text-xs text-slate-500">Add to your device for offline access & instant launch</p>
          </div>
        </div>

        <div className="space-y-4 my-5 text-sm text-slate-600">
          <div className="p-3 bg-brand-50 border border-brand-100 rounded-xl">
            <p className="font-semibold text-brand-900 mb-1">iOS Safari Instructions:</p>
            <ol className="list-decimal list-inside space-y-2 text-brand-800 text-xs">
              <li className="flex items-center gap-2">
                <span>1. Tap the</span>
                <span className="inline-flex items-center gap-1 font-medium bg-white px-1.5 py-0.5 rounded border border-brand-200">
                  <Share size={13} /> Share button
                </span>
                <span>in Safari toolbar.</span>
              </li>
              <li className="flex items-center gap-2">
                <span>2. Scroll down and tap</span>
                <span className="inline-flex items-center gap-1 font-medium bg-white px-1.5 py-0.5 rounded border border-brand-200">
                  <PlusSquare size={13} /> Add to Home Screen
                </span>
              </li>
              <li>3. Confirm by tapping <strong>Add</strong> in the top-right corner.</li>
            </ol>
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
            <p className="font-semibold text-slate-800 mb-1">Desktop & Android Browsers:</p>
            <p className="text-slate-600">
              Look for the install icon <Download className="inline mx-1" size={13} /> in your browser address bar or click the install button on the home page.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-xl text-sm transition-colors shadow-sm"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
