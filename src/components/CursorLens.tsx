import React, { useEffect, useRef } from 'react';

interface CursorLensProps {
  /** Lens diameter in px. */
  size?: number;
  /** Lens diameter in px while hovering links, buttons and cards. */
  grownSize?: number;
}

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, summary, [data-lens="grow"]';

/**
 * A soft circle that follows the mouse and inverts whatever is under it.
 * Dark mode shows a bright "lens", light mode shows a dark one. It uses
 * mix-blend-mode: difference, so it works in both themes with no theme logic.
 *
 * Mount it once near the root of the app. It does nothing on touch devices.
 */
export const CursorLens: React.FC<CursorLensProps> = ({ size = 150, grownSize = 280 }) => {
  const lensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lens = lensRef.current;
    if (!lens) return;

    // No lens on touch screens.
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let targetX = -1000;
    let targetY = -1000;
    let x = targetX;
    let y = targetY;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    const render = () => {
      lens.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0) scale(${scale})`;
    };

    const tick = () => {
      const follow = reduced ? 1 : 0.18;
      x += (targetX - x) * follow;
      y += (targetY - y) * follow;
      scale += (targetScale - scale) * (reduced ? 1 : 0.14);
      render();

      const settled =
        Math.abs(targetX - x) < 0.1 && Math.abs(targetY - y) < 0.1 && Math.abs(targetScale - scale) < 0.002;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;

      // First movement: jump straight to the cursor instead of flying in from off-screen.
      if (targetX === -1000) {
        x = e.clientX;
        y = e.clientY;
      }

      targetX = e.clientX;
      targetY = e.clientY;
      lens.style.opacity = '1';

      const overInteractive = (e.target as Element | null)?.closest?.(INTERACTIVE);
      targetScale = overInteractive ? grownSize / size : 1;
      start();
    };

    const onDown = () => {
      targetScale = Math.max(targetScale * 0.8, 0.6);
      start();
    };

    const onUp = () => {
      targetScale = 1;
      start();
    };

    const onLeave = () => {
      lens.style.opacity = '0';
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [size, grownSize]);

  return (
    <div
      ref={lensRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full opacity-0 mix-blend-difference transition-opacity duration-300 will-change-transform max-lg:hidden"
      style={{
        width: size,
        height: size,
        // Solid in the middle, feathered at the edge so the flip looks soft, not stamped on.
        background: 'radial-gradient(circle at center, #fff 0%, #fff 55%, rgba(255,255,255,0) 100%)',
      }}
    />
  );
};
