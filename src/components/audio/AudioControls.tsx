import React from 'react';
import { FastForward, Pause, Play, Rewind, Volume2 } from 'lucide-react';
import { useAudioPlayer } from '../../hooks/useAudioPlayer';

export function AudioControls() {
  const { isPlaying, speed, play, pause, setSpeed } = useAudioPlayer();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <Rewind className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>

            <button
              onClick={isPlaying ? pause : () => play(1)}
              className="p-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </button>

            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
              <FastForward className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Volume2 className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <input
              type="range"
              min="0"
              max="100"
              className="w-24 h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 dark:bg-gray-700"
            />
            <select
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-2 py-1 text-sm"
            >
              <option value="0.75">0.75x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}