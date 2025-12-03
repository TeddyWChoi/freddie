import React, { useEffect, useState } from 'react';
import { useAudio } from '../contexts/AudioContext';

const spectrumData = [
  { top: 38.36, h: 26.495 },
  { top: 14.89, h: 49.964 },
  { top: 12.43, h: 52.419 },
  { top: 25.61, h: 39.243 },
  { top: 14.03, h: 50.82 },
  { top: 28.55, h: 36.297 },
  { top: 15.00, h: 49.854 },
  { top: 38.36, h: 26.495 },
  { top: 36.01, h: 28.838 },
  { top: 10.39, h: 54.462 },
  { top: 18.29, h: 46.56 },
  { top: 0.00, h: 64.851 },
  { top: 38.86, h: 25.988 },
  { top: 21.79, h: 43.06 },
  { top: 0.38, h: 64.471 },
  { top: 37.07, h: 27.777 },
  { top: 2.69, h: 62.159 },
  { top: 8.50, h: 56.347 },
  { top: 14.08, h: 50.772 },
  { top: 36.76, h: 28.094 },
  { top: 15.22, h: 49.632 },
  { top: 33.32, h: 31.531 },
  { top: 0.00, h: 64.851 },
  { top: 32.15, h: 32.703 },
  { top: 0.90, h: 63.948 },
  { top: 23.93, h: 40.922 },
  { top: 38.13, h: 26.716 },
  { top: 33.13, h: 31.721 },
  { top: 38.72, h: 26.13 },
  { top: 38.47, h: 26.384 },
  { top: 30.53, h: 34.318 },
  { top: 37.26, h: 27.587 },
  { top: 6.03, h: 58.817 },
  { top: 20.56, h: 44.295 },
  { top: 0.30, h: 64.55 },
  { top: 31.23, h: 33.621 },
  { top: 36.63, h: 28.221 },
  { top: 37.61, h: 27.239 },
  { top: 38.72, h: 26.13 },
  { top: 21.17, h: 43.677 },
  { top: 38.89, h: 25.956 },
  { top: 38.56, h: 26.289 },
  { top: 35.38, h: 29.472 },
  { top: 31.44, h: 33.415 },
  { top: 19.61, h: 45.245 },
  { top: 2.33, h: 62.523 },
  { top: 7.70, h: 57.154 }
];

export function SpectrumBar() {
  const { frequencyData, isPlaying } = useAudio();
  const [barHeights, setBarHeights] = useState<number[]>(spectrumData.map(d => d.h));

  useEffect(() => {
    if (!isPlaying) {
      setBarHeights(spectrumData.map((d) => d.h));
      return;
    }

    // Animation loop - keep original pattern but make more dynamic
    let animationId: number;
    const updateBars = () => {
      if (frequencyData && frequencyData.length > 0) {
        const newHeights = spectrumData.map((_, index) => {
          // Mix frequency indices for varied movement across all bars
          const freqIndex = Math.floor(((index * 3 + 5) % frequencyData.length));
          const amplitude = frequencyData[freqIndex] || 0;
          const baseHeight = spectrumData[index].h; // Keep original base heights
          // Larger amplitude for more dramatic movement
          const scaledHeight = baseHeight + (amplitude / 255) * 80;
          return Math.min(120, Math.max(10, scaledHeight));
        });
        setBarHeights(newHeights);
      }
      animationId = requestAnimationFrame(updateBars);
    };

    updateBars();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isPlaying, frequencyData]);

  return (
    <div
      className="absolute bottom-0 left-0 w-full pointer-events-none z-30"
      style={{
        height: '130px',
        overflow: 'hidden',
        opacity: 0.1
      }}
    >
      <div className="relative w-[1946px] h-full mx-auto">
        {spectrumData.map((item, i) => (
          <div
            key={i}
            className="absolute w-[38.91px] transition-all duration-75"
            style={{
              left: `${i * 40.84}px`,
              bottom: '0px',
              height: `${barHeights[i]}px`,
              backgroundColor: '#c084fc'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function VolumeButton() {
  const { volume, setVolume } = useAudio();
  const [isDragging, setIsDragging] = useState(false);

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    setVolume(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleVolumeChange(e);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const volumeBar = document.getElementById('volume-bar');
        if (volumeBar) {
          const rect = volumeBar.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percentage = Math.max(0, Math.min(1, x / rect.width));
          setVolume(percentage);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, setVolume]);

  const filledBars = Math.round(volume * 9);

  return (
    <div className="absolute top-[96px] right-[60px] md:right-[100px] lg:right-[32px] z-30">
      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm flex gap-[8px] h-[38px] items-center px-[17px] py-px rounded-full w-[138px] border border-[rgba(255,255,255,0.2)] cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors">
        <div className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
            <g>
              <path d="M9.16667 3.91833C9.1665 3.80226 9.13195 3.68884 9.06739 3.59238C9.00282 3.49592 8.91113 3.42075 8.80388 3.37635C8.69663 3.33196 8.57864 3.32032 8.46478 3.34292C8.35093 3.36552 8.24633 3.42134 8.16417 3.50333L5.34417 6.3225C5.23534 6.43198 5.10586 6.51877 4.96324 6.57785C4.82063 6.63693 4.6677 6.66712 4.51333 6.66666H2.5C2.27899 6.66666 2.06702 6.75446 1.91074 6.91074C1.75446 7.06702 1.66667 7.27898 1.66667 7.5V12.5C1.66667 12.721 1.75446 12.933 1.91074 13.0893C2.06702 13.2455 2.27899 13.3333 2.5 13.3333H4.51333C4.6677 13.3329 4.82063 13.3631 4.96324 13.4221C5.10586 13.4812 5.23534 13.568 5.34417 13.6775L8.16333 16.4975C8.2455 16.5798 8.35026 16.6359 8.46433 16.6586C8.5784 16.6814 8.69665 16.6697 8.8041 16.6252C8.91156 16.5807 9.00337 16.5053 9.06792 16.4085C9.13246 16.3117 9.16683 16.198 9.16667 16.0817V3.91833Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              {volume === 0 ? (
                <>
                  <path d="M18.3333 7.5L13.3333 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d="M13.3333 7.5L18.3333 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </>
              ) : (
                <>
                  <path d="M13.3333 7.5C13.3333 7.5 14.1667 8.33333 14.1667 10C14.1667 11.6667 13.3333 12.5 13.3333 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  {volume > 0.5 && (
                    <path d="M16.6667 5C16.6667 5 18.3333 6.66667 18.3333 10C18.3333 13.3333 16.6667 15 16.6667 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  )}
                </>
              )}
            </g>
          </svg>
        </div>
        <div
          id="volume-bar"
          className="grow h-[16px] relative shrink-0 flex gap-[4px] items-center cursor-pointer"
          onMouseDown={handleMouseDown}
          onClick={handleVolumeChange}
        >
          {[...Array(9)].map((_, i) => {
            const isFilled = i < filledBars;
            return (
              <div
                key={i}
                style={{
                  height: '16px',
                  width: '4px',
                  borderRadius: '999px',
                  backgroundColor: isFilled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.3)',
                  transition: 'background-color 0.2s'
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
