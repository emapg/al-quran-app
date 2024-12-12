export interface Verse {
  number: number;
  text: string;
  translation: string;
  audio: string;
  transliteration: string;
}

export interface Chapter {
  id: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface Reciter {
  id: number;
  name: string;
  style: string;
}

export interface Translation {
  id: number;
  language: string;
  name: string;
  translator: string;
}

export interface UserPreferences {
  fontSize: number;
  arabicFont: string;
  translationId: number;
  reciterId: number;
  theme: 'light' | 'dark';
}