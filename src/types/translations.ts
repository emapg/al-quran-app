export interface Translation {
  id: number;
  language: string;
  name: string;
  translator: string;
  type: 'translation' | 'tafsir';
  direction: 'ltr' | 'rtl';
}

export interface TranslatedVerse {
  verseId: number;
  text: string;
  translationId: number;
}