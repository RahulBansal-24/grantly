import { useState, useEffect, useCallback } from 'react';
import { StudentProfile } from '../types/student';
import { profileStorage, DEFAULT_GUEST_PROFILE } from '../services/db';

export interface ProfileCompleteness {
  score: number;
  completedFields: string[];
  missingFields: { key: keyof StudentProfile; label: string; importance: 'high' | 'medium' | 'low'; reason: string }[];
}

export function useStudentProfile() {
  const [profile, setProfile] = useState<StudentProfile>(DEFAULT_GUEST_PROFILE);
  const [loading, setLoading] = useState<boolean>(true);

  const loadProfile = useCallback(async () => {
    try {
      setLoading(true);
      const data = await profileStorage.getProfile();
      if (data) {
        setProfile(data);
      } else {
        const initial = await profileStorage.saveProfile(DEFAULT_GUEST_PROFILE);
        setProfile(initial);
      }
    } catch (err) {
      console.error('Error loading student profile:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  const updateProfile = useCallback(async (updates: Partial<StudentProfile>) => {
    const updated = await profileStorage.saveProfile(updates);
    setProfile(updated);
    return updated;
  }, []);

  const resetProfile = useCallback(async () => {
    await profileStorage.clearProfile();
    const fresh = await profileStorage.saveProfile(DEFAULT_GUEST_PROFILE);
    setProfile(fresh);
    return fresh;
  }, []);

  const getCompleteness = useCallback((): ProfileCompleteness => {
    const checks: { key: keyof StudentProfile; label: string; weight: number; importance: 'high' | 'medium' | 'low'; reason: string }[] = [
      { key: 'educationLevel', label: 'Education Level', weight: 20, importance: 'high', reason: 'Required by 100% of scholarships to match class/degree' },
      { key: 'percentage', label: 'Academic Percentage / Score', weight: 20, importance: 'high', reason: 'Determines merit thresholds (typically 60-80%)' },
      { key: 'annualFamilyIncome', label: 'Annual Household Income', weight: 20, importance: 'high', reason: 'Crucial for government & CSR need-based grants' },
      { key: 'state', label: 'State of Residence', weight: 15, importance: 'high', reason: 'Unlocks state-specific domicile schemes' },
      { key: 'gender', label: 'Gender', weight: 10, importance: 'medium', reason: 'Matches special initiatives for female scholars' },
      { key: 'socialCategory', label: 'Social Category', weight: 10, importance: 'medium', reason: 'Unlocks reserved category benefits (SC/ST/OBC/EWS)' },
      { key: 'degreeCourse', label: 'Degree / Course Title', weight: 5, importance: 'low', reason: 'Fine-tunes professional & STEM scheme matches' },
    ];

    let earnedScore = 0;
    const completedFields: string[] = [];
    const missingFields: ProfileCompleteness['missingFields'] = [];

    for (const check of checks) {
      const val = profile[check.key];
      const hasValue = val !== undefined && val !== null && val !== '';
      if (hasValue) {
        earnedScore += check.weight;
        completedFields.push(check.label);
      } else {
        missingFields.push({
          key: check.key,
          label: check.label,
          importance: check.importance,
          reason: check.reason
        });
      }
    }

    return {
      score: Math.min(100, Math.round(earnedScore)),
      completedFields,
      missingFields
    };
  }, [profile]);

  return {
    profile,
    loading,
    updateProfile,
    resetProfile,
    reloadProfile: loadProfile,
    completeness: getCompleteness()
  };
}
