import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search as SearchIcon } from 'lucide-react';
import { VerseView } from '../components/reader/VerseView';
import type { Verse } from '../types';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: results, isLoading } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: async () => {
      if (!searchTerm) return [];
      const response = await fetch(
        `https://api.alquran.cloud/v1/search/${encodeURIComponent(searchTerm)}/all/en`
      );
      const data = await response.json();
      return data.data.matches as Verse[];
    },
    enabled: searchTerm.length > 2,
  });

  return (
    <div>
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search the Quran..."
            className="w-full px-4 py-3 pl-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:text-white"
          />
          <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
        </div>
      )}

      <div className="space-y-6">
        {results?.map((verse) => (
          <VerseView
            key={verse.number}
            verse={verse}
            translations={[verse.translation]}
            showTafsir={false}
          />
        ))}
      </div>
    </div>
  );
}