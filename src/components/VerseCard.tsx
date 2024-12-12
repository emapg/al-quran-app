import React from 'react';
import { Bookmark, Play, Share2 } from 'lucide-react';
import { Verse } from '../types/quran';
import { useQuranStore } from '../store/useQuranStore';

interface VerseCardProps {
  verse: Verse;
  onPlay: () => void;
}

export function VerseCard({ verse, onPlay }: VerseCardProps) {
  const { bookmarks, toggleBookmark, preferences } = useQuranStore();
  const isBookmarked = bookmarks.includes(verse.number);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded-full text-sm">
          {verse.number}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={onPlay}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Play className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={() => toggleBookmark(verse.number)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Bookmark
              className={`h-5 w-5 ${
                isBookmarked
                  ? 'text-emerald-600'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              fill={isBookmarked ? 'currentColor' : 'none'}
            />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <div
        className="text-right mb-4 font-arabic"
        style={{ fontSize: `${preferences.fontSize}px` }}
      >
        {verse.text}
      </div>

      <div className="text-gray-600 dark:text-gray-300 mb-2">
        {verse.transliteration}
      </div>

      <div className="text-gray-800 dark:text-gray-100">{verse.translation}</div>
    </div>
  );
}