'use client';

import { useEffect } from 'react';

export default function FloatingController() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        document.body.classList.add('at-top');
      } else {
        document.body.classList.remove('at-top');
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
