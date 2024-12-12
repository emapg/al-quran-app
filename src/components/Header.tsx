import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Moon, Search, Settings, Sun } from 'lucide-react';
import { useQuranStore } from '../store/useQuranStore';

export function Header() {
  const { preferences, setPreferences } = useQuranStore();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Book className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Quran App
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link
              to="/search"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Search className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Link>

            <button
              onClick={() =>
                setPreferences({
                  theme: preferences.theme === 'light' ? 'dark' : 'light',
                })
              }
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {preferences.theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-600" />
              ) : (
                <Sun className="h-5 w-5 text-gray-300" />
              )}
            </button>

            <Link
              to="/settings"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Settings className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}