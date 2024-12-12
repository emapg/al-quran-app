import React from 'react';
import { Bookmark, Play, Pause, Share2, Book } from 'lucide-react';
import { useQuranStore } from '../../store/useQuranStore';
import type { Verse } from '../../types';

interface VerseActionsProps {
  verse: Verse;
  isPlaying: boolean;
  onPlay: () => void;
}

export function VerseActions({ verse, isPlaying, onPlay }: VerseActionsProps) {
  const { bookmarks, toggleBookmark } = useQuranStore();
  const isBookmarked = bookmarks.includes(verse.number);

  return (
    <div className="flex space-x-2">
      <button
        onClick={onPlay}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <Pause className="h-5 w-5 text-emerald-600" />
        ) : (
          <Play className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        )}
      </button>
      
      <button
        onClick={() => toggleBookmark(verse.number)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
      >
        <Bookmark
          className={`h-5 w-5 ${
            isBookmarked ? 'text-emerald-600' : 'text-gray-600 dark:text-gray-300'
          }`}
          fill={isBookmarked ? 'currentColor' : 'none'}
        />
      </button>

      <button
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Show tafsir"
      >
        <Book className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>

      <button
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Share verse"
      >
        <Share2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
}