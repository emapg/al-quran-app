import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight } from 'lucide-react';
import type { Chapter } from '../types/quran';

export function Home() {
  const { data: chapters, isLoading } = useQuery<Chapter[]>({
    queryKey: ['chapters'],
    queryFn: async () => {
      const response = await fetch('https://api.alquran.cloud/v1/surah');
      const data = await response.json();
      return data.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {chapters?.map((chapter) => (
        <Link
          key={chapter.id}
          to={`/chapter/${chapter.id}`}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {chapter.englishName}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {chapter.englishNameTranslation}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {chapter.revelationType} • {chapter.numberOfAyahs} verses
              </p>
            </div>
            <div className="text-2xl font-arabic text-emerald-600">
              {chapter.name}
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <ChevronRight className="h-5 w-5 text-emerald-600" />
          </div>
        </Link>
      ))}
    </div>
  );
}