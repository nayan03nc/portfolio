import { useCallback } from 'react';

/**
 * Returns an onMouseMove handler that sets CSS vars --x/--y on the target
 * element, powering the `.card-spotlight` radial-gradient overlay.
 */
export function useSpotlight() {
  return useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--y', `${e.clientY - rect.top}px`);
  }, []);
}
