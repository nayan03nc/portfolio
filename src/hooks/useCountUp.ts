import { useEffect, useRef, useState } from 'react';

/**
 * Animated count-up that triggers when the element scrolls into view.
 * Returns a ref to attach and the current display value.
 */
export function useCountUp(target: number, duration = 2000, decimals = 0) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now: number) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutExpo for a satisfying deceleration
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const current = target * eased;
              setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));
              if (progress < 1) requestAnimationFrame(animate);
              else setValue(target);
            };
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return { ref, value };
}
