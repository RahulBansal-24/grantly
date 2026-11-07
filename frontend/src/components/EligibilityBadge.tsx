import React from 'react';
import { EligibilityStatus } from '../types/eligibility';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

interface Props {
  status: EligibilityStatus;
  matchScore?: number;
  showScore?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const EligibilityBadge: React.FC<Props> = ({
  status,
  matchScore,
  showScore = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-semibold'
  };

  const iconSizes = {
    sm: 12,
    md: 14,
    lg: 16
  };

  const configs = {
    ELIGIBLE: {
      label: 'ELIGIBLE',
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: <CheckCircle2 size={iconSizes[size]} className="text-emerald-600 shrink-0" />,
      scoreBg: 'bg-emerald-100 text-emerald-900'
    },
    NEEDS_INFORMATION: {
      label: 'NEEDS INFO',
      bg: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: <AlertCircle size={iconSizes[size]} className="text-amber-600 shrink-0" />,
      scoreBg: 'bg-amber-100 text-amber-900'
    },
    NOT_ELIGIBLE: {
      label: 'NOT ELIGIBLE',
      bg: 'bg-rose-50 text-rose-800 border-rose-200',
      icon: <XCircle size={iconSizes[size]} className="text-rose-600 shrink-0" />,
      scoreBg: 'bg-rose-100 text-rose-900'
    }
  };

  const config = configs[status];

  return (
    <div className="inline-flex items-center gap-1.5 flex-wrap">
      <span
        className={`inline-flex items-center rounded-full border ${config.bg} ${sizeClasses[size]}`}
      >
        {config.icon}
        <span>{config.label}</span>
      </span>

      {showScore && matchScore !== undefined && (
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
            matchScore >= 75
              ? 'bg-indigo-50 text-indigo-700 border border-indigo-200'
              : matchScore >= 40
              ? 'bg-slate-100 text-slate-700 border border-slate-200'
              : 'bg-slate-100 text-slate-500'
          }`}
          title="Transparent matching relevance score calculated from profile attributes"
        >
          {matchScore}% Match
        </span>
      )}
    </div>
  );
};
