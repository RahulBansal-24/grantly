import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useStudentProfile } from '../hooks/useStudentProfile';
import { useScholarships, ScholarshipFilters, INITIAL_FILTERS } from '../hooks/useScholarships';
import { ScholarshipCard } from '../components/ScholarshipCard';
import {
  Search,
  SlidersHorizontal,
  X,
  Filter,
  CheckCircle2,
  AlertCircle,
  XCircle,
  RotateCcw,
  Sparkles,
  Building,
  GraduationCap
} from 'lucide-react';
import { ScholarshipCategory, ProviderCategory, EducationLevel, GenderEligibility } from '../types/scholarship';
import { EligibilityStatus } from '../types/eligibility';

const INDIAN_STATES = [
  'All India', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
  'Puducherry', 'Chandigarh', 'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli and Daman and Diu'
];

const COUNTRIES = [
  { val: 'all', label: 'All Regions / Countries' },
  { val: 'India', label: 'India Opportunities' },
  { val: 'International', label: 'All International (Study Abroad)' },
  { val: 'United Kingdom', label: 'United Kingdom (UK)' },
  { val: 'United States', label: 'United States (USA)' },
  { val: 'Germany', label: 'Germany (DAAD)' },
  { val: 'France', label: 'France (Campus France)' },
  { val: 'Netherlands', label: 'Netherlands' },
  { val: 'Sweden', label: 'Sweden (SI)' },
  { val: 'Switzerland', label: 'Switzerland' },
  { val: 'Canada', label: 'Canada' },
  { val: 'Australia', label: 'Australia' },
  { val: 'Singapore', label: 'Singapore (A*STAR)' },
  { val: 'Japan', label: 'Japan (MEXT)' },
  { val: 'South Korea', label: 'South Korea (GKS)' }
];

