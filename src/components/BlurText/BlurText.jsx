/**
 * BlurText — ReactBits-style animated text component (JS + CSS variant)
 *
 * Based on the ReactBits open-source library (https://reactbits.dev)
 * Requires: framer-motion  →  npm install framer-motion
 *
 * Props:
 *  text          {string}   — The text to animate
 *  animateBy     {string}   — 'words' | 'letters'  (default: 'words')
 *  direction     {string}   — 'top' | 'bottom'      (default: 'top')
 *  delay         {number}   — ms stagger between words/letters (default: 80)
 *  duration      {number}   — seconds each element takes to appear (default: 0.55)
 *  threshold     {number}   — IntersectionObserver threshold (default: 0.1)
 *  rootMargin    {string}   — IntersectionObserver rootMargin (default: '0px')
 *  className     {string}   — extra class names for the wrapper span
 *  onAnimationComplete {fn} — fires once the last element finishes
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BlurText = ({
  text = '',
  animateBy = 'words',
  direction = 'top',
  delay = 80,
  duration = 0.55,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  onAnimationComplete,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Split text into words or letters
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  // Variants for the motion span
  const hiddenVariant = {
    opacity: 0,
    filter: 'blur(10px)',
    y: direction === 'top' ? -20 : 20,
  };

  const visibleVariant = {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
  };

  // Intersection Observer to trigger once the text is in view
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          controls.start('visible');
          setHasAnimated(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [controls, hasAnimated, rootMargin, threshold]);

  return (
    <span
      ref={ref}
      className={`blur-text-wrapper ${className}`}
      style={{ display: 'inline-block' }}
      aria-label={text}
    >
      {elements.map((segment, index) => (
        <motion.span
          key={`${segment}-${index}`}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: hiddenVariant,
            visible: visibleVariant,
          }}
          transition={{
            duration,
            delay: (index * delay) / 1000,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}
        >
          {segment}
          {/* Re-insert space between words */}
          {animateBy === 'words' && index < elements.length - 1
            ? '\u00A0'
            : null}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
