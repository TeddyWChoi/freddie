import React from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { IntroSummary } from './components/IntroSummary';
import { MusicSection } from './components/MusicSection';
import { VisualsSection } from './components/VisualsSection';
import { GoodsSection } from './components/GoodsSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { AudioProvider } from './contexts/AudioContext';

export default function App() {
  return (
    <AudioProvider>
      <div className="min-h-screen bg-[#030305] text-white font-sans overflow-x-hidden selection:bg-cyan-500 selection:text-black">
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <IntroSummary />
          <MusicSection />
          <VisualsSection />
          <GoodsSection />
        </main>
        <Footer />
      </div>
    </AudioProvider>
  );
}
