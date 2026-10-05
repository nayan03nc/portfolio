import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `revealed` class to an element when it enters the viewport.
 * Supports two modes:
 *  - container mode (default): toggles class on the observed element itself
 *  - stagger mode: pass `stagger` to use the `.reveal-stagger` class which
 *    cascades the reveal across children
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { stagger?: boolean; threshold?: number; rootMargin?: string }
) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.stagger, options?.threshold, options?.rootMargin]);

  const className = options?.stagger ? 'reveal-stagger' : 'reveal';
  return {
    ref,
    className: `${className} ${revealed ? 'revealed' : ''}`,
  } as const;
}

/** Hook that tracks which section id is currently active in the viewport */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio);
            } else {
              visibleSections.delete(id);
            }
          });

          // Pick the most-visible section
          let best = '';
          let bestRatio = 0;
          visibleSections.forEach((ratio, id) => {
            if (ratio > bestRatio) {
              best = id;
              bestRatio = ratio;
            }
          });
          if (best) setActive(best);
        },
        { threshold: [0.1, 0.25, 0.5, 0.75], rootMargin: '-20% 0px -20% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return active;
}
