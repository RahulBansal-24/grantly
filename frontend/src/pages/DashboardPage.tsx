import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStudentProfile } from '../hooks/useStudentProfile';
import { useScholarships } from '../hooks/useScholarships';
import { applicationStorage, bookmarkStorage } from '../services/db';
import { ApplicationRecord, SavedScholarship } from '../types/student';
import { ScholarshipCard } from '../components/ScholarshipCard';
import {
  CheckCircle2,
  AlertCircle,
  XCircle,
  Bookmark,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  User,
  ShieldAlert,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export const DashboardPage: React.FC = () => {
  const { profile, completeness } = useStudentProfile();
  const { scholarships, processedScholarships, stats } = useScholarships(profile);
  const [applications, setApplications] = useState<ApplicationRecord[]>([]);
  const [savedCount, setSavedCount] = useState<number>(0);

  useEffect(() => {
    applicationStorage.getAll().then(setApplications);
    bookmarkStorage.getAll().then(saved => setSavedCount(saved.length));
  }, []);

  // Application Pipeline Breakdown
  const appStatusCounts = {
    planning: applications.filter(a => a.status === 'planning').length,
    applied: applications.filter(a => a.status === 'applied').length,
    under_review: applications.filter(a => a.status === 'under_review').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length
  };

  // Recommendations: Best matches sorted by eligibility and relevance
  const recommendations = processedScholarships.slice(0, 3);

  // Closing Soon: Deadlines within 30 days
  const now = new Date().getTime();
  const closingSoon = processedScholarships
    .filter(({ scholarship }) => {
      const d = new Date(scholarship.deadline).getTime();
      const diffDays = Math.ceil((d - now) / (1000 * 60 * 60 * 24));
      return diffDays >= 0 && diffDays <= 45;
    })
    .sort((a, b) => new Date(a.scholarship.deadline).getTime() - new Date(b.scholarship.deadline).getTime())
    .slice(0, 4);

  // Chart data for Eligibility Distribution
  const eligibilityChartData = [
    { name: 'Eligible', count: stats.eligibleCount, color: '#10B981' },
    { name: 'Needs Info', count: stats.needsInfoCount, color: '#F59E0B' },
    { name: 'Ineligible', count: stats.ineligibleCount, color: '#EF4444' }
  ];

  const pipelineChartData = [
    { stage: 'Planning', count: appStatusCounts.planning },
    { stage: 'Applied', count: appStatusCounts.applied },
    { stage: 'Review', count: appStatusCounts.under_review },
    { stage: 'Approved', count: appStatusCounts.approved },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Welcome & Profile Completeness Banner */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-950 to-brand-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-navy-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-brand-200">
            <User size={13} />
            <span>Guest Profile • Local Storage</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Welcome back, {profile.firstName || 'Student'}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Your personalized dashboard updates continuously as you modify your academic and income attributes.
          </p>
        </div>

        {/* Profile Completeness Gauge */}
        <div className="w-full md:w-auto bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 shrink-0">
          <div className="relative w-14 h-14 flex items-center justify-center">
            <svg className="w-14 h-14 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="4"
                className="text-white/20"
                fill="transparent"
              />
              <circle
                cx="28"
                cy="28"
                r="22"
                stroke="currentColor"
                strokeWidth="4"
                className="text-brand-400"
                fill="transparent"
                strokeDasharray={138.2}
                strokeDashoffset={138.2 * (1 - completeness.score / 100)}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-xs font-bold text-white">
              {completeness.score}%
            </span>
          </div>
          <div>
            <div className="text-xs font-bold text-white">Profile Strength</div>
            <div className="text-[11px] text-slate-300">
              {completeness.missingFields.length > 0
                ? `${completeness.missingFields.length} attributes pending`
                : 'All primary criteria verified'}
            </div>
            <Link
              to="/profile"
              className="text-[11px] font-semibold text-brand-300 hover:text-white inline-flex items-center gap-1 mt-1"
            >
              <span>Update Profile</span>
              <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Dynamic Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Total Available */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-subtle">
          <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Available</div>
          <div className="text-2xl font-black text-navy-900 mt-1">{stats.totalAvailable}</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Total scholarships</div>
        </div>

        {/* Eligible */}
        <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 shadow-subtle">
          <div className="text-emerald-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <CheckCircle2 size={13} />
            <span>Eligible</span>
          </div>
          <div className="text-2xl font-black text-emerald-800 mt-1">{stats.eligibleCount}</div>
          <div className="text-[11px] text-emerald-700 mt-0.5">Verified matches</div>
        </div>

        {/* Needs Information */}
        <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200 shadow-subtle">
          <div className="text-amber-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <AlertCircle size={13} />
            <span>Needs Info</span>
          </div>
          <div className="text-2xl font-black text-amber-800 mt-1">{stats.needsInfoCount}</div>
          <div className="text-[11px] text-amber-700 mt-0.5">Pending fields</div>
        </div>

        {/* Not Eligible */}
        <div className="p-4 bg-rose-50/60 rounded-2xl border border-rose-200 shadow-subtle">
          <div className="text-rose-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <XCircle size={13} />
            <span>Ineligible</span>
          </div>
          <div className="text-2xl font-black text-rose-800 mt-1">{stats.ineligibleCount}</div>
          <div className="text-[11px] text-rose-700 mt-0.5">Rules not met</div>
        </div>

        {/* Saved Bookmarks */}
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-subtle">
          <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
            <Bookmark size={13} />
            <span>Saved</span>
          </div>
          <div className="text-2xl font-black text-navy-900 mt-1">{savedCount}</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Bookmarked</div>
        </div>

        {/* In Progress Applications */}
        <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-200 shadow-subtle">
          <div className="text-indigo-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
            <FileText size={13} />
            <span>Tracking</span>
          </div>
          <div className="text-2xl font-black text-indigo-900 mt-1">{applications.length}</div>
          <div className="text-[11px] text-indigo-700 mt-0.5">In pipeline</div>
        </div>
      </div>

      {/* Visual Analytics & Potential Funding Pool */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Funding Pool Overview */}
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-subtle flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                Funding Potential
              </span>
              <TrendingUp size={18} className="text-brand-600" />
            </div>

            <h3 className="text-sm font-semibold text-slate-500">
              Potential Eligible Funding Pool
            </h3>
            <div className="text-3xl font-black text-navy-900 mt-1 font-mono">
              ₹{stats.totalEligibleFundingValue.toLocaleString('en-IN')}
            </div>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed">
              Calculated across your currently verified <strong>{stats.eligibleCount} eligible scholarships</strong>.
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 mt-4">
            <ShieldAlert size={14} className="text-slate-400 inline mr-1" />
            <span>
              Disclaimer: Potential funding indicates the combined maximum award value if awarded. Disbursement depends on official institutional and sponsoring body scrutiny.
            </span>
          </div>
        </div>

        {/* Eligibility Distribution Recharts Pie */}
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-subtle">
          <h3 className="text-sm font-bold text-navy-900 mb-1">
            Eligibility Distribution
          </h3>
          <p className="text-xs text-slate-500 mb-4">Real-time status breakdown for current profile</p>

          <div className="h-44 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={eligibilityChartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="count"
                >
                  {eligibilityChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-around text-xs mt-2 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1 font-medium text-emerald-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Eligible: {stats.eligibleCount}
            </span>
            <span className="flex items-center gap-1 font-medium text-amber-700">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Info Needed: {stats.needsInfoCount}
            </span>
            <span className="flex items-center gap-1 font-medium text-rose-700">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Ineligible: {stats.ineligibleCount}
            </span>
          </div>
        </div>

        {/* Application Pipeline Recharts Bar */}
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-subtle">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-bold text-navy-900">Application Pipeline</h3>
            <Link to="/applications" className="text-xs font-semibold text-brand-600 hover:underline">
              Manage Tracker
            </Link>
          </div>
          <p className="text-xs text-slate-500 mb-4">Current stage of your tracked applications</p>

          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipelineChartData}>
                <XAxis dataKey="stage" stroke="#888888" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={11} tickLine={false} axisLine={false} allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#6366F1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="text-center text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">
            {applications.length === 0 ? (
              <span>No applications logged yet. Track your first from the catalogue.</span>
            ) : (
              <span>{applications.length} applications actively managed</span>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Opportunities */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy-900 tracking-tight">
              Top Recommendations for You
            </h2>
            <p className="text-xs text-slate-500">
              Ranked deterministically by verified eligibility and relevance score
            </p>
          </div>
          <Link
            to="/discover"
            className="text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map(({ scholarship, result }) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
              evaluationResult={result}
            />
          ))}
        </div>
      </div>

      {/* Deadline Tracker Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-subtle p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-amber-500" />
            <h2 className="text-base font-bold text-navy-900">Upcoming Deadlines (Closing Soon)</h2>
          </div>
          <Link to="/discover?sortBy=deadline" className="text-xs font-semibold text-brand-600 hover:underline">
            Sort all by deadline
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="pb-3">Scholarship</th>
                <th className="pb-3">Provider</th>
                <th className="pb-3">Award</th>
                <th className="pb-3">Your Status</th>
                <th className="pb-3">Deadline</th>
                <th className="pb-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {closingSoon.map(({ scholarship, result }) => {
                const d = new Date(scholarship.deadline);
                const diffDays = Math.ceil((d.getTime() - now) / (1000 * 60 * 60 * 24));
                return (
                  <tr key={scholarship.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 pr-4 font-semibold text-navy-900 max-w-xs truncate">
                      <Link to={`/scholarships/${scholarship.id}`} className="hover:text-brand-600">
                        {scholarship.name}
                      </Link>
                    </td>
                    <td className="py-3.5 pr-4 text-slate-500 truncate max-w-[150px]">
                      {scholarship.provider}
                    </td>
                    <td className="py-3.5 pr-4 font-bold text-navy-900 whitespace-nowrap">
                      {scholarship.formattedAmount}
                    </td>
                    <td className="py-3.5 pr-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          result.status === 'ELIGIBLE'
                            ? 'bg-emerald-100 text-emerald-800'
                            : result.status === 'NOT_ELIGIBLE'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {result.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-3.5 pr-4 whitespace-nowrap font-medium">
                      <span className={diffDays <= 15 ? 'text-rose-600 font-bold' : 'text-slate-700'}>
                        {scholarship.deadline} ({diffDays} days left)
                      </span>
                    </td>
                    <td className="py-3.5 text-right whitespace-nowrap">
                      <Link
                        to={`/scholarships/${scholarship.id}`}
                        className="text-brand-600 hover:text-brand-700 font-semibold"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
