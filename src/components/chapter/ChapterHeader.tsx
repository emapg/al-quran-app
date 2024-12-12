import React from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Chapter } from '../../types';

interface ChapterHeaderProps {
  chapter: Chapter;
}

export function ChapterHeader({ chapter }: ChapterHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <Link
          to="/"
          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Chapters
        </Link>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <Info className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {chapter.englishName}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          {chapter.englishNameTranslation}
        </p>
        <div className="text-4xl font-arabic text-emerald-600 mb-4">
          {chapter.name}
        </div>
        <div className="flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{chapter.revelationType}</span>
          <span>•</span>
          <span>{chapter.numberOfAyahs} Verses</span>
        </div>
      </div>
    </div>
  );
}