import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, MoveHorizontal, RefreshCw } from 'lucide-react';

interface BeforeAfterSliderProps {
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ className = '' }) => {
  const [sliderPos, setSliderPos] = useState<number>(52); // percentage
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = Math.round((clampedX / rect.width) * 100);
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Slider Container with Window Frame */}
      <div
        ref={containerRef}
        role="slider"
        tabIndex={0}
        aria-label="Window cleaning before and after comparison slider"
        aria-valuenow={sliderPos}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] max-h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-900 cursor-ew-resize group focus:outline-none focus:ring-4 focus:ring-sky-400"
      >
        {/* AFTER (Crystal Clean Window - Base Layer) */}
        <div className="absolute inset-0 w-full h-full">
          {/* Sunny high-res view */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80')`,
            }}
          />
          {/* Crystal Clear enhancement overlay with subtle glass shine */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-amber-200/15 pointer-events-none" />

          {/* Sparkle glints */}
          <div className="absolute top-6 right-8 text-amber-300 animate-pulse pointer-events-none">
            <Sparkles className="w-7 h-7 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          </div>
          <div className="absolute bottom-10 right-28 text-sky-200 animate-pulse delay-500 pointer-events-none">
            <Sparkles className="w-5 h-5 drop-shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
          </div>

          {/* After Label */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-400/40 text-emerald-200 text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Spotless Clarity (After)
          </div>
        </div>

        {/* BEFORE (Dirty Window - Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          {/* Same background view but degraded */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center brightness-75 contrast-85 blur-[1.5px]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80')`,
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              minWidth: '600px',
            }}
          />

          {/* Grime, Dust Film, Water Spots & Pollution Haze Layer */}
          <div
            className="absolute inset-0 bg-amber-950/30 backdrop-blur-[0.5px] mix-blend-multiply"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(120,53,15,0.35) 0, transparent 40%),
                                radial-gradient(circle at 60% 70%, rgba(146,64,14,0.4) 0, transparent 45%),
                                radial-gradient(circle at 80% 20%, rgba(78,39,12,0.3) 0, transparent 35%)`,
            }}
          />

          {/* Water spots & streak simulation with SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
            <filter id="grime-texture">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grime-texture)" fill="#e2e8f0" />
          </svg>

          {/* Before Label */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-semibold tracking-wide shadow-lg">
            Dust & Film (Before)
          </div>
        </div>

        {/* DRAGGABLE SQUEEGEE DIVIDER */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none flex flex-col items-center"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          {/* Squeegee Vertical Line */}
          <div className="w-[3px] h-full bg-gradient-to-b from-sky-300 via-white to-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />

          {/* Squeegee Head & Handle Controller */}
          <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
            {/* Squeegee Blade Visual */}
            <div className="relative flex items-center justify-center">
              {/* Squeegee Rubber Edge */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-600 to-sky-400 p-[2px] shadow-2xl shadow-sky-950/60 transition-transform duration-150 group-hover:scale-110">
                <div className="w-full h-full rounded-full bg-[#0B1F3A] flex items-center justify-center text-white border border-sky-300/40">
                  <MoveHorizontal className="w-5 h-5 text-sky-300 animate-pulse" />
                </div>
              </div>

              {/* Squeegee mini-blade indicator wings */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-6 bg-slate-800 rounded-l border-y border-l border-slate-600" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-6 bg-slate-800 rounded-r border-y border-r border-slate-600" />
            </div>
          </div>
        </div>

        {/* Bottom helper badge on hover/idle */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-medium tracking-wide flex items-center gap-1.5 pointer-events-none opacity-90 transition-opacity">
          <span>Drag squeegee or use arrow keys</span>
        </div>
      </div>

      {/* Preset interactive pills */}
      <div className="flex items-center justify-center gap-2 mt-3 text-xs">
        <button
          type="button"
          onClick={() => setSliderPos(15)}
          className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
            sliderPos < 30
              ? 'bg-slate-800 text-white border-slate-700'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          View Dirty Glass
        </button>
        <button
          type="button"
          onClick={() => setSliderPos(50)}
          className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
            sliderPos >= 30 && sliderPos <= 70
              ? 'bg-sky-600 text-white border-sky-600 shadow-sm'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          50/50 Squeegee Split
        </button>
        <button
          type="button"
          onClick={() => setSliderPos(85)}
          className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
            sliderPos > 70
              ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
        >
          View Sparkling Clean
        </button>
      </div>
    </div>
  );
};
