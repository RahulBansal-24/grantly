import { PROVIDER_CATEGORY_CONFIG, FUNDING_TYPE_CONFIG } from './constants';

export interface DaysRemainingResult {
  diffDays: number;
  isExpired: boolean;
  isClosingSoon: boolean;
  label: string;
}

/**
 * Deterministically computes days remaining until a deadline from today.
 */
export function calculateDaysRemaining(deadlineStr: string): DaysRemainingResult {
  if (!deadlineStr) {
    return { diffDays: 0, isExpired: false, isClosingSoon: false, label: 'No deadline' };
  }

  const deadline = new Date(deadlineStr);
  const today = new Date();
  
  // Set both to midnight for consistent day calculation
  const deadlineMidnight = new Date(deadline.getFullYear(), deadline.getMonth(), deadline.getDate());
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  const diffTime = deadlineMidnight.getTime() - todayMidnight.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const isExpired = diffDays < 0;
  const isClosingSoon = diffDays >= 0 && diffDays <= 7;
  
  let label = '';
  if (isExpired) {
    label = 'Closed';
  } else if (diffDays === 0) {
    label = 'Closes today';
  } else if (diffDays === 1) {
    label = '1 day left';
  } else {
    label = `${diffDays}d left`;
  }

  return {
    diffDays,
    isExpired,
    isClosingSoon,
    label
  };
}

/**
 * Format currency amounts in INR or international currencies.
 */
export function formatCurrencyAmount(amount: number, currency: string = 'INR'): string {
  if (isNaN(amount) || amount <= 0) {
    return 'Fixed Award';
  }

  if (currency === 'INR') {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2).replace(/\.00$/, '')} Cr`;
    }
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(2).replace(/\.00$/, '')} Lakh`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  }

  const symbols: Record<string, string> = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    CAD: 'CAD $',
    AUD: 'AUD $',
    SEK: 'SEK ',
    CHF: 'CHF '
  };

  const symbol = symbols[currency] || `${currency} `;
  return `${symbol}${amount.toLocaleString('en-US')}`;
}

/**
 * Format snake_case or kebab-case text to Title Case.
 */
export function formatTitleCase(str: string): string {
  if (!str) return '';
  return str
    .replace(/[_-]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Format provider category with badge styling.
 */
export function getProviderCategoryBadge(category: string): { label: string; color: string } {
  return PROVIDER_CATEGORY_CONFIG[category] || {
    label: formatTitleCase(category),
    color: 'bg-slate-50 text-slate-700 border-slate-200'
  };
}

/**
 * Format funding structure display name.
 */
export function getFundingTypeLabel(fundingType: string): string {
  return FUNDING_TYPE_CONFIG[fundingType] || formatTitleCase(fundingType);
}
