import React from 'react';
import { useQuranStore } from '../../store/useQuranStore';

interface TranslationViewProps {
  translations: string[];
  showTafsir: boolean;
  verseId: number;
}

export function TranslationView({
  translations,
  showTafsir,
  verseId,
}: TranslationViewProps) {
  const { preferences } = useQuranStore();

  return (
    <div className="space-y-4 mt-4 border-t dark:border-gray-700 pt-4">
      {translations.map((translation, index) => (
        <div
          key={`${verseId}-${index}`}
          className="text-gray-800 dark:text-gray-100"
          style={{ fontSize: `${preferences.fontSize.translation}px` }}
        >
          {translation}
        </div>
      ))}
      {showTafsir && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          {/* Tafsir content */}
        </div>
      )}
    </div>
  );
}