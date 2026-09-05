'use client'

import { useEffect, useRef, useState } from 'react';

const FALLBACK_MS = 3000;

/** Reveals an element once it scrolls into view, with a timeout so content can never stay hidden. */
export function useReveal() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);

    const fallback = setTimeout(() => setRevealed(true), FALLBACK_MS);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return [ref, revealed];
}
