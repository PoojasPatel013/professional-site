import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const FluidGlass = () => {
  const [isMounted, setIsMounted] = useState(false);

  // SSR Safe checks
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (!isMounted) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 250); // Offset to perfectly center the blob 
      cursorY.set(e.clientY - 250);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-offwhite">
      {/* Dynamic blob tracking the mouse */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-60 mix-blend-multiply"
        style={{
          x: cursorX,
          y: cursorY,
          // Soft pastel blue/gray tones requested for Lucid Architect
          background: 'radial-gradient(circle, rgba(135,170,220,0.4) 0%, rgba(180,200,230,0) 70%)',
        }}
      />
      {/* Background static blobs to give it atmosphere */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full blur-[140px] opacity-30 mix-blend-multiply pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(148,163,184,0.3) 0%, rgba(148,163,184,0) 70%)' }}
      />
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 mix-blend-multiply pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(100,116,139,0.3) 0%, rgba(100,116,139,0) 70%)' }}
      />
    </div>
  );
};

export default FluidGlass;
