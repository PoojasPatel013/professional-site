import React, { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

/**
 * FluidGlass — A real glassmorphism cursor-following overlay.
 * Uses CSS backdrop-filter to actually refract/blur the page content underneath.
 * Pointer-events: none so it never interferes with clicks or scrolling.
 */
export default function FluidGlass({
  size = 280,
  blur = 18,
  saturation = 1.8,
  brightness = 1.15,
  borderRadius = '50%',
  tint = 'rgba(232, 213, 245, 0.12)',
  borderColor = 'rgba(255,255,255,0.25)',
  shadowColor = 'rgba(180, 140, 220, 0.2)',
}) {
  const glassRef = useRef(null);
  const pos = useRef({ x: -500, y: -500 });
  const visible = useRef(false);

  const animate = useCallback(() => {
    if (!glassRef.current) return;

    gsap.to(glassRef.current, {
      x: pos.current.x - size / 2,
      y: pos.current.y - size / 2,
      duration: 0.45,
      ease: 'power3.out',
      overwrite: 'auto',
    });
  }, [size]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      if (!visible.current && glassRef.current) {
        visible.current = true;
        gsap.to(glassRef.current, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' });
      }

      animate();
    };

    const handleMouseLeave = () => {
      visible.current = false;
      if (glassRef.current) {
        gsap.to(glassRef.current, { opacity: 0, scale: 0.6, duration: 0.4, ease: 'power2.in' });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animate]);

  return (
    <div
      ref={glassRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0,
        transform: 'scale(0.6)',
        willChange: 'transform, opacity',

        /* ---- True Glassmorphism ---- */
        backdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}) brightness(${brightness})`,
        background: tint,
        border: `1.5px solid ${borderColor}`,
        boxShadow: `
          0 8px 32px ${shadowColor},
          inset 0 0 0 0.5px rgba(255,255,255,0.15),
          inset 0 1px 0 rgba(255,255,255,0.3)
        `,

        /* Subtle inner light refraction */
        backgroundImage: `
          radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.25) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 80%, rgba(200,170,240,0.1) 0%, transparent 50%)
        `,
      }}
    />
  );
}
