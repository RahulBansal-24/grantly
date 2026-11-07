import React from 'react';
import { EligibilityResult, CriterionEvaluation } from '../types/eligibility';
import { CheckCircle2, XCircle, AlertCircle, ArrowRight, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  result: EligibilityResult;
  showProfileLink?: boolean;
}

export const EligibilityBreakdown: React.FC<Props> = ({ result, showProfileLink = true }) => {
  const satisfied = result.criteria.filter(c => c.status === 'SATISFIED');
  const failed = result.criteria.filter(c => c.status === 'FAILED');
  const missing = result.criteria.filter(c => c.status === 'MISSING_INFO');

  const renderCriterionRow = (criterion: CriterionEvaluation) => {
    const isSatisfied = criterion.status === 'SATISFIED';
    const isFailed = criterion.status === 'FAILED';
    const isMissing = criterion.status === 'MISSING_INFO';

    return (
      <div
        key={criterion.id}
        className={`p-4 rounded-xl border text-sm transition-all ${
          isSatisfied
            ? 'bg-emerald-50/50 border-emerald-100'
            : isFailed
            ? 'bg-rose-50/50 border-rose-100'
            : 'bg-amber-50/50 border-amber-100'
        }`}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            {isSatisfied && <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />}
            {isFailed && <XCircle size={18} className="text-rose-600 shrink-0" />}
            {isMissing && <AlertCircle size={18} className="text-amber-600 shrink-0" />}

            <h5 className="font-semibold text-navy-900">
              {criterion.criterionName}
            </h5>
          </div>

          <span
            className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
              isSatisfied
                ? 'bg-emerald-100 text-emerald-800'
                : isFailed
                ? 'bg-rose-100 text-rose-800'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {isSatisfied ? 'Satisfied' : isFailed ? 'Does Not Match' : 'Info Missing'}
          </span>
        </div>

        {/* Required vs Student Comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 p-3 bg-white/80 rounded-lg border border-slate-100 text-xs">
          <div>
            <span className="font-medium text-slate-400 block mb-0.5">Required Value:</span>
            <span className="font-semibold text-slate-800">{criterion.requiredDisplay}</span>
          </div>
          <div>
            <span className="font-medium text-slate-400 block mb-0.5">Your Profile Value:</span>
            <span
              className={`font-semibold ${
                isSatisfied
                  ? 'text-emerald-700'
                  : isFailed
                  ? 'text-rose-700'
                  : 'text-amber-700 italic'
              }`}
            >
              {criterion.studentDisplay}
            </span>
          </div>
        </div>

        {/* Explanation & Action */}
        <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
          {criterion.explanation}
        </p>

        {criterion.suggestedAction && (
          <div className="mt-2 text-xs font-medium text-brand-700 flex items-center gap-1.5 bg-brand-50/60 p-2 rounded-lg border border-brand-100/50">
            <ArrowRight size={13} className="shrink-0 text-brand-500" />
            <span>{criterion.suggestedAction}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Summary Banner */}
      <div
        className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
          result.status === 'ELIGIBLE'
            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
            : result.status === 'NOT_ELIGIBLE'
            ? 'bg-rose-50 border-rose-200 text-rose-950'
            : 'bg-amber-50 border-amber-200 text-amber-950'
        }`}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-white/80 shadow-2xs">
              Deterministic Verdict
            </span>
            <span className="text-xs font-medium">Calculated rule-by-rule</span>
          </div>
          <h4 className="text-base font-bold">{result.summaryHeadline}</h4>
          <p className="text-xs opacity-90">{result.actionableRecommendation}</p>
        </div>

        {showProfileLink && (
          <Link
            to="/profile"
            className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-navy-900 hover:text-brand-600 text-xs font-semibold rounded-xl border border-slate-200 shadow-sm hover:shadow transition-all"
          >
            <Edit3 size={14} />
            <span>Edit My Profile</span>
          </Link>
        )}
      </div>

      {/* Criteria Breakdown Sections */}
      {failed.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
            <XCircle size={15} />
            <span>Unsatisfied Conditions ({failed.length})</span>
          </h4>
          <div className="space-y-3">{failed.map(renderCriterionRow)}</div>
        </div>
      )}

      {missing.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
            <AlertCircle size={15} />
            <span>Unverified Criteria — Information Missing ({missing.length})</span>
          </h4>
          <div className="space-y-3">{missing.map(renderCriterionRow)}</div>
        </div>
      )}

      {satisfied.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
            <CheckCircle2 size={15} />
            <span>Satisfied Conditions ({satisfied.length})</span>
          </h4>
          <div className="space-y-3">{satisfied.map(renderCriterionRow)}</div>
        </div>
      )}
    </div>
  );
};
