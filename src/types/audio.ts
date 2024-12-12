export interface AudioPlayer {
  isPlaying: boolean;
  currentVerse?: number;
  reciter: Reciter;
  speed: number;
  repeat: {
    enabled: boolean;
    count: number;
    from?: number;
    to?: number;
  };
}

export interface Reciter {
  id: number;
  name: string;
  style: string;
  available: boolean;
}