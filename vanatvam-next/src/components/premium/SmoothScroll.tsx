'use client';

import React, { createContext, useContext, useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext<React.RefObject<Lenis | null> | null>(null);

/** Returns a ref whose `.current` is the Lenis instance once mounted (or null before/if disabled). */
export function useLenis() {
  return useContext(LenisContext);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReduced) return;

    const instance = new Lenis({
      duration: isCoarsePointer ? 0.9 : 1.15,
      smoothWheel: true,
      touchMultiplier: 1.1,
      wheelMultiplier: 1,
    });

    lenisRef.current = instance;

    let rafId = requestAnimationFrame(function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
