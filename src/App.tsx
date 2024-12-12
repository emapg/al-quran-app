import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Chapter } from './pages/Chapter';
import { Search } from './pages/Search';
import { Settings } from './pages/Settings';
import { useQuranStore } from './store/useQuranStore';

const queryClient = new QueryClient();

function App() {
  const { preferences } = useQuranStore();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={preferences.theme === 'dark' ? 'dark' : ''}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <BrowserRouter>
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chapter/:id" element={<Chapter />} />
                <Route path="/search" element={<Search />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;