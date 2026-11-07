import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudentProfile } from '../hooks/useStudentProfile';
import { StudentProfile } from '../types/student';
import { EducationLevel, SocialCategory, GenderEligibility } from '../types/scholarship';
import {
  User,
  GraduationCap,
  IndianRupee,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Info,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu & Kashmir', 'Ladakh'
];

export const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const { profile, updateProfile } = useStudentProfile();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<StudentProfile>>(profile);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 4;

  const handleChange = (field: keyof StudentProfile, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName?.trim()) {
        errs.firstName = 'First name is helpful to personalize your matches';
      }
      if (!formData.state) {
        errs.state = 'Select your state to unlock state domicile scholarships';
      }
    } else if (step === 2) {
      if (!formData.educationLevel) {
        errs.educationLevel = 'Current education level is required to match qualifying schemes';
      }
      if (formData.percentage !== undefined && (formData.percentage < 0 || formData.percentage > 100)) {
        errs.percentage = 'Enter a valid percentage between 0 and 100';
      }
    } else if (step === 3) {
      if (formData.annualFamilyIncome !== undefined && formData.annualFamilyIncome < 0) {
        errs.annualFamilyIncome = 'Annual income cannot be negative';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = async () => {
    if (!validateStep(currentStep)) return;

    // Auto-save step to IndexedDB
    await updateProfile(formData);

    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Completed wizard! Trigger celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      navigate('/dashboard');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = async () => {
    await updateProfile(formData);
    navigate('/discover');
  };

  const stepTitles = [
    { num: 1, title: 'Personal & Domicile', icon: <User size={18} /> },
    { num: 2, title: 'Education & Academics', icon: <GraduationCap size={18} /> },
    { num: 3, title: 'Household Income', icon: <IndianRupee size={18} /> },
    { num: 4, title: 'Special Criteria', icon: <Sparkles size={18} /> },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      {/* Top Banner */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
          <ShieldCheck size={14} className="text-emerald-600" />
          <span>Guest Mode Active • Stored Locally On Your Device</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
          Setup Your Scholarship Profile
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
          We use these parameters exclusively for transparent mathematical eligibility matching. No account or password required.
        </p>
      </div>

      {/* Wizard Progress Indicator */}
      <div className="mb-8">
        <div className="grid grid-cols-4 gap-2">
          {stepTitles.map(step => {
            const isCompleted = currentStep > step.num;
            const isCurrent = currentStep === step.num;
            return (
              <div key={step.num} className="text-center">
                <div
                  className={`h-2 rounded-full mb-2 transition-all ${
                    isCompleted
                      ? 'bg-emerald-500'
                      : isCurrent
                      ? 'bg-brand-600'
                      : 'bg-slate-200'
                  }`}
                />
                <span
                  className={`hidden sm:block text-xs font-medium truncate ${
                    isCurrent ? 'text-brand-700 font-bold' : isCompleted ? 'text-emerald-700' : 'text-slate-400'
                  }`}
                >
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-10 space-y-8">
        {/* Step 1: Personal & Domicile */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-navy-900">Personal & Domicile Information</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                State schemes like Karnataka SSP and MahaDBT strictly require domicile match.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Preferred / First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName || ''}
                  onChange={e => handleChange('firstName', e.target.value)}
                  placeholder="e.g. Priya"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    errors.firstName ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200 bg-white'
                  }`}
                />
                {errors.firstName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Age (Years)
                </label>
                <input
                  type="number"
                  min="10"
                  max="45"
                  value={formData.age || ''}
                  onChange={e => handleChange('age', e.target.value ? Number(e.target.value) : undefined)}
                  placeholder="e.g. 19"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Some research/international fellowships (e.g. Rhodes) enforce age limits.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  State of Residence / Domicile *
                </label>
                <select
                  value={formData.state || ''}
                  onChange={e => handleChange('state', e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white ${
                    errors.state ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200'
                  }`}
                >
                  <option value="">Select your home state</option>
                  {INDIAN_STATES.map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
                {errors.state && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.state}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Gender
                </label>
                <select
                  value={formData.gender || ''}
                  onChange={e => handleChange('gender', e.target.value as GenderEligibility)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                >
                  <option value="">Prefer not to say</option>
                  <option value="female">Female (matches AICTE Pragati & Adobe Women in Tech)</option>
                  <option value="male">Male</option>
                  <option value="transgender">Transgender</option>
                </select>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  Enables female-specific STEM scholarships.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Social Category / Reservation
                </label>
                <select
                  value={formData.socialCategory || ''}
                  onChange={e => handleChange('socialCategory', e.target.value as SocialCategory)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                >
                  <option value="">Select category</option>
                  <option value="General">General / Open</option>
                  <option value="OBC">OBC (Other Backward Classes)</option>
                  <option value="SC">SC (Scheduled Caste)</option>
                  <option value="ST">ST (Scheduled Tribe)</option>
                  <option value="EWS">EWS (Economically Weaker Section)</option>
                  <option value="Minority">Religious Minority (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)</option>
                </select>
              </div>

              <div className="flex flex-col justify-center">
                <label className="flex items-center gap-2.5 cursor-pointer mt-2">
                  <input
                    type="checkbox"
                    checked={formData.isPersonWithDisability || false}
                    onChange={e => handleChange('isPersonWithDisability', e.target.checked)}
                    className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                  />
                  <span className="text-xs font-semibold text-slate-700">
                    Person with Benchmark Disability (PwD)
                  </span>
                </label>
                <span className="text-[10px] text-slate-400 ml-6 mt-0.5">
                  Unlocks dedicated AICTE Saksham & Central PwD grants.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Education & Academics */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-navy-900">Educational Background</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Matches qualifying degree levels and tests academic percentage cutoffs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Current Education Level *
                </label>
                <select
                  value={formData.educationLevel || ''}
                  onChange={e => handleChange('educationLevel', e.target.value as EducationLevel)}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white ${
                    errors.educationLevel ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200'
                  }`}
                >
                  <option value="">Select current enrollment</option>
                  <option value="high_school">Class 11 / 12 (High School)</option>
                  <option value="diploma">Polytechnic / Diploma</option>
                  <option value="undergraduate">Undergraduate Degree (B.Tech, B.Sc, B.Com, MBBS, etc.)</option>
                  <option value="postgraduate">Postgraduate Degree (M.Tech, M.Sc, MBA, etc.)</option>
                  <option value="phd">PhD / Doctoral Research</option>
                  <option value="vocational">ITI / Vocational</option>
                </select>
                {errors.educationLevel && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.educationLevel}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Degree / Program Title
                </label>
                <input
                  type="text"
                  value={formData.degreeCourse || ''}
                  onChange={e => handleChange('degreeCourse', e.target.value)}
                  placeholder="e.g. B.Tech Computer Science & Engg"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Recent Examination Percentage (%) *
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={formData.percentage !== undefined ? formData.percentage : ''}
                  onChange={e => handleChange('percentage', e.target.value ? parseFloat(e.target.value) : undefined)}
                  placeholder="e.g. 84.5"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                    errors.percentage ? 'border-rose-300 bg-rose-50/30' : 'border-slate-200'
                  }`}
                />
                {errors.percentage ? (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.percentage}</p>
                ) : (
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Your percentage in Class 12 or latest college semester.
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  CGPA (If applicable, 10-point scale)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={formData.cgpa !== undefined ? formData.cgpa : ''}
                  onChange={e => handleChange('cgpa', e.target.value ? parseFloat(e.target.value) : undefined)}
                  placeholder="e.g. 8.75"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  College / University Name
                </label>
                <input
                  type="text"
                  value={formData.institutionName || ''}
                  onChange={e => handleChange('institutionName', e.target.value)}
                  placeholder="e.g. IIT Bombay, Delhi University"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Institution Type
                </label>
                <select
                  value={formData.institutionType || 'Any'}
                  onChange={e => handleChange('institutionType', e.target.value as any)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
                >
                  <option value="Any">Any / Not sure</option>
                  <option value="Government">Government / State University</option>
                  <option value="Aided">Government-Aided</option>
                  <option value="Private">Private Autonomous / Deemed</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Household Income */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-navy-900">Financial Information</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Over 70% of government schemes enforce income ceilings (e.g. ≤ ₹2.5L or ≤ ₹8L).
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Gross Annual Household Income (INR ₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-2.5 text-slate-400 font-semibold text-sm">₹</span>
                  <input
                    type="number"
                    step="10000"
                    min="0"
                    value={formData.annualFamilyIncome !== undefined ? formData.annualFamilyIncome : ''}
                    onChange={e => handleChange('annualFamilyIncome', e.target.value ? parseInt(e.target.value, 10) : undefined)}
                    placeholder="250000"
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-mono"
                  />
                </div>
                {formData.annualFamilyIncome ? (
                  <p className="text-xs font-medium text-brand-600 mt-1.5">
                    ₹{formData.annualFamilyIncome.toLocaleString('en-IN')} per annum
                  </p>
                ) : (
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    Combined family income as reflected in official Tehsildar/Revenue certificate.
                  </span>
                )}
              </div>

              {/* Quick Preset Buttons */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                  Or select typical bracket:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'Below ₹1 Lakh', val: 95000 },
                    { label: '₹1L – ₹2.5 Lakhs', val: 200000 },
                    { label: '₹2.5L – ₹6 Lakhs', val: 450000 },
                    { label: '₹6L – ₹8 Lakhs', val: 750000 },
                  ].map(bracket => (
                    <button
                      key={bracket.label}
                      type="button"
                      onClick={() => handleChange('annualFamilyIncome', bracket.val)}
                      className={`p-2.5 text-xs rounded-xl border text-center transition-all ${
                        formData.annualFamilyIncome === bracket.val
                          ? 'border-brand-500 bg-brand-50 font-bold text-brand-700'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {bracket.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-slate-600">
                <Info size={16} className="text-brand-500 shrink-0 mt-0.5" />
                <p>
                  <strong>Why we ask:</strong> Scholarships like PM-USP require ≤ ₹4.5L, while Post-Matric SC/ST allows ≤ ₹2.5L and corporate CSR (e.g. Reliance) allows up to ₹15L.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Special Criteria */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-navy-900">Special Eligibility Conditions</h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Optional attributes that unlock exclusive priority quotas.
              </p>
            </div>

            <div className="space-y-3">
              <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isFirstGenerationLearner || false}
                  onChange={e => handleChange('isFirstGenerationLearner', e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                />
                <div>
                  <span className="text-xs font-bold text-navy-900 block">First Generation Graduate / Learner</span>
                  <span className="text-[11px] text-slate-500">
                    You are the first person in your immediate family to attend college or university.
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isSingleGirlChild || false}
                  onChange={e => handleChange('isSingleGirlChild', e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                />
                <div>
                  <span className="text-xs font-bold text-navy-900 block">Single Girl Child in Family</span>
                  <span className="text-[11px] text-slate-500">
                    Matches UGC Swami Vivekananda Single Girl Child Fellowship.
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3.5 rounded-2xl border border-slate-200 hover:border-brand-300 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.hasSportsDistinction || false}
                  onChange={e => handleChange('hasSportsDistinction', e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-slate-300"
                />
                <div>
                  <span className="text-xs font-bold text-navy-900 block">Sports Quota / State/National Athlete</span>
                  <span className="text-[11px] text-slate-500">
                    Represented your state or nation in recognized athletic competitions.
                  </span>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSkip}
              className="text-xs text-slate-400 hover:text-slate-600 font-medium"
            >
              Skip and browse without profile
            </button>
          )}

          <div className="flex items-center gap-3 ml-auto">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-500/20 transition-all active:scale-95"
            >
              <span>{currentStep === totalSteps ? 'View Matching Scholarships' : 'Save & Continue'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
