import React, { useState, useEffect } from 'react';
import { useStudentProfile } from '../hooks/useStudentProfile';
import { useScholarships } from '../hooks/useScholarships';
import { StudentProfile } from '../types/student';
import { EducationLevel, SocialCategory, GenderEligibility } from '../types/scholarship';
import {
  User,
  GraduationCap,
  IndianRupee,
  Sparkles,
  Save,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu & Kashmir'
];

export const ProfilePage: React.FC = () => {
  const { profile, updateProfile, completeness, resetProfile } = useStudentProfile();
  const [formData, setFormData] = useState<Partial<StudentProfile>>(profile);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'personal' | 'educational' | 'financial' | 'special'>('personal');

  // Automatically keep formData synchronized with saved profile data
  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const { stats } = useScholarships(formData as StudentProfile);

  const handleChange = (field: keyof StudentProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile(formData);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-2">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Guest Profile • Local IndexedDB</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            Student Eligibility Profile
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Keep your profile accurate to maintain precise, deterministic eligibility calculations.
          </p>
        </div>

        {/* Live Matching Impact Pill */}
        <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-subtle flex items-center gap-4 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] font-bold uppercase">Live Verdicts</span>
            <span className="font-extrabold text-emerald-700">{stats.eligibleCount} Eligible</span>
            <span className="text-slate-400 mx-1">•</span>
            <span className="font-extrabold text-amber-700">{stats.needsInfoCount} Need Info</span>
          </div>
          <div className="h-8 w-px bg-slate-200" />
          <div>
            <span className="text-slate-400 block text-[10px] font-bold uppercase">Profile Score</span>
            <span className="font-extrabold text-brand-600">{completeness.score}% Complete</span>
          </div>
        </div>
      </div>

      {/* Missing Information Quick-Add Alert */}
      {completeness.missingFields.length > 0 && (
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800">
            <AlertCircle size={15} />
            <span>Information Needed for 100% Determination ({completeness.missingFields.length} pending)</span>
          </div>
          <p className="text-xs opacity-90">
            Adding the following attributes removes "Needs Information" labels and unlocks accurate match ranking:
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {completeness.missingFields.map(field => (
              <span
                key={field.key}
                className="px-2.5 py-1 rounded-lg bg-white/80 border border-amber-300 text-amber-900 text-xs font-semibold"
                title={field.reason}
              >
                {field.label} ({field.importance} priority)
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-1">
        {[
          { id: 'personal', label: 'Personal & Domicile', icon: <User size={15} /> },
          { id: 'educational', label: 'Education & Academics', icon: <GraduationCap size={15} /> },
          { id: 'financial', label: 'Household Income', icon: <IndianRupee size={15} /> },
          { id: 'special', label: 'Special Quotas', icon: <Sparkles size={15} /> },
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-2xs font-bold'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Main Form */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card space-y-8">
        {/* Tab 1: Personal */}
        {activeTab === 'personal' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-navy-900">Personal & Domicile Information</h2>
              <p className="text-xs text-slate-500">Essential for state residency and demographic matching.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">First Name</label>
                <input
                  type="text"
                  value={formData.firstName || ''}
                  onChange={e => handleChange('firstName', e.target.value)}
                  placeholder="e.g. Rahul"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName || ''}
                  onChange={e => handleChange('lastName', e.target.value)}
                  placeholder="e.g. Sharma"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth || ''}
                  onChange={e => {
                    const dob = e.target.value;
                    handleChange('dateOfBirth', dob);
                    if (dob) {
                      const birthYear = new Date(dob).getFullYear();
                      const thisYear = new Date().getFullYear();
                      if (birthYear > 1900 && thisYear >= birthYear) {
                        handleChange('age', thisYear - birthYear);
                      }
                    }
                  }}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Age</label>
                <input
                  type="number"
                  value={formData.age || ''}
                  onChange={e => handleChange('age', e.target.value ? Number(e.target.value) : undefined)}
                  placeholder="e.g. 20"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">State of Residence</label>
                <select
                  value={formData.state || ''}
                  onChange={e => handleChange('state', e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Select State</option>
                  {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Gender</label>
                <select
                  value={formData.gender || ''}
                  onChange={e => handleChange('gender', e.target.value as GenderEligibility)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Prefer not to say</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="transgender">Transgender</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Social Category</label>
                <select
                  value={formData.socialCategory || ''}
                  onChange={e => handleChange('socialCategory', e.target.value as SocialCategory)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="EWS">EWS</option>
                  <option value="Minority">Minority</option>
                </select>
              </div>

              <div className="flex flex-col justify-center">
                <label className="flex items-center gap-2 cursor-pointer mt-3">
                  <input
                    type="checkbox"
                    checked={formData.isPersonWithDisability || false}
                    onChange={e => handleChange('isPersonWithDisability', e.target.checked)}
                    className="w-4 h-4 rounded text-brand-600 border-slate-300"
                  />
                  <span className="text-xs font-semibold text-slate-700">Person with Disability</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Educational */}
        {activeTab === 'educational' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-navy-900">Education & Academics</h2>
              <p className="text-xs text-slate-500">Degree, course, and percentage criteria.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Current Education Level</label>
                <select
                  value={formData.educationLevel || ''}
                  onChange={e => handleChange('educationLevel', e.target.value as EducationLevel)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Select Level</option>
                  <option value="high_school">Class 11 / 12</option>
                  <option value="diploma">Diploma / Polytechnic</option>
                  <option value="undergraduate">Undergraduate Degree</option>
                  <option value="postgraduate">Postgraduate Degree</option>
                  <option value="phd">PhD / Doctoral</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Degree Title</label>
                <input
                  type="text"
                  value={formData.degreeCourse || ''}
                  onChange={e => handleChange('degreeCourse', e.target.value)}
                  placeholder="e.g. B.Tech Computer Science"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Stream / Field of Study</label>
                <select
                  value={formData.stream || ''}
                  onChange={e => handleChange('stream', e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Select Stream / Field</option>
                  <option value="Engineering & Technology">Engineering & Technology</option>
                  <option value="Medicine & Health Sciences">Medicine & Health Sciences</option>
                  <option value="Commerce & Management">Commerce & Management</option>
                  <option value="Natural & Pure Sciences">Natural & Pure Sciences</option>
                  <option value="Humanities & Social Sciences">Humanities & Social Sciences</option>
                  <option value="Law & Legal Studies">Law & Legal Studies</option>
                  <option value="Agriculture & Veterinary">Agriculture & Veterinary</option>
                  <option value="Polytechnic / Vocational">Polytechnic / Vocational</option>
                  <option value="General Studies">General Studies</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Current Year of Study</label>
                <select
                  value={formData.currentAcademicYear !== undefined ? formData.currentAcademicYear : ''}
                  onChange={e => handleChange('currentAcademicYear', e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year / Fresher</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5">5th Year</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Recent Exam Percentage (%)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={formData.percentage !== undefined ? formData.percentage : ''}
                  onChange={e => handleChange('percentage', e.target.value ? parseFloat(e.target.value) : undefined)}
                  placeholder="82.5"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Previous Exam Percentage (10th / 12th %)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={formData.previousExamPercentage !== undefined ? formData.previousExamPercentage : ''}
                  onChange={e => handleChange('previousExamPercentage', e.target.value ? parseFloat(e.target.value) : undefined)}
                  placeholder="85.0"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">CGPA (10-Point Scale)</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={formData.cgpa !== undefined ? formData.cgpa : ''}
                  onChange={e => handleChange('cgpa', e.target.value ? parseFloat(e.target.value) : undefined)}
                  placeholder="8.5"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Institution Name</label>
                <input
                  type="text"
                  value={formData.institutionName || ''}
                  onChange={e => handleChange('institutionName', e.target.value)}
                  placeholder="University / College"
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Institution Type</label>
                <select
                  value={formData.institutionType || 'Any'}
                  onChange={e => handleChange('institutionType', e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:ring-2 focus:ring-brand-500"
                >
                  <option value="Any">Any / Not Specified</option>
                  <option value="Government">Government / State University</option>
                  <option value="Aided">Government-Aided</option>
                  <option value="Private">Private Autonomous</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Financial */}
        {activeTab === 'financial' && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-navy-900">Financial Information</h2>
              <p className="text-xs text-slate-500">Gross household income for need-based verification.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Annual Household Income (₹ INR)
              </label>
              <div className="relative max-w-md">
                <span className="absolute left-3 top-2.5 text-slate-400 font-bold text-xs">₹</span>
                <input
                  type="number"
                  step="10000"
                  value={formData.annualFamilyIncome !== undefined ? formData.annualFamilyIncome : ''}
                  onChange={e => handleChange('annualFamilyIncome', e.target.value ? parseInt(e.target.value, 10) : undefined)}
                  className="w-full pl-7 pr-3 py-2.5 rounded-xl border border-slate-200 text-xs font-mono focus:ring-2 focus:ring-brand-500"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Current value:{' '}
                <strong>
                  {formData.annualFamilyIncome ? `₹${formData.annualFamilyIncome.toLocaleString('en-IN')}` : 'Not set'}
                </strong>
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Special */}
        {activeTab === 'special' && (
          <div className="space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-navy-900">Special Criteria</h2>
              <p className="text-xs text-slate-500">Specific quota and affirmative action attributes.</p>
            </div>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                checked={formData.isFirstGenerationLearner || false}
                onChange={e => handleChange('isFirstGenerationLearner', e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 border-slate-300"
              />
              <div>
                <span className="text-xs font-semibold text-slate-800 block">First Generation Graduate in Family</span>
                <span className="text-[11px] text-slate-500">First member of your immediate family pursuing post-secondary education</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                checked={formData.isSingleGirlChild || false}
                onChange={e => handleChange('isSingleGirlChild', e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 border-slate-300"
              />
              <div>
                <span className="text-xs font-semibold text-slate-800 block">Single Girl Child in Family</span>
                <span className="text-[11px] text-slate-500">Matches specialized national and state girl child education schemes</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                checked={formData.isOrphan || false}
                onChange={e => handleChange('isOrphan', e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 border-slate-300"
              />
              <div>
                <span className="text-xs font-semibold text-slate-800 block">Orphan Candidate</span>
                <span className="text-[11px] text-slate-500">Unlocks designated orphan and child welfare quota schemes</span>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition-colors">
              <input
                type="checkbox"
                checked={formData.hasSportsDistinction || false}
                onChange={e => handleChange('hasSportsDistinction', e.target.checked)}
                className="w-4 h-4 rounded text-brand-600 border-slate-300"
              />
              <div>
                <span className="text-xs font-semibold text-slate-800 block">State / National Level Sports Distinction</span>
                <span className="text-[11px] text-slate-500">Eligible for SAI, corporate CSR sports foundations and athletic awards</span>
              </div>
            </label>
          </div>
        )}

        {/* Submit Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            {saveSuccess && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                <CheckCircle2 size={14} />
                <span>Profile updated & matching re-evaluated!</span>
              </span>
            )}
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <Save size={16} />
            <span>Save Profile Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};
