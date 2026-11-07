import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applicationStorage } from '../services/db';
import { ApplicationRecord, ApplicationStatus } from '../types/student';
import {
  FileText,
  Clock,
  Calendar,
  CheckCircle2,
  Trash2,
  Edit2,
  Plus,
  ExternalLink,
  ChevronRight,
  Filter,
  Check
} from 'lucide-react';

export const ApplicationsPage: React.FC = () => {
  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [activeTab, setActiveTab] = useState<ApplicationStatus | 'all'>('all');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState<string>('');

  const loadApplications = async () => {
    const list = await applicationStorage.getAll();
    setApplications(list);
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const handleStatusChange = async (id: string, newStatus: ApplicationStatus) => {
    await applicationStorage.updateStatus(id, newStatus);
    await loadApplications();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to remove this application record?')) {
      await applicationStorage.delete(id);
      await loadApplications();
    }
  };

  const handleSaveNotes = async (id: string) => {
    const app = applications.find(a => a.id === id);
    if (!app) return;
    await applicationStorage.createOrUpdate({
      scholarshipId: app.scholarshipId,
      notes: tempNotes
    });
    setEditingNotesId(null);
    await loadApplications();
  };

  const statusConfigs: Record<ApplicationStatus, { label: string; color: string; bg: string }> = {
    saved: { label: 'Saved', color: 'text-slate-700', bg: 'bg-slate-100 border-slate-200' },
    planning: { label: 'Planning to Apply', color: 'text-indigo-700', bg: 'bg-indigo-50 border-indigo-200' },
    applied: { label: 'Applied', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-200' },
    under_review: { label: 'Under Review', color: 'text-amber-700', bg: 'bg-amber-50 border-amber-200' },
    approved: { label: 'Approved / Won', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' },
    rejected: { label: 'Not Selected', color: 'text-rose-700', bg: 'bg-rose-50 border-rose-200' }
  };

  const filtered = activeTab === 'all'
    ? applications
    : applications.filter(a => a.status === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            My Application Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Track documents, deadlines, submission timestamps, and milestones locally in IndexedDB.
          </p>
        </div>

        <Link
          to="/discover"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-500 shadow-sm transition-all"
        >
          <Plus size={15} />
          <span>Add More Applications</span>
        </Link>
      </div>

      {/* Pipeline Stage Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
            activeTab === 'all'
              ? 'bg-navy-900 text-white'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          All Stages ({applications.length})
        </button>

        {(['planning', 'applied', 'under_review', 'approved', 'rejected', 'saved'] as ApplicationStatus[]).map(st => {
          const count = applications.filter(a => a.status === st).length;
          const conf = statusConfigs[st];
          return (
            <button
              key={st}
              onClick={() => setActiveTab(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === st
                  ? 'bg-brand-50 text-brand-700 font-bold border border-brand-200'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>{conf.label}</span>
              <span className="ml-1.5 opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Applications List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-500 flex items-center justify-center mx-auto">
            <FileText size={26} />
          </div>
          <h3 className="text-base font-bold text-navy-900">
            {activeTab === 'all'
              ? 'No applications in your tracker yet'
              : `No applications in '${statusConfigs[activeTab].label}' stage`}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Explore the scholarship catalogue and click "Add to Application Pipeline" on any scholarship details page.
          </p>
          <Link
            to="/discover"
            className="inline-block px-5 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold hover:bg-brand-500 transition-colors"
          >
            Explore Opportunities
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(app => {
            const conf = statusConfigs[app.status];
            const readyDocs = app.documentsChecklist.filter(d => d.isUploadedOrReady).length;
            const totalDocs = app.documentsChecklist.length;

            return (
              <div
                key={app.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-subtle hover:shadow-card transition-all space-y-4"
              >
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${conf.bg} ${conf.color}`}>
                        {conf.label}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs font-semibold text-slate-500 truncate max-w-xs">{app.provider}</span>
                    </div>

                    <Link
                      to={`/scholarships/${app.scholarshipId}`}
                      className="text-base font-bold text-navy-900 hover:text-brand-600 transition-colors"
                    >
                      {app.scholarshipName}
                    </Link>
                  </div>

                  {/* Actions & Status Dropdown */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <select
                      value={app.status}
                      onChange={e => handleStatusChange(app.id, e.target.value as ApplicationStatus)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    >
                      <option value="saved">Saved</option>
                      <option value="planning">Planning to Apply</option>
                      <option value="applied">Applied</option>
                      <option value="under_review">Under Review</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                    </select>

                    <button
                      onClick={() => handleDelete(app.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                      title="Delete application record"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-xl text-xs">
                  <div>
                    <span className="text-slate-400 font-semibold block text-[10px] uppercase">Award Amount</span>
                    <span className="font-bold text-navy-900">{app.formattedAmount || 'Not specified'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold block text-[10px] uppercase">Deadline</span>
                    <span className="font-semibold text-slate-700">{app.deadline}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold block text-[10px] uppercase">Submission Date</span>
                    <span className="font-semibold text-slate-700">{app.appliedDate || 'Not yet submitted'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold block text-[10px] uppercase">Documents Ready</span>
                    <span className="font-semibold text-slate-700">
                      {totalDocs > 0 ? `${readyDocs} of ${totalDocs} (${Math.round((readyDocs/totalDocs)*100)}%)` : 'None required'}
                    </span>
                  </div>
                </div>

                {/* Notes & Timeline */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pt-2 text-xs border-t border-slate-100">
                  <div className="w-full sm:max-w-md">
                    {editingNotesId === app.id ? (
                      <div className="space-y-2">
                        <textarea
                          value={tempNotes}
                          onChange={e => setTempNotes(e.target.value)}
                          placeholder="Add personal notes, reference numbers, or interview dates..."
                          className="w-full p-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500"
                          rows={2}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSaveNotes(app.id)}
                            className="px-3 py-1 bg-brand-600 text-white rounded-lg text-xs font-semibold"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingNotesId(null)}
                            className="px-3 py-1 border border-slate-200 rounded-lg text-xs"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-slate-600 italic">
                          {app.notes ? `"${app.notes}"` : 'No notes added yet.'}
                        </p>
                        <button
                          onClick={() => {
                            setEditingNotesId(app.id);
                            setTempNotes(app.notes || '');
                          }}
                          className="text-slate-400 hover:text-brand-600 shrink-0 p-1"
                          title="Edit notes"
                        >
                          <Edit2 size={13} />
                        </button>
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/scholarships/${app.scholarshipId}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700 whitespace-nowrap self-end sm:self-center"
                  >
                    <span>View Scheme Details</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
