import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Download,
  Building,
  GraduationCap,
  Award,
  Globe2,
  Users,
  Search,
  BookOpen,
  CheckCircle,
  HelpCircle,
  Clock
} from 'lucide-react';
import { usePWA } from '../hooks/usePWA';
import { useScholarships } from '../hooks/useScholarships';
import { useStudentProfile } from '../hooks/useStudentProfile';
import { ScholarshipCard } from '../components/ScholarshipCard';

export const HomePage: React.FC = () => {
  const { profile } = useStudentProfile();
  const { scholarships, processedScholarships } = useScholarships(profile);
  const { isInstalled, triggerInstall } = usePWA();

  // Dynamic real stats calculated directly from verified data
  const totalFundingValue = scholarships.reduce((acc, s) => acc + s.amount, 0);
  const centralGovCount = scholarships.filter(s => s.providerCategory === 'central_gov').length;
  const corporateCount = scholarships.filter(s => s.providerCategory === 'corporate' || s.providerCategory === 'corporate_csr' || s.providerCategory === 'foundation_ngo').length;
  const stateGovCount = scholarships.filter(s => s.providerCategory === 'state_gov').length;
  const internationalCount = scholarships.filter(s => s.providerCategory === 'international' || s.providerCategory === 'international_government' || s.providerCategory === 'international_university').length;

  const featured = processedScholarships.slice(0, 3);

  const categories = [
    {
      id: 'central_gov',
      name: 'Central Government',
      count: centralGovCount,
      desc: 'National Scholarship Portal (NSP), Ministry of Education, AICTE, DST',
      icon: <Building className="text-blue-600" size={24} />
    },
    {
      id: 'corporate_csr',
      name: 'Corporate CSR & Foundations',
      count: corporateCount,
      desc: 'Tata, Reliance, Infosys, Adobe, Google & HDFC Parivartan',
      icon: <Award className="text-purple-600" size={24} />
    },
    {
      id: 'state_gov',
      name: 'State Government Schemes',
      count: stateGovCount,
      desc: '35 Indian States & UTs (Karnataka, Maharashtra, UP, WB, MP)',
      icon: <GraduationCap className="text-emerald-600" size={24} />
    },
    {
      id: 'international_government',
      name: 'International Fellowships',
      count: internationalCount,
      desc: 'Chevening, Rhodes, Fulbright, DAAD Germany, Eiffel France',
      icon: <Globe2 className="text-rose-600" size={24} />
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-900 via-navy-950 to-slate-950 text-white rounded-b-[2.5rem] shadow-xl">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-brand-200">
            <Sparkles size={14} className="text-amber-400" />
            <span>Deterministic Rule-Based Matching • Zero AI Black Boxes</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
            Your future deserves <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-200 to-indigo-100">funding.</span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Discover scholarships that match your ambitions. Explore thousands of opportunities, understand your eligibility and manage every application from one place.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/onboarding"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-base shadow-lg shadow-brand-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Find My Scholarships</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/discover"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 backdrop-blur-sm transition-all"
            >
              <span>Explore Opportunities</span>
            </Link>
          </div>

          {/* Real Dynamic Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto text-left border-t border-white/10">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-white">{scholarships.length}</div>
              <div className="text-xs text-slate-400 mt-1">Verified Scholarships</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-brand-300">
                ₹{(totalFundingValue / 10000000).toFixed(1)} Cr+
              </div>
              <div className="text-xs text-slate-400 mt-1">Live Funding Pool</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">Deterministic Rules</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-amber-300">Guest-First</div>
              <div className="text-xs text-slate-400 mt-1">No Mandatory Login</div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent PWA Install Banner */}
      {!isInstalled && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-900 via-navy-900 to-navy-950 rounded-3xl text-white shadow-xl border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-500/20 border border-brand-400/30 flex items-center justify-center text-brand-300 shrink-0">
                <Download size={28} />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                  Progressive Web App
                </span>
                <h3 className="text-xl font-bold">Install GRANTLY on your device</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Enjoy instantaneous launching, 100% offline access to your saved scholarships, and deadline alerts.
                </p>
              </div>
            </div>

            <button
              onClick={triggerInstall}
              className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-navy-900 hover:bg-slate-100 font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              <Download size={16} />
              <span>Install GRANTLY</span>
            </button>
          </div>
        </section>
      )}

      {/* Transparent Deterministic Guarantee Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full mb-3">
              <ShieldCheck size={14} />
              <span>Our Transparency Pledge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
              Why Deterministic Matching Outperforms AI Black Boxes
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Scholarship applications are high-stakes. Large Language Models hallucinate false requirements, guess income ceilings, and hide their reasoning. GRANTLY evaluates mathematical and policy rules with 100% precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <CheckCircle size={20} />
              </div>
              <h3 className="text-base font-bold text-emerald-950">1. Explicit Rule Verification</h3>
              <p className="text-xs text-emerald-900/80 leading-relaxed">
                Every income threshold, percentile requirement, and domicile boundary is tested through explicit code operators.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <HelpCircle size={20} />
              </div>
              <h3 className="text-base font-bold text-amber-950">2. Missing ≠ Ineligible</h3>
              <p className="text-xs text-amber-900/80 leading-relaxed">
                If you haven’t filled in your income or caste category, GRANTLY marks it <em>Needs Information</em> instead of rejecting you.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                <Sparkles size={20} />
              </div>
              <h3 className="text-base font-bold text-indigo-950">3. Full Explainability</h3>
              <p className="text-xs text-indigo-900/80 leading-relaxed">
                Inspect exactly what criteria you satisfy, what condition failed, and which profile field unlocks the award.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Exploration Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
              Explore by Provider & Category
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Government schemes, private trusts, and corporate initiatives in one unified platform.
            </p>
          </div>
          <Link
            to="/discover"
            className="text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
          >
            <span>View all {scholarships.length} opportunities</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/discover?providerCategory=${cat.id}`}
              className="group p-6 bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-card-hover hover:border-brand-200 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{cat.desc}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-brand-600 mt-4">
                <span>{cat.count} Schemes</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
              Featured Opportunities
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Top-ranked scholarships evaluated against your profile right now.
            </p>
          </div>
          <Link
            to="/discover"
            className="text-xs sm:text-sm font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
          >
            <span>Explore catalogue</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map(({ scholarship, result }) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
              evaluationResult={result}
            />
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-navy-900 text-white rounded-3xl shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Streamlined Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
              How GRANTLY Simplifies Your Funding
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg mx-auto sm:mx-0">
                1
              </div>
              <h3 className="text-base font-bold">Build Your Guest Profile</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Add your degree level, marks, domicile state, and family income in 2 minutes. Stored safely in your local device.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg mx-auto sm:mx-0">
                2
              </div>
              <h3 className="text-base font-bold">Know Where You Stand</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our engine immediately categorizes opportunities into Eligible, Needs Info, or Not Eligible with full line-by-line proof.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold text-lg mx-auto sm:mx-0">
                3
              </div>
              <h3 className="text-base font-bold">Track to Disbursement</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manage applications through the built-in pipeline, track document checklists, and never miss a deadline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
