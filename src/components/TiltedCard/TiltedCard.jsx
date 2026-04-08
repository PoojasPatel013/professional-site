/**
 * TiltedCard — ReactBits-style 3-D tilt card (no framer-motion)
 *
 * Props:
 *  children      {ReactNode} — card content
 *  className     {string}    — extra class names
 *  intensity     {number}    — max tilt degrees (default: 8)
 *  scale         {number}    — scale on hover (default: 1.02)
 */

import React, { useRef, useCallback } from 'react';
import './TiltedCard.css';

const TiltedCard = ({
  children,
  className = '',
  intensity = 8,
  scale = 1.02,
}) => {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        // Normalize to [-1, 1]
        const nx = (x - cx) / cx;
        const ny = (y - cy) / cy;

        const rotateX = -ny * intensity; // tilt along X axis (up/down)
        const rotateY = nx * intensity;  // tilt along Y axis (left/right)

        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale3d(${scale}, ${scale}, ${scale})
        `;

        // Subtle glare layer
        const glare = card.querySelector('.tilted-card-glare');
        if (glare) {
          const glareX = (nx + 1) / 2;  // 0..1
          const glareY = (ny + 1) / 2;
          glare.style.background = `
            radial-gradient(
              circle at ${glareX * 100}% ${glareY * 100}%,
              rgba(255,255,255,0.18) 0%,
              rgba(255,255,255,0) 70%
            )
          `;
          glare.style.opacity = '1';
        }
      });
    },
    [intensity, scale]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;
    const glare = card.querySelector('.tilted-card-glare');
    if (glare) glare.style.opacity = '0';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilted-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      <div className="tilted-card-glare" aria-hidden="true" />
      {children}
    </div>
  );
};

export default TiltedCard;
