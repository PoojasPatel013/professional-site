import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FluidCursorBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 15, mass: 0.5 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 15, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half the size of the blob so the cursor sits in the middle
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#FAFAFA] overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-70 will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          background: 'radial-gradient(circle, rgba(162,194,228,0.8) 0%, rgba(200,210,230,0.5) 40%, rgba(250,250,250,0) 80%)',
        }}
      />
      {/* Optional static ambient blob for extra pastel touch */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full blur-[120px] bg-sky-100 opacity-40 mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] bg-slate-100 opacity-50 mix-blend-multiply" />
    </div>
  );
};

export default FluidCursorBackground;
