import React from 'react';
import { useQuranStore } from '../../store/useQuranStore';

interface ArabicTextProps {
  text: string;
  verseNumber: number;
}

export function ArabicText({ text, verseNumber }: ArabicTextProps) {
  const { preferences } = useQuranStore();

  return (
    <div className="relative">
      <div
        className="text-right mb-4 font-arabic leading-loose"
        style={{
          fontSize: `${preferences.fontSize.arabic}px`,
          fontFamily: preferences.arabicFont,
        }}
      >
        {text}
        <span className="inline-block mr-2 text-sm text-gray-500 font-arabic">
          ﴿{verseNumber}﴾
        </span>
      </div>
    </div>
  );
}