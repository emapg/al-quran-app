import React from 'react';
import { useQuranStore } from '../store/useQuranStore';

export function Settings() {
  const { preferences, setPreferences } = useQuranStore();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Settings
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Display
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Arabic Font Size
                </label>
                <input
                  type="range"
                  min="16"
                  max="48"
                  value={preferences.fontSize.arabic}
                  onChange={(e) =>
                    setPreferences({
                      fontSize: {
                        ...preferences.fontSize,
                        arabic: parseInt(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {preferences.fontSize.arabic}px
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Translation Font Size
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  value={preferences.fontSize.translation}
                  onChange={(e) =>
                    setPreferences({
                      fontSize: {
                        ...preferences.fontSize,
                        translation: parseInt(e.target.value),
                      },
                    })
                  }
                  className="w-full"
                />
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {preferences.fontSize.translation}px
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Theme
                </label>
                <select
                  value={preferences.theme}
                  onChange={(e) =>
                    setPreferences({ theme: e.target.value as 'light' | 'dark' })
                  }
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-700 dark:text-white"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Reading
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Show Translations
                </label>
                <div className="space-y-2">
                  {['English', 'Urdu', 'Indonesian'].map((lang) => (
                    <label
                      key={lang}
                      className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                    >
                      <input type="checkbox" className="rounded text-emerald-600" />
                      <span>{lang}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}