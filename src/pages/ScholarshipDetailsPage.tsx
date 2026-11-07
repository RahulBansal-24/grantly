import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStudentProfile } from '../hooks/useStudentProfile';
import { useScholarships } from '../hooks/useScholarships';
import { EligibilityEngine } from '../services/eligibilityEngine';
import { EligibilityBadge } from '../components/EligibilityBadge';
import { EligibilityBreakdown } from '../components/EligibilityBreakdown';
import { bookmarkStorage, applicationStorage } from '../services/db';
import { ApplicationRecord } from '../types/student';
import {
  Building,
  Calendar,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Bookmark,
  Share2,
  Clock,
  FileText,
  AlertCircle,
  ShieldCheck,
  Check,
  Plus,
  Send,
  Globe,
  MapPin,
  Award
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ScholarshipDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { profile } = useStudentProfile();
  const { scholarships } = useScholarships(profile);

  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [existingApp, setExistingApp] = useState<ApplicationRecord | undefined>(undefined);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [appNotes, setAppNotes] = useState<string>('');

  const scholarship = scholarships.find(s => s.id === id || s.slug === id);

  useEffect(() => {
    if (scholarship) {
      bookmarkStorage.isSaved(scholarship.id).then(setIsSaved);
      applicationStorage.getByScholarshipId(scholarship.id).then(app => {
        setExistingApp(app);
        if (app?.notes) setAppNotes(app.notes);
      });
    }
  }, [scholarship]);

  if (!scholarship) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-navy-900">Scholarship Not Found</h2>
        <p className="text-xs text-slate-500">
          The requested opportunity could not be located in the current database.
        </p>
        <Link
          to="/discover"
          className="inline-block px-5 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold"
        >
          Return to Discover
        </Link>
      </div>
    );
  }

  // Deterministic Evaluation
  const evaluationResult = EligibilityEngine.evaluateScholarship(scholarship, profile);

  const handleToggleBookmark = async () => {
    const next = await bookmarkStorage.toggleSave(scholarship.id);
    setIsSaved(next);
  };

  const handleAddOrUpdateApplication = async (status: ApplicationRecord['status']) => {
    const defaultChecklist = scholarship.requiredDocuments.map((doc, idx) => ({
      id: `doc_${idx}`,
      name: doc,
      required: true,
      isUploadedOrReady: false
    }));

    const updated = await applicationStorage.createOrUpdate({
      scholarshipId: scholarship.id,
      scholarshipName: scholarship.name,
      provider: scholarship.provider,
      amount: scholarship.amount,
      formattedAmount: scholarship.formattedAmount,
      deadline: scholarship.deadline,
      status,
      notes: appNotes,
      documentsChecklist: existingApp?.documentsChecklist?.length ? existingApp.documentsChecklist : defaultChecklist
    });

    setExistingApp(updated);

    if (status === 'applied' || status === 'approved') {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleToggleDoc = async (docId: string) => {
    if (!existingApp) return;
    const updatedDocs = existingApp.documentsChecklist.map(d =>
      d.id === docId ? { ...d, isUploadedOrReady: !d.isUploadedOrReady } : d
    );
    const updated = await applicationStorage.createOrUpdate({
      scholarshipId: scholarship.id,
      documentsChecklist: updatedDocs
    });
    setExistingApp(updated);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // Days left calculation
  const deadlineDate = new Date(scholarship.deadline);
  const diffDays = Math.ceil((deadlineDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Back link */}
      <Link
        to="/discover"
        className="text-xs font-semibold text-slate-500 hover:text-brand-600 inline-flex items-center gap-1"
      >
        <span>← Back to all scholarships</span>
      </Link>

      {/* Main Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
              {scholarship.providerCategory.replace('_', ' ')}
            </span>

            {/* Country / State Tag */}
            {scholarship.country !== 'India' ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                <Globe size={13} className="text-slate-500" />
                {scholarship.country}
              </span>
            ) : scholarship.state && scholarship.state !== 'All India' ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                <MapPin size={13} className="text-slate-500" />
                {scholarship.state}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                <MapPin size={13} className="text-slate-500" />
                All India
              </span>
            )}

            {scholarship.fundingType && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-800 border border-brand-200">
                <Award size={13} className="text-brand-600" />
                {scholarship.fundingType.replace('_', ' ')}
              </span>
            )}

            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck size={13} className="text-emerald-600" />
              {scholarship.verificationStatus || 'Officially Verified'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
              title="Copy link to clipboard"
            >
              {copiedLink ? <Check size={16} className="text-emerald-600" /> : <Share2 size={16} />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={handleToggleBookmark}
              className={`p-2.5 rounded-xl border text-xs font-semibold inline-flex items-center gap-1.5 transition-all ${
                isSaved
                  ? 'bg-amber-50 text-amber-700 border-amber-300'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Bookmark size={16} className={isSaved ? 'fill-amber-500' : ''} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight leading-snug">
            {scholarship.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <Building size={14} className="text-slate-400" />
              <span className="font-semibold text-slate-800">{scholarship.provider}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <GraduationCap size={14} className="text-slate-400" />
              <span>{scholarship.educationLevels.map(l => l.replace('_', ' ')).join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Amount & Deadline Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Grant Amount
            </div>
            <div className="text-xl sm:text-2xl font-black text-navy-900 mt-0.5">
              {scholarship.formattedAmount}
            </div>
            <div className="text-[11px] text-slate-500 capitalize">{scholarship.awardFrequency} award</div>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Application Deadline
            </div>
            <div className="text-base sm:text-lg font-bold text-navy-900 mt-0.5 flex items-center gap-1.5">
              <Calendar size={16} className="text-slate-400" />
              <span>{scholarship.deadline}</span>
            </div>
            <div className="text-[11px] text-slate-500">
              {diffDays < 0 ? 'Application window closed' : `${diffDays} days remaining`}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Your Eligibility
            </div>
            <div className="mt-1">
              <EligibilityBadge
                status={evaluationResult.status}
                matchScore={evaluationResult.overallMatchScore}
                size="md"
              />
            </div>
          </div>
        </div>

        {/* Action Button Strip */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={scholarship.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <span>Open Official Application Portal</span>
            <ExternalLink size={16} />
          </a>

          {/* Quick status button */}
          {!existingApp ? (
            <button
              onClick={() => handleAddOrUpdateApplication('planning')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
            >
              <Plus size={16} />
              <span>Add to Application Pipeline</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-slate-500 font-medium">Pipeline:</span>
              <select
                value={existingApp.status}
                onChange={e => handleAddOrUpdateApplication(e.target.value as any)}
                className="px-3 py-2 rounded-xl border border-brand-300 bg-brand-50 font-bold text-brand-700 text-xs focus:outline-none"
              >
                <option value="saved">Saved</option>
                <option value="planning">Planning to Apply</option>
                <option value="applied">Applied</option>
                <option value="under_review">Under Review</option>
                <option value="approved">Approved / Awarded</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Personalized Eligibility Breakdown Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card space-y-4">
        <div>
          <h2 className="text-xl font-bold text-navy-900 tracking-tight">
            Personalized Eligibility Breakdown
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Rule-by-rule comparison between official criteria and your current profile. Zero AI hallucinations.
          </p>
        </div>

        <EligibilityBreakdown result={evaluationResult} />
      </div>

      {/* Description & Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Description & Coverage */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
          <h3 className="text-base font-bold text-navy-900">Scholarship Overview</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {scholarship.description}
          </p>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Coverage & Award Structure
            </span>
            <p className="text-xs font-semibold text-slate-800">
              {scholarship.awardCoverage}
            </p>
          </div>
        </div>

        {/* Benefits List */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
          <h3 className="text-base font-bold text-navy-900">Key Benefits</h3>
          <ul className="space-y-2.5">
            {scholarship.benefits.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Required Documents & Checklist */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-navy-900">Required Documents Checklist</h3>
            <p className="text-xs text-slate-500">
              Mark documents you have ready. Changes are saved locally to your application tracker.
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            {scholarship.requiredDocuments.length} mandatory documents
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {scholarship.requiredDocuments.map((doc, idx) => {
            const isChecked = existingApp?.documentsChecklist?.find(d => d.name === doc)?.isUploadedOrReady;
            return (
              <label
                key={idx}
                onClick={() => {
                  if (!existingApp) {
                    handleAddOrUpdateApplication('planning');
                  }
                  const match = existingApp?.documentsChecklist?.find(d => d.name === doc);
                  if (match) handleToggleDoc(match.id);
                }}
                className={`p-3.5 rounded-xl border flex items-center gap-3 transition-colors cursor-pointer ${
                  isChecked
                    ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  {isChecked && <Check size={13} />}
                </div>
                <span className="text-xs">{doc}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Step by Step Application Procedure */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
        <h3 className="text-base font-bold text-navy-900">Official Application Procedure</h3>
        <ol className="space-y-3">
          {scholarship.applicationProcedure.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <span className="w-6 h-6 rounded-full bg-brand-50 text-brand-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 border border-brand-200">
                {idx + 1}
              </span>
              <span className="pt-0.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Provenance & Disclaimers Footer Card */}
      <div className="p-6 rounded-3xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 font-semibold text-slate-700">
          <span>Source Name: {scholarship.sourceName}</span>
          <span>Last Verified: {scholarship.lastVerifiedDate}</span>
          <span>Last Synced: {scholarship.lastSynchronizedDate.split('T')[0]}</span>
        </div>
        <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
          Official URL:{' '}
          <a
            href={scholarship.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            {scholarship.officialUrl}
          </a>
          . GRANTLY is an independent discovery and eligibility platform. Applications must be completed on official provider portals.
        </p>
      </div>
    </div>
  );
};
