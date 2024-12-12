export interface UserProfile {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
  lastRead?: {
    chapterId: number;
    verseId: number;
    timestamp: number;
  };
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  fontSize: {
    arabic: number;
    translation: number;
  };
  arabicFont: string;
  translationId: number;
  reciterId: number;
  autoPlayNext: boolean;
  showTafsir: boolean;
  showTransliteration: boolean;
  selectedTranslations: number[];
}