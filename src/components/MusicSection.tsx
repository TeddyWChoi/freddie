import React from 'react';
import { motion } from 'motion/react';
import imgGolden from "figma:asset/1b2742e364a1ab2b688c75a6a84f2ba405a486cb.png";
import imgApt from "figma:asset/7fa2798a8e0abd90ad687e37e8428483413ebcf8.png";
import imgUphill from "figma:asset/634a675f87fd23673f7bb783753caf558cd220a0.png";
import { useAudio } from '../contexts/AudioContext';

interface TrackItemProps {
  index: string;
  trackId: number;
  image: string;
  title: string;
  sub: string;
  desc: string;
  activeColor: string;
}

function TrackItem({ index, trackId, image, title, sub, desc, activeColor }: TrackItemProps) {
  const { currentTrack, isPlaying, playTrack, togglePlayPause } = useAudio();
  const isCurrentTrack = currentTrack === trackId;
  const isThisTrackPlaying = isCurrentTrack && isPlaying;

  const handlePlayClick = () => {
    if (isCurrentTrack) {
      togglePlayPause();
    } else {
      playTrack(trackId);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative border-t border-white/10 py-12 hover:bg-white/[0.02] transition-colors cursor-default ${isCurrentTrack ? 'bg-white/[0.01]' : ''}`}
    >
      {/* Hover Glow Effect */}
      <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-${activeColor} to-transparent ${isCurrentTrack ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500`} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4">
        {/* Index */}
        <div className="md:col-span-1 hidden md:block">
          <span className={`text-lg font-bold tracking-widest transition-colors ${isCurrentTrack ? `text-${activeColor}` : 'text-white/30 group-hover:text-' + activeColor}`}>{index}</span>
        </div>

        {/* Album Cover Image - Made Larger */}
        <div className="md:col-span-3">
          <div className={`relative aspect-square w-full overflow-hidden rounded-lg border transition-all shadow-2xl ${isCurrentTrack ? `border-${activeColor}/50` : 'border-white/10 group-hover:border-white/30'}`}>
            <img src={image} alt={title} className={`w-full h-full object-cover transition-all duration-700 ${isCurrentTrack ? 'opacity-100 scale-105' : 'opacity-90 group-hover:opacity-100 group-hover:scale-105'}`} />
            {isThisTrackPlaying && (
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cyan-500/20 animate-pulse" />
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="md:col-span-4 pl-4">
          <h3 className={`text-4xl md:text-6xl font-serif mb-3 transition-all ${isCurrentTrack ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400' : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400'}`}>
            {title}
          </h3>
          <p className={`text-xs md:text-sm text-${activeColor} uppercase tracking-[0.2em] font-medium opacity-80`}>{sub}</p>
        </div>

        {/* Description */}
        <div className="md:col-span-3">
          <p className={`text-sm md:text-base leading-relaxed transition-colors ${isCurrentTrack ? 'text-white/70' : 'text-white/50 group-hover:text-white/70'}`}>{desc}</p>
        </div>

        {/* Play/Pause Button */}
        <div className="md:col-span-1 flex justify-end">
          <button
            onClick={handlePlayClick}
            className={`w-16 h-16 rounded-full border flex items-center justify-center transition-all hover:scale-110 ${isCurrentTrack
                ? `border-${activeColor} bg-${activeColor}/20`
                : `border-white/10 group-hover:border-${activeColor} group-hover:bg-${activeColor}/10`
              }`}
          >
            {isThisTrackPlaying ? (
              // Pause icon
              <svg width="16" height="16" viewBox="0 0 12 14" fill="none" className="fill-white transition-colors">
                <rect x="2" y="2" width="2.5" height="10" />
                <rect x="7.5" y="2" width="2.5" height="10" />
              </svg>
            ) : (
              // Play icon
              <svg width="16" height="16" viewBox="0 0 12 14" fill="none" className="fill-white group-hover:fill-white transition-colors">
                <path d="M10.5 7L1.5 12.1962L1.5 1.80385L10.5 7Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function MusicSection() {
  return (
    <section id="music" className="py-32 bg-[#030305] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-cyan-500" />
            <h2 className="text-xs font-bold text-cyan-500 tracking-[0.5em] uppercase">The Playlist</h2>
          </div>
          <h3 className="text-5xl md:text-7xl font-serif text-white leading-none">
            AI & TRADITION<br />
            <span className="text-white/20 italic">REINTERPRETED</span>
          </h3>
        </motion.div>

        <div className="flex flex-col space-y-4">
          <TrackItem
            index="01"
            trackId={0}
            image={imgGolden}
            title="Golden"
            sub="Freddie Style Ver."
            desc="A powerful reinterpretation where Freddie's golden voice meets modern K-Pop aesthetics in this shining anthem."
            activeColor="yellow-400"
          />
          <TrackItem
            index="02"
            trackId={1}
            image={imgApt}
            title="APT."
            sub="Collaboration Ver."
            desc="The addictive 'Apartment' game chant reimagined with Freddie's dynamic vocal energy and rock spirit."
            activeColor="pink-400"
          />
          <TrackItem
            index="03"
            trackId={2}
            image={imgUphill}
            title="Uphill"
            sub="Monthly Project Ver."
            desc="A touching ballad performance of Freddie Mercury's 'Uphill', delivering a message of endurance and hope through Freddie's emotional depth."
            activeColor="stone-400"
          />
        </div>
      </div>
    </section>
  );
}
