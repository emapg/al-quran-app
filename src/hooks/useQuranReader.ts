import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Chapter, Verse, Translation } from '../types';

interface QuranReaderStore {
  currentChapter?: Chapter;
  verses: Verse[];
  translations: Translation[];
  selectedTranslations: number[];
  isLoading: boolean;
  loadChapter: (chapterId: number) => Promise<void>;
  setSelectedTranslations: (translationIds: number[]) => void;
}

export const useQuranReader = create<QuranReaderStore>()(
  persist(
    (set, get) => ({
      verses: [],
      translations: [],
      selectedTranslations: [1], // Default English translation
      isLoading: false,

      loadChapter: async (chapterId) => {
        set({ isLoading: true });
        try {
          const [chapterRes, versesRes] = await Promise.all([
            fetch(`/api/chapters/${chapterId}`),
            fetch(`/api/verses/${chapterId}`),
          ]);

          const [chapter, verses] = await Promise.all([
            chapterRes.json(),
            versesRes.json(),
          ]);

          set({
            currentChapter: chapter,
            verses: verses,
            isLoading: false,
          });
        } catch (error) {
          console.error('Failed to load chapter:', error);
          set({ isLoading: false });
        }
      },

      setSelectedTranslations: (translationIds) => {
        set({ selectedTranslations: translationIds });
      },
    }),
    {
      name: 'quran-reader',
      partialize: (state) => ({
        selectedTranslations: state.selectedTranslations,
      }),
    }
  )
);