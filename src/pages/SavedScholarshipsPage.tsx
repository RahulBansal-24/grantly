import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookmarkStorage } from '../services/db';
import { useStudentProfile } from '../hooks/useStudentProfile';
import { useScholarships } from '../hooks/useScholarships';
import { ScholarshipCard } from '../components/ScholarshipCard';
import { Bookmark, Search, ArrowRight } from 'lucide-react';

export const SavedScholarshipsPage: React.FC = () => {
  const { profile } = useStudentProfile();
  const { processedScholarships } = useScholarships(profile);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadSaved = async () => {
    try {
      setLoading(true);
      const bookmarks = await bookmarkStorage.getAll();
      setSavedIds(bookmarks.map(b => b.scholarshipId));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSaved();
  }, []);

  const handleBookmarkChanged = (scholarshipId: string, isSaved: boolean) => {
    if (!isSaved) {
      setSavedIds(prev => prev.filter(id => id !== scholarshipId));
    }
  };

  const savedList = processedScholarships.filter(({ scholarship }) =>
    savedIds.includes(scholarship.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900 tracking-tight">
            Saved Scholarships
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Quickly access bookmarked opportunities and monitor eligibility updates.
          </p>
        </div>

        <Link
          to="/discover"
          className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 hover:text-brand-700"
        >
          <span>Discover more</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {savedList.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mx-auto">
            <Bookmark size={28} />
          </div>
          <h3 className="text-base font-bold text-navy-900">No saved scholarships yet</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Click the bookmark icon on any scholarship card or details page to save it here for offline viewing.
          </p>
          <Link
            to="/discover"
            className="inline-block px-5 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold hover:bg-brand-500 transition-colors"
          >
            Browse Catalogue
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedList.map(({ scholarship, result }) => (
            <ScholarshipCard
              key={scholarship.id}
              scholarship={scholarship}
              evaluationResult={result}
              onBookmarkChanged={handleBookmarkChanged}
            />
          ))}
        </div>
      )}
    </div>
  );
};
