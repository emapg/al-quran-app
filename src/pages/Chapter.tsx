import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { VerseView } from '../components/reader/VerseView';
import { ChapterHeader } from '../components/chapter/ChapterHeader';
import { AudioControls } from '../components/audio/AudioControls';
import { useQuranReader } from '../hooks/useQuranReader';
import type { Chapter as ChapterType, Verse } from '../types';

export function Chapter() {
  const { id } = useParams();
  const chapterId = parseInt(id!, 10);

  const { data: chapter, isLoading: isLoadingChapter } = useQuery<ChapterType>({
    queryKey: ['chapter', chapterId],
    queryFn: async () => {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${chapterId}`);
      const data = await response.json();
      return data.data;
    },
  });

  const { data: verses, isLoading: isLoadingVerses } = useQuery<Verse[]>({
    queryKey: ['verses', chapterId],
    queryFn: async () => {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${chapterId}/editions/quran-uthmani,en.asad`);
      const data = await response.json();
      return data.data[0].ayahs;
    },
  });

  if (isLoadingChapter || isLoadingVerses) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div>
      {chapter && <ChapterHeader chapter={chapter} />}
      <div className="mt-8 space-y-6">
        {verses?.map((verse) => (
          <VerseView
            key={verse.number}
            verse={verse}
            translations={[verse.translation]}
            showTafsir={false}
          />
        ))}
      </div>
      <AudioControls />
    </div>
  );
}