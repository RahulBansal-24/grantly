import { ProviderCategory } from '../types/scholarship';

export const INDIAN_STATES: readonly string[] = [
  'All India', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh',
  'Puducherry', 'Chandigarh', 'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli and Daman and Diu'
];

export interface CountryOption {
  val: string;
  label: string;
}

export const COUNTRIES: readonly CountryOption[] = [
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

export const PROVIDER_CATEGORY_CONFIG: Record<string, { label: string; color: string }> = {
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

export const FUNDING_TYPE_CONFIG: Record<string, string> = {
  full_funding: 'Full Funding',
  fully_funded: 'Full Funding',
  tuition_waiver: 'Tuition Waiver',
  fixed_award: 'Direct Grant',
  stipend: 'Direct Grant',
  partial_funding: 'Partial Award',
  loan_scholarship: 'Loan Scholarship'
};