export const DiscoverPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { profile } = useStudentProfile();
  const { processedScholarships, filters, setFilters, stats, loading } = useScholarships(profile);
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>(filters.searchQuery);

  // Sync URL query parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category') as ScholarshipCategory | null;
    const providerParam = searchParams.get('providerCategory') as ProviderCategory | null;
    const sortParam = searchParams.get('sortBy') as any;

    if (categoryParam || providerParam || sortParam) {
      setFilters(prev => ({
        ...prev,
        category: categoryParam || prev.category,
        providerCategory: providerParam || prev.providerCategory,
        sortBy: sortParam || prev.sortBy
      }));
    }
  }, [searchParams, setFilters]);

  // Debounced search handling
  useEffect(() => {
    const handler = setTimeout(() => {
      setFilters(prev => ({ ...prev, searchQuery: searchInput }));
    }, 250);
    return () => clearTimeout(handler);
  }, [searchInput, setFilters]);

  const handleResetFilters = () => {
    setSearchInput('');
    setFilters(INITIAL_FILTERS);
    setSearchParams({});
  };

  const activeFiltersCount = [
    filters.searchQuery ? 1 : 0,
    filters.category !== 'all' ? 1 : 0,
    filters.providerCategory !== 'all' ? 1 : 0,
    filters.educationLevel !== 'all' ? 1 : 0,
    filters.state !== 'all' ? 1 : 0,
    filters.gender !== 'all' ? 1 : 0,
    filters.eligibilityStatus !== 'all' ? 1 : 0,
    filters.status !== 'all' ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      {/* Header and Search Bar */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            Discover Opportunities
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Explore {stats.totalAvailable} verified scholarships across central, state, corporate, and private foundations.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-3 text-slate-400" size={18} />
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Search by scholarship name, provider (e.g. NSP, AICTE, Tata), degree, or stream..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-subtle transition-all"
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 p-0.5 rounded-lg"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-2xl text-sm shadow-subtle"
          >
            <SlidersHorizontal size={16} />
            <span>Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar Filters + Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block lg:col-span-1 space-y-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-subtle h-fit sticky top-24">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 font-bold text-sm text-navy-900">
              <Filter size={16} className="text-brand-600" />
              <span>Filter Opportunities</span>
            </div>
            {activeFiltersCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1"
              >
                <RotateCcw size={12} />
                <span>Reset ({activeFiltersCount})</span>
              </button>
            )}
          </div>

          {/* Eligibility Status Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Eligibility Status
            </label>
            <div className="space-y-1.5">
              {[
                { val: 'all', label: 'All Opportunities', color: 'text-slate-700' },
                { val: 'ELIGIBLE', label: `Eligible Only (${stats.eligibleCount})`, color: 'text-emerald-700' },
                { val: 'NEEDS_INFORMATION', label: `Needs Information (${stats.needsInfoCount})`, color: 'text-amber-700' },
                { val: 'NOT_ELIGIBLE', label: `Ineligible (${stats.ineligibleCount})`, color: 'text-rose-700' }
              ].map(opt => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => setFilters(prev => ({ ...prev, eligibilityStatus: opt.val as any }))}
                  className={`w-full text-left text-xs px-3 py-2 rounded-xl transition-colors ${
                    filters.eligibilityStatus === opt.val
                      ? 'bg-brand-50 text-brand-700 font-bold border border-brand-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className={opt.color}>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Application & Expiry Status */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Application & Expiry Status
            </label>
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, status: 'all' }))}
                className={`w-full text-left text-xs px-3 py-2 rounded-xl transition-colors ${
                  filters.status === 'all'
                    ? 'bg-navy-900 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                All Statuses ({stats.totalAvailable})
              </button>

              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, status: 'open' }))}
                className={`w-full text-left text-xs px-3 py-2 rounded-xl transition-colors ${
                  filters.status === 'open'
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                    : 'text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                Currently Open ({stats.openCount})
              </button>

              <button
                type="button"
                onClick={() => setFilters(prev => ({ ...prev, status: filters.status === 'expired' ? 'all' : 'expired' }))}
                className={`w-full flex items-center justify-between text-xs px-3 py-2 rounded-xl border transition-colors ${
                  filters.status === 'expired'
                    ? 'bg-rose-50 border-rose-300 text-rose-800 font-bold'
                    : 'border-slate-200 text-rose-700 hover:bg-rose-50/50'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>Expired Scholarships</span>
                </span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-rose-100 text-rose-800 font-bold">
                  {stats.expiredCount}
                </span>
              </button>
            </div>
          </div>

          {/* Country / Region Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Country / Region
            </label>
            <select
              value={filters.country}
              onChange={e => setFilters(prev => ({ ...prev, country: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {COUNTRIES.map(c => (
                <option key={c.val} value={c.val}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Funding Type Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Funding Structure
            </label>
            <select
              value={filters.fundingType}
              onChange={e => setFilters(prev => ({ ...prev, fundingType: e.target.value as any }))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="all">All Funding Types</option>
              <option value="full_funding">Full Funding (Tuition + Living + Travel)</option>
              <option value="tuition_waiver">Tuition Fee Waiver / Reimbursement</option>
              <option value="fixed_award">Direct Cash Grant / Annual Stipend</option>
              <option value="partial_funding">Partial Fee Award</option>
              <option value="loan_scholarship">Interest-Free Loan Scholarship</option>
            </select>
          </div>

          {/* Provider Category Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Provider Type
            </label>
            <select
              value={filters.providerCategory}
              onChange={e => setFilters(prev => ({ ...prev, providerCategory: e.target.value as any }))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="all">All Provider Types</option>
              <option value="central_gov">Central Government (NSP/Ministries)</option>
              <option value="state_gov">State Government Portals</option>
              <option value="corporate_csr">Corporate CSR Programs</option>
              <option value="foundation_ngo">Philanthropic Foundations & NGOs</option>
              <option value="premier_university">Premier University Aid</option>
              <option value="international_government">International Government</option>
              <option value="international_university">World University Fellowships</option>
            </select>
          </div>

          {/* Education Level Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Education Level
            </label>
            <select
              value={filters.educationLevel}
              onChange={e => setFilters(prev => ({ ...prev, educationLevel: e.target.value as any }))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="all">All Education Levels</option>
              <option value="high_school">High School (Class 11/12)</option>
              <option value="diploma">Diploma / Polytechnic</option>
              <option value="undergraduate">Undergraduate Degree</option>
              <option value="postgraduate">Postgraduate Degree</option>
              <option value="phd">PhD / Research</option>
            </select>
          </div>

          {/* State Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              State / Domicile
            </label>
            <select
              value={filters.state}
              onChange={e => setFilters(prev => ({ ...prev, state: e.target.value }))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="all">All India / Any State</option>
              {INDIAN_STATES.filter(s => s !== 'All India').map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* Gender Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Gender Eligibility
            </label>
            <select
              value={filters.gender}
              onChange={e => setFilters(prev => ({ ...prev, gender: e.target.value as any }))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="all">All Genders</option>
              <option value="female">Female Candidates Only</option>
              <option value="male">Male Candidates</option>
              <option value="transgender">Transgender Candidates</option>
            </select>
          </div>

          {/* Application Status Filter */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Portal Application Status
            </label>
            <select
              value={filters.status}
              onChange={e => setFilters(prev => ({ ...prev, status: e.target.value as any }))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <option value="all">All Opportunities ({stats.totalAvailable})</option>
              <option value="open">Currently Open ({stats.openCount})</option>
              <option value="expired">Expired / Closed ({stats.expiredCount})</option>
              <option value="coming_soon">Coming Soon</option>
            </select>
          </div>
        </aside>

        {/* Scholarship Results Area */}
        <main className="lg:col-span-3 space-y-6">
          {/* Sorting and Results Count Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="text-xs font-semibold text-slate-500">
              Showing <span className="font-bold text-navy-900">{processedScholarships.length}</span> opportunities
              {filters.eligibilityStatus !== 'all' && ` (${filters.eligibilityStatus.replace('_', ' ')})`}
              {filters.status === 'expired' && ` (Expired / Closed)`}
              {filters.status === 'open' && ` (Open Only)`}
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs text-slate-400 font-medium">Sort by:</span>
              <select
                value={filters.sortBy}
                onChange={e => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white text-navy-900 font-semibold focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="relevance">Deterministic Match & Eligibility</option>
                <option value="deadline">Upcoming Deadline</option>
                <option value="amount_high">Grant Amount (High to Low)</option>
                <option value="amount_low">Grant Amount (Low to High)</option>
                <option value="newest">Recently Verified</option>
              </select>
            </div>
          </div>

          {/* Results Grid */}
          {processedScholarships.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy-900">No scholarships match your filters</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try widening your search terms, clearing specific state or category restrictions, or resetting filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold hover:bg-brand-500 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processedScholarships.map(({ scholarship, result }) => (
                <ScholarshipCard
                  key={scholarship.id}
                  scholarship={scholarship}
                  evaluationResult={result}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Slide-over Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex justify-end bg-navy-950/60 backdrop-blur-sm lg:hidden animate-fade-in">
          <div className="w-full max-w-xs bg-white h-full p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-base font-bold text-navy-900">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile filter controls */}
            <div className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Application & Expiry Status</label>
                <select
                  value={filters.status}
                  onChange={e => setFilters(prev => ({ ...prev, status: e.target.value as any }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                >
                  <option value="all">All Opportunities ({stats.totalAvailable})</option>
                  <option value="open">Currently Open ({stats.openCount})</option>
                  <option value="expired">Expired / Closed ({stats.expiredCount})</option>
                  <option value="coming_soon">Coming Soon</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Eligibility Verdict</label>
                <select
                  value={filters.eligibilityStatus}
                  onChange={e => setFilters(prev => ({ ...prev, eligibilityStatus: e.target.value as any }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                >
                  <option value="all">All Eligibility</option>
                  <option value="ELIGIBLE">Eligible Only</option>
                  <option value="NEEDS_INFORMATION">Needs Information</option>
                  <option value="NOT_ELIGIBLE">Not Eligible</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Country / Region</label>
                <select
                  value={filters.country}
                  onChange={e => setFilters(prev => ({ ...prev, country: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                >
                  {COUNTRIES.map(c => (
                    <option key={c.val} value={c.val}>{c.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Funding Structure</label>
                <select
                  value={filters.fundingType}
                  onChange={e => setFilters(prev => ({ ...prev, fundingType: e.target.value as any }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                >
                  <option value="all">All Funding Types</option>
                  <option value="full_funding">Full Funding</option>
                  <option value="tuition_waiver">Tuition Fee Waiver</option>
                  <option value="fixed_award">Direct Cash Grant</option>
                  <option value="partial_funding">Partial Fee Award</option>
                  <option value="loan_scholarship">Loan Scholarship</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Provider Type</label>
                <select
                  value={filters.providerCategory}
                  onChange={e => setFilters(prev => ({ ...prev, providerCategory: e.target.value as any }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                >
                  <option value="all">All Providers</option>
                  <option value="central_gov">Central Government</option>
                  <option value="state_gov">State Government</option>
                  <option value="corporate_csr">Corporate CSR</option>
                  <option value="foundation_ngo">Philanthropic NGOs</option>
                  <option value="premier_university">Premier University</option>
                  <option value="international_government">International Government</option>
                  <option value="international_university">World University</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">State</label>
                <select
                  value={filters.state}
                  onChange={e => setFilters(prev => ({ ...prev, state: e.target.value }))}
                  className="w-full p-2.5 rounded-xl border border-slate-200"
                >
                  <option value="all">All India / Any State</option>
                  {INDIAN_STATES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => {
                  handleResetFilters();
                  setShowMobileFilters(false);
                }}
                className="flex-1 py-2.5 border border-slate-200 rounded-xl font-semibold text-slate-600 text-xs"
              >
                Reset
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 py-2.5 bg-brand-600 text-white rounded-xl font-semibold text-xs"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
