import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scholarship } from '../types/scholarship';
import { EligibilityResult } from '../types/eligibility';
import { EligibilityBadge } from './EligibilityBadge';
import { bookmarkStorage } from '../services/db';
import {
  Calendar,
  Building,
  GraduationCap,
  Bookmark,
  ChevronRight,
  ShieldCheck,
  Globe,
  MapPin,
  Award
} from 'lucide-react';

interface Props {
  scholarship: Scholarship;
  evaluationResult: EligibilityResult;
  onBookmarkChanged?: (scholarshipId: string, isSaved: boolean) => void;
}

export const ScholarshipCard: React.FC<Props> = ({
  scholarship,
  evaluationResult,
  onBookmarkChanged
}) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    bookmarkStorage.isSaved(scholarship.id).then(saved => {
      if (isMounted) setIsSaved(saved);
    });
    return () => {
      isMounted = false;
    };
  }, [scholarship.id]);

  const handleToggleBookmark = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSaving) return;
    setIsSaving(true);
    try {
      const nextSavedState = await bookmarkStorage.toggleSave(scholarship.id);
      setIsSaved(nextSavedState);
      if (onBookmarkChanged) {
        onBookmarkChanged(scholarship.id, nextSavedState);
      }
    } finally {
      setIsSaving(false);
    }
  };

  // Provider category readable badge
  const categoryLabels: Record<string, { label: string; color: string }> = {
    central_gov: { label: 'Central Government', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    state_gov: { label: 'State Government', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    corporate_csr: { label: 'Corporate CSR', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    corporate: { label: 'Corporate CSR', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    foundation_ngo: { label: 'NGO / Foundation', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    ngo: { label: 'NGO / Foundation', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    premier_university: { label: 'Premier University', color: 'bg-teal-50 text-teal-700 border-teal-200' },
    university: { label: 'University Aid', color: 'bg-teal-50 text-teal-700 border-teal-200' },
    international_government: { label: 'International Gov', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    international_university: { label: 'World University', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
    international: { label: 'International', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    private: { label: 'Private Entity', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' }
  };

  const catConfig = categoryLabels[scholarship.providerCategory] || {
    label: scholarship.providerCategory.replace('_', ' '),
    color: 'bg-slate-50 text-slate-700 border-slate-200'
  };

  // Funding Type format
  const fundingFormat: Record<string, string> = {
    full_funding: 'Full Funding',
    tuition_waiver: 'Tuition Waiver',
    fixed_award: 'Direct Grant',
    partial_funding: 'Partial Award',
    loan_scholarship: 'Loan Scholarship'
  };

  // Calculate days left
  const deadlineDate = new Date(scholarship.deadline);
  const today = new Date();
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isExpired = diffDays < 0;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between overflow-hidden relative">
      {/* Top Bar with Category, Location & Bookmark */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span
              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${catConfig.color}`}
            >
              {catConfig.label}
            </span>

            {/* Country / State Tag */}
            {scholarship.country !== 'India' ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                <Globe size={11} className="text-slate-500" />
                {scholarship.country}
              </span>
            ) : scholarship.state && scholarship.state !== 'All India' ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                <MapPin size={11} className="text-slate-500" />
                {scholarship.state}
              </span>
            ) : null}

            {/* Funding Type */}
            {scholarship.fundingType && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                <Award size={10} className="text-brand-600" />
                {fundingFormat[scholarship.fundingType] || scholarship.fundingType}
              </span>
            )}

            {/* Verified badge */}
            <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck size={10} className="text-emerald-600" />
              {scholarship.verificationStatus || 'Verified'}
            </span>
          </div>

          <button
            onClick={handleToggleBookmark}
            disabled={isSaving}
            className={`p-2 rounded-xl transition-all ${
              isSaved
                ? 'bg-amber-50 text-amber-600 border border-amber-200 shadow-xs'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
            }`}
            title={isSaved ? 'Remove bookmark' : 'Save scholarship to bookmarks'}
            aria-label={isSaved ? 'Remove bookmark' : 'Save scholarship to bookmarks'}
          >
            <Bookmark size={17} className={isSaved ? 'fill-amber-500' : ''} />
          </button>
        </div>

        {/* Title */}
        <Link to={`/scholarships/${scholarship.id}`}>
          <h3 className="text-base font-bold text-navy-900 group-hover:text-brand-600 transition-colors line-clamp-2 mb-1.5">
            {scholarship.name}
          </h3>
        </Link>

        {/* Provider */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
          <Building size={13} className="shrink-0 text-slate-400" />
          <span className="truncate">{scholarship.provider}</span>
        </div>

        {/* Award Amount & Education Level */}
        <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-xl mb-3 border border-slate-100">
          <div>
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Grant Amount
            </div>
            <div className="text-sm font-bold text-navy-900 truncate">
              {scholarship.formattedAmount}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Education Level
            </div>
            <div className="text-xs font-semibold text-slate-700 capitalize truncate flex items-center gap-1 mt-0.5">
              <GraduationCap size={13} className="text-slate-400 shrink-0" />
              <span>{scholarship.educationLevels.map(l => l.replace('_', ' ')).join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Short Summary */}
        <p className="text-xs text-slate-600 line-clamp-2 mb-3">
          {scholarship.briefSummary}
        </p>
      </div>

      {/* Footer Area: Eligibility status & Action */}
      <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <EligibilityBadge
          status={evaluationResult.status}
          matchScore={evaluationResult.overallMatchScore}
          size="sm"
        />

        <div className="flex items-center gap-3">
          {/* Deadline */}
          <div
            className={`flex items-center gap-1 text-[11px] font-medium ${
              isExpired
                ? 'text-rose-600 font-semibold'
                : diffDays <= 7
                ? 'text-amber-700 font-semibold'
                : 'text-slate-500'
            }`}
          >
            <Calendar size={13} />
            <span>
              {isExpired ? 'Closed' : diffDays === 0 ? 'Closes today' : `${diffDays}d left`}
            </span>
          </div>

          <Link
            to={`/scholarships/${scholarship.id}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 hover:underline"
          >
            <span>Details</span>
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
