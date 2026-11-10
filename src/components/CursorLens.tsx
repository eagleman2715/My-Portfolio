import React, { useCallback, useEffect, useRef, useState } from 'react';

interface CursorLensProps {
  /** Lens diameter in px. */
  size?: number;
  /** Lens diameter in px while hovering links, buttons and cards. */
  grownSize?: number;
}

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, summary, [data-lens="grow"]';

const FEATHER = 10; // soft edge, px

/**
 * Shows your real page in the OPPOSITE theme inside a small circle that follows the mouse.
 * Dark mode  -> the circle shows your actual light theme.
 * Light mode -> the circle shows your actual dark theme.
 *
 * How: a hidden copy of the page (same app, loaded with ?lens-theme=light|dark) sits on top of
 * the page, scroll-synced and masked to a circle. Because it is the real app, colors match your
 * theme exactly and photos are never altered.
 *
 * The lens pauses (hides) while <html data-lens-paused="true"> is set. Modals set this so the
 * copy of the page underneath doesn't show through the popup.
 *
 * Mount it once near the root of the app. It only runs with a mouse (not on touch devices).
 */
const CursorLensInner: React.FC<Required<CursorLensProps>> = ({ size, grownSize }) => {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const paintRef = useRef<() => void>(() => {});
  const loadedRef = useRef(false);
  const insideRef = useRef(false);
  const pausedRef = useRef(document.documentElement.hasAttribute('data-lens-paused'));

  const [enabled, setEnabled] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [viewport, setViewport] = useState(() => ({
    w: document.documentElement.clientWidth,
    h: window.innerHeight,
  }));

  // Mouse devices only.
  useEffect(() => {
    setEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  // Follow the site's theme toggle, and pause while a modal is open.
  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setDark(root.classList.contains('dark'));
      pausedRef.current = root.hasAttribute('data-lens-paused');
      paintRef.current();
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'data-lens-paused'] });
    return () => observer.disconnect();
  }, []);

  // Keep the copy exactly as wide as the real page (excluding the scrollbar).
  useEffect(() => {
    const onResize = () =>
      setViewport({ w: document.documentElement.clientWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const syncScroll = useCallback(() => {
    try {
      frameRef.current?.contentWindow?.scrollTo({
        top: window.scrollY,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
    } catch {
      /* ignore */
    }
  }, []);

  // Keep the copy scrolled to the same place as the real page.
  useEffect(() => {
    if (!enabled) return;
    window.addEventListener('scroll', syncScroll, { passive: true });
    window.addEventListener('resize', syncScroll);
    return () => {
      window.removeEventListener('scroll', syncScroll);
      window.removeEventListener('resize', syncScroll);
    };
  }, [enabled, syncScroll]);

  // The copy has to reload when the theme flips, so reset its loaded state.
  useEffect(() => {
    loadedRef.current = false;
    paintRef.current();
  }, [dark]);

  // Cursor tracking and drawing.
  useEffect(() => {
    if (!enabled) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let targetX = -1000;
    let targetY = -1000;
    let x = targetX;
    let y = targetY;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    const paint = () => {
      const frame = frameRef.current;
      const ring = ringRef.current;
      const radius = (size / 2) * scale;
      const show = insideRef.current && !pausedRef.current;

      if (frame) {
        const mask = `radial-gradient(circle at ${x}px ${y}px, #000 ${Math.max(
          radius - FEATHER,
          0
        )}px, transparent ${radius}px)`;
        frame.style.maskImage = mask;
        frame.style.webkitMaskImage = mask;
        frame.style.opacity = show && loadedRef.current ? '1' : '0';
      }
      if (ring) {
        ring.style.transform = `translate3d(${x - size / 2}px, ${y - size / 2}px, 0) scale(${scale})`;
        ring.style.opacity = show ? '1' : '0';
      }
    };
    paintRef.current = paint;

    const tick = () => {
      x += (targetX - x) * (reduced ? 1 : 0.2);
      y += (targetY - y) * (reduced ? 1 : 0.2);
      scale += (targetScale - scale) * (reduced ? 1 : 0.16);
      paint();

      const settled =
        Math.abs(targetX - x) < 0.1 && Math.abs(targetY - y) < 0.1 && Math.abs(targetScale - scale) < 0.002;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      if (!insideRef.current) {
        insideRef.current = true;
        x = e.clientX;
        y = e.clientY;
      }
      targetX = e.clientX;
      targetY = e.clientY;
      const overInteractive = (e.target as Element | null)?.closest?.(INTERACTIVE);
      targetScale = overInteractive ? grownSize / size : 1;
      start();
    };

    const onDown = () => {
      targetScale = Math.max(targetScale * 0.85, 0.6);
      start();
    };

    const onUp = () => {
      targetScale = 1;
      start();
    };

    const onLeave = () => {
      insideRef.current = false;
      paint();
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
  }, [enabled, size, grownSize]);

  const handleLoad = () => {
    loadedRef.current = true;
    syncScroll();
    paintRef.current();
    // Late images can change page height, so re-sync a couple of times.
    window.setTimeout(syncScroll, 400);
    window.setTimeout(syncScroll, 1500);
  };

  if (!enabled) return null;

  // The copy loads the same app in the opposite theme.
  const src = `${window.location.pathname}?lens-theme=${dark ? 'light' : 'dark'}`;

  return (
    <>
      <iframe
        key={dark ? 'lens-light' : 'lens-dark'}
        ref={frameRef}
        src={src}
        title="Theme preview lens"
        aria-hidden="true"
        tabIndex={-1}
        scrolling="no"
        onLoad={handleLoad}
        className="pointer-events-none fixed left-0 top-0 z-[9999] border-0 opacity-0 transition-opacity duration-200"
        style={{ width: viewport.w, height: viewport.h }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full border border-zinc-500/40 opacity-0 shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-opacity duration-200 will-change-transform"
        style={{ width: size, height: size }}
      />
    </>
  );
};

export const CursorLens: React.FC<CursorLensProps> = ({ size = 110, grownSize = 170 }) => {
  // The hidden copy of the page must never create another lens.
  if (typeof window !== 'undefined' && /[?&]lens-theme=/.test(window.location.search)) return null;
  return <CursorLensInner size={size} grownSize={grownSize} />;
};