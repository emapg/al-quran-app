import { create } from 'zustand';
import type { AudioPlayer } from '../types';

interface AudioPlayerStore extends AudioPlayer {
  play: (verseId: number) => Promise<void>;
  pause: () => void;
  setSpeed: (speed: number) => void;
  setRepeat: (settings: AudioPlayer['repeat']) => void;
  setReciter: (reciterId: number) => void;
}

export const useAudioPlayer = create<AudioPlayerStore>((set, get) => ({
  isPlaying: false,
  speed: 1,
  reciter: {
    id: 1,
    name: 'Mishary Rashid Alafasy',
    style: 'Murattal',
    available: true,
  },
  repeat: {
    enabled: false,
    count: 1,
  },

  play: async (verseId) => {
    const audio = new Audio(`/api/audio/${get().reciter.id}/${verseId}`);
    audio.playbackRate = get().speed;
    await audio.play();
    set({ isPlaying: true, currentVerse: verseId });
  },

  pause: () => {
    set({ isPlaying: false });
  },

  setSpeed: (speed) => {
    set({ speed });
  },

  setRepeat: (repeat) => {
    set({ repeat });
  },

  setReciter: (reciterId) => {
    // Fetch reciter details from API
    set({
      reciter: {
        id: reciterId,
        name: 'New Reciter',
        style: 'Murattal',
        available: true,
      },
    });
  },
}));