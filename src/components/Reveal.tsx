import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  /** Delay in ms. Use index * 80 to stagger items in a list or grid. */
  delay?: number;
  /** Animation length in ms. */
  duration?: number;
  /** If false, the element animates out again when it leaves the viewport. */
  once?: boolean;
  className?: string;
}

// The hidden theme-preview copy of the page (see CursorLens) should never animate.
const IS_LENS_FRAME =
  typeof window !== 'undefined' && /[?&]lens-theme=/.test(window.location.search);

// Full class names so Tailwind can detect them at build time.
const HIDDEN: Record<RevealVariant, string> = {
  up: 'opacity-0 translate-y-8',
  down: 'opacity-0 -translate-y-8',
  left: 'opacity-0 translate-x-10',
  right: 'opacity-0 -translate-x-10',
  scale: 'opacity-0 scale-95',
  fade: 'opacity-0',
};

const SHOWN = 'opacity-100 translate-x-0 translate-y-0 scale-100';

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'up',
  delay = 0,
  duration = 700,
  once = true,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(IS_LENS_FRAME);

  useEffect(() => {
    if (IS_LENS_FRAME) return;

    const el = ref.current;
    if (!el) return;

    // Older browsers / SSR: skip the animation and just show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={
        IS_LENS_FRAME
          ? undefined
          : { transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }
      }
      className={`${
        IS_LENS_FRAME ? '' : 'transition-all ease-out will-change-transform'
      } motion-reduce:!transition-none motion-reduce:!transform-none motion-reduce:!opacity-100 ${
        visible ? SHOWN : HIDDEN[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
};