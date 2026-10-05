import type { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Reveal({
  children,
  stagger = false,
  className = '',
}: {
  children: ReactNode;
  stagger?: boolean;
  className?: string;
}) {
  const { ref, className: revealClass } = useScrollReveal<HTMLDivElement>({ stagger });
  return (
    <div ref={ref} className={`${revealClass} ${className}`}>
      {children}
    </div>
  );
}
