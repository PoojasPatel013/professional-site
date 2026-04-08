import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const FluidGlass = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (!isMounted) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 250); 
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
      {/* Dynamic blob tracking the mouse with much more vibrant, colorful aesthetics */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-70 mix-blend-multiply"
        style={{
          x: cursorX,
          y: cursorY,
          background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(236,72,153,0.4) 50%, rgba(14,165,233,0) 80%)',
        }}
      />
      
      {/* Static abstract shapes to increase vibrancy */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-40 mix-blend-multiply pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)' }}
      />
      <div 
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-30 mix-blend-multiply pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0) 70%)' }}
      />
    </div>
  );
};

export default FluidGlass;
