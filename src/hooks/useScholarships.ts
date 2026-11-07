import { useState, useEffect, useMemo, useCallback } from 'react';
import { Scholarship, ScholarshipCategory, ProviderCategory, EducationLevel, GenderEligibility, FundingType } from '../types/scholarship';
import { EligibilityResult, EligibilityStatus } from '../types/eligibility';
import { EligibilityEngine } from '../services/eligibilityEngine';
import { StudentProfile } from '../types/student';
import { SCHOLARSHIPS_DATA } from '../data/scholarshipsData';

export interface ScholarshipFilters {
  searchQuery: string;
  category: ScholarshipCategory | 'all';
  providerCategory: ProviderCategory | 'all';
  educationLevel: EducationLevel | 'all';
  country: string;
  state: string;
  fundingType: FundingType | 'all';
  gender: GenderEligibility | 'all';
  eligibilityStatus: EligibilityStatus | 'all';
  status: 'open' | 'closed' | 'upcoming' | 'coming_soon' | 'all';
  sortBy: 'relevance' | 'deadline' | 'amount_high' | 'amount_low' | 'newest';
}

export const INITIAL_FILTERS: ScholarshipFilters = {
  searchQuery: '',
  category: 'all',
  providerCategory: 'all',
  educationLevel: 'all',
  country: 'all',
  state: 'all',
  fundingType: 'all',
  gender: 'all',
  eligibilityStatus: 'all',
  status: 'all',
  sortBy: 'relevance'
};

export function useScholarships(profile: StudentProfile | null) {
  const [scholarships, setScholarships] = useState<Scholarship[]>(SCHOLARSHIPS_DATA);
  const [loading, setLoading] = useState<boolean>(true);
  const [isFromBackend, setIsFromBackend] = useState<boolean>(false);
  const [filters, setFilters] = useState<ScholarshipFilters>(INITIAL_FILTERS);

  // Fetch from API with graceful fallback to curated offline data
  const fetchScholarships = useCallback(async () => {
    try {
      setLoading(true);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const res = await fetch('/api/scholarships', { signal: controller.signal });
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setScholarships(json.data);
          setIsFromBackend(true);
          return;
        }
      }
    } catch (e) {
      // Backend not running or offline; gracefully use rich local curated dataset
    } finally {
      setLoading(false);
    }
    setScholarships(SCHOLARSHIPS_DATA);
    setIsFromBackend(false);
  }, []);

  useEffect(() => {
    fetchScholarships();
  }, [fetchScholarships]);

  // Evaluated scholarships map
  const evaluationsMap = useMemo(() => {
    return EligibilityEngine.evaluateAllScholarships(scholarships, profile);
  }, [scholarships, profile]);

  // Combined and filtered records
  const processedScholarships = useMemo(() => {
    const combined = scholarships.map(scholarship => {
      const result = evaluationsMap.get(scholarship.id) || EligibilityEngine.evaluateScholarship(scholarship, profile);
      return { scholarship, result };
    });

    // Apply Filters
    let list = combined.filter(({ scholarship, result }) => {
      // Search
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesName = scholarship.name.toLowerCase().includes(q);
        const matchesProvider = scholarship.provider.toLowerCase().includes(q);
        const matchesDesc = scholarship.description.toLowerCase().includes(q);
        const matchesCountry = scholarship.country && scholarship.country.toLowerCase().includes(q);
        const matchesState = scholarship.state && scholarship.state.toLowerCase().includes(q);
        const matchesStreams = scholarship.coursesAndStreams.some(s => s.toLowerCase().includes(q));
        const matchesTags = scholarship.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesProvider && !matchesDesc && !matchesCountry && !matchesState && !matchesStreams && !matchesTags) {
          return false;
        }
      }

      // Country
      if (filters.country !== 'all') {
        if (filters.country === 'India') {
          if (scholarship.country !== 'India') return false;
        } else if (filters.country === 'International') {
          if (scholarship.country === 'India') return false;
        } else {
          if (scholarship.country !== filters.country) return false;
        }
      }

      // Funding Type
      if (filters.fundingType !== 'all') {
        if (scholarship.fundingType !== filters.fundingType) return false;
      }

      // Category
      if (filters.category !== 'all') {
        if (!scholarship.categories.includes(filters.category)) return false;
      }

      // Provider Category
      if (filters.providerCategory !== 'all') {
        if (scholarship.providerCategory !== filters.providerCategory) return false;
      }

      // Education Level
      if (filters.educationLevel !== 'all') {
        if (!scholarship.educationLevels.includes(filters.educationLevel)) return false;
      }

      // State
      if (filters.state !== 'all') {
        const targetState = filters.state.toLowerCase();
        const matchesStateField = scholarship.state && scholarship.state.toLowerCase() === targetState;
        const reqStates = scholarship.requirements.eligibleStates;
        const matchesReqStates = reqStates && (reqStates.includes('All India') || reqStates.some(st => st.toLowerCase() === targetState));
        if (!matchesStateField && !matchesReqStates) {
          return false;
        }
      }

      // Gender
      if (filters.gender !== 'all') {
        const reqGender = scholarship.requirements.gender;
        if (reqGender && reqGender !== 'all' && reqGender !== filters.gender) {
          return false;
        }
      }

      // Eligibility Status
      if (filters.eligibilityStatus !== 'all') {
        if (result.status !== filters.eligibilityStatus) return false;
      }

      // Application Status
      if (filters.status !== 'all') {
        if (scholarship.status !== filters.status) return false;
      }

      return true;
    });

    // Sorting
    if (filters.sortBy === 'relevance') {
      list = EligibilityEngine.rankScholarships(list);
    } else if (filters.sortBy === 'deadline') {
      list.sort((a, b) => new Date(a.scholarship.deadline).getTime() - new Date(b.scholarship.deadline).getTime());
    } else if (filters.sortBy === 'amount_high') {
      list.sort((a, b) => b.scholarship.amount - a.scholarship.amount);
    } else if (filters.sortBy === 'amount_low') {
      list.sort((a, b) => a.scholarship.amount - b.scholarship.amount);
    } else if (filters.sortBy === 'newest') {
      list.sort((a, b) => new Date(b.scholarship.lastVerifiedDate).getTime() - new Date(a.scholarship.lastVerifiedDate).getTime());
    }

    return list;
  }, [scholarships, evaluationsMap, profile, filters]);

  // Dynamic statistics
  const stats = useMemo(() => {
    let totalAvailable = scholarships.length;
    let eligibleCount = 0;
    let needsInfoCount = 0;
    let ineligibleCount = 0;
    let totalEligibleFundingValue = 0;
    let indianCount = 0;
    let internationalCount = 0;

    for (const s of scholarships) {
      if (s.country === 'India') {
        indianCount++;
      } else {
        internationalCount++;
      }

      const res = evaluationsMap.get(s.id);
      if (!res) continue;

      if (res.status === 'ELIGIBLE') {
        eligibleCount++;
        totalEligibleFundingValue += s.amount;
      } else if (res.status === 'NEEDS_INFORMATION') {
        needsInfoCount++;
      } else if (res.status === 'NOT_ELIGIBLE') {
        ineligibleCount++;
      }
    }

    return {
      totalAvailable,
      eligibleCount,
      needsInfoCount,
      ineligibleCount,
      totalEligibleFundingValue,
      indianCount,
      internationalCount
    };
  }, [scholarships, evaluationsMap]);

  return {
    scholarships,
    processedScholarships,
    loading,
    isFromBackend,
    filters,
    setFilters,
    stats,
    refreshScholarships: fetchScholarships
  };
}
