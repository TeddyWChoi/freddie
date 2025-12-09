import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import goldenMp3 from '../assets/golden.mp3';
import aptMp3 from '../assets/apt.mp3';
import uphillMp3 from '../assets/uphill.mp3';
import golden2Mp3 from '../assets/golden2.mp3';
import apt2Mp3 from '../assets/apt2.mp3';
import uphill2Mp3 from '../assets/uphill2.mp3';

interface Track {
  id: number;
  title: string;
  audioSrc: string;
  previewSrc: string;
}


interface AudioContextType {
  currentTrack: number;
  currentVersion: 'full' | 'preview';
  isPlaying: boolean;
  volume: number;
  frequencyData: Uint8Array;
  playTrack: (trackIndex: number, version?: 'full' | 'preview') => void;
  togglePlayPause: (version?: 'full' | 'preview') => void;
  setVolume: (volume: number) => void;
  tracks: Track[];
}

const tracks: Track[] = [
  { id: 0, title: 'Golden', audioSrc: goldenMp3, previewSrc: golden2Mp3 },
  { id: 1, title: 'APT.', audioSrc: aptMp3, previewSrc: apt2Mp3 },
  { id: 2, title: 'Uphill', audioSrc: uphillMp3, previewSrc: uphill2Mp3 },
];

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentVersion, setCurrentVersion] = useState<'full' | 'preview'>('full');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.7);
  const [frequencyData, setFrequencyData] = useState(new Uint8Array(48));

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isAudioSetup = useRef(false);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(tracks[0].audioSrc);
    audio.volume = volume;
    audioRef.current = audio;

    // Event listener for track end
    const handleTrackEnd = () => {
      // If playing full version, go to next full version
      // If playing preview, maybe just stop? Or loop? Let's assume loop to next track's same version
      const nextTrack = (currentTrack + 1) % tracks.length;
      playTrack(nextTrack, currentVersion);
    };

    audio.addEventListener('ended', handleTrackEnd);

    // Auto-play
    audio.play()
      .then(() => {
        setIsPlaying(true);
        setupAudioContext();
      })
      .catch(() => {
        setIsPlaying(false);
      });

    return () => {
      audio.removeEventListener('ended', handleTrackEnd);
      audio.pause();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Setup Web Audio API
  const setupAudioContext = () => {
    if (isAudioSetup.current || !audioRef.current) return;

    try {
      // @ts-ignore
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;

      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      analyserRef.current = analyser;

      const source = ctx.createMediaElementSource(audioRef.current);
      sourceRef.current = source;

      source.connect(analyser);
      analyser.connect(ctx.destination);

      isAudioSetup.current = true;
      startFrequencyAnimation();
    } catch (error) {
      console.error('Web Audio API setup failed:', error);
    }
  };

  // Animation loop for frequency data
  const startFrequencyAnimation = () => {
    const updateFrequencyData = () => {
      if (analyserRef.current) {
        const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(dataArray);
        setFrequencyData(dataArray);
      }
      animationFrameRef.current = requestAnimationFrame(updateFrequencyData);
    };
    updateFrequencyData();
  };

  const playTrack = async (trackIndex: number, version: 'full' | 'preview' = 'full') => {
    if (!audioRef.current) return;

    setCurrentTrack(trackIndex);
    setCurrentVersion(version);

    // Select source based on version
    const src = version === 'full' ? tracks[trackIndex].audioSrc : tracks[trackIndex].previewSrc;
    audioRef.current.src = src;
    audioRef.current.volume = volume;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
      if (!isAudioSetup.current) {
        setupAudioContext();
      }
    } catch (error) {
      console.error('Playback failed:', error);
      setIsPlaying(false);
    }
  };

  const togglePlayPause = async (version?: 'full' | 'preview') => {
    if (!audioRef.current) return;

    // specific logic if switching versions on same track
    const targetVersion = version || currentVersion;

    // If we're changing versions, we treat it like a new play request
    if (version && version !== currentVersion) {
      playTrack(currentTrack, version);
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        if (!isAudioSetup.current) {
          setupAudioContext();
        }
      } catch (error) {
        console.error('Playback failed:', error);
        setIsPlaying(false);
      }
    }
  };

  const setVolume = (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    setVolumeState(clampedVolume);
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        currentVersion,
        isPlaying,
        volume,
        frequencyData,
        playTrack,
        togglePlayPause,
        setVolume,
        tracks,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}
