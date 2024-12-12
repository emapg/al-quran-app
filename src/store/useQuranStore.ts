import { create } from 'zustand';
import { UserPreferences } from '../types/quran';

interface QuranStore {
  preferences: UserPreferences;
  bookmarks: number[];
  setPreferences: (preferences: Partial<UserPreferences>) => void;
  toggleBookmark: (verseId: number) => void;
}

export const useQuranStore = create<QuranStore>((set) => ({
  preferences: {
    fontSize: 20,
    arabicFont: 'Uthmani',
    translationId: 1,
    reciterId: 1,
    theme: 'light',
  },
  bookmarks: [],
  setPreferences: (newPreferences) =>
    set((state) => ({
      preferences: { ...state.preferences, ...newPreferences },
    })),
  toggleBookmark: (verseId) =>
    set((state) => ({
      bookmarks: state.bookmarks.includes(verseId)
        ? state.bookmarks.filter((id) => id !== verseId)
        : [...state.bookmarks, verseId],
    })),
}));