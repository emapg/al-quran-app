import React from 'react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';
import { ArabicText } from './ArabicText';
import { TranslationView } from './TranslationView';
import { VerseActions } from './VerseActions';
import type { Verse } from '../../types';

interface VerseViewProps {
  verse: Verse;
  translations: string[];
  showTafsir: boolean;
}

export function VerseView({ verse, translations, showTafsir }: VerseViewProps) {
  const { play, isPlaying, currentVerse } = useAudioPlayer();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <VerseActions
          verse={verse}
          isPlaying={isPlaying && currentVerse === verse.number}
          onPlay={() => play(verse.number)}
        />
      </div>

      <ArabicText text={verse.text} verseNumber={verse.number} />

      <TranslationView
        translations={translations}
        showTafsir={showTafsir}
        verseId={verse.number}
      />
    </div>
  );
}