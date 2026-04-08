import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StackCard = ({ project, index, targetScale }) => {
  const cardRef = useRef(null);
  
  // Create a slight scale down effect for cards behind the current one
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div 
      ref={cardRef} 
      className="sticky top-0 flex items-center justify-center min-h-screen pb-12 pt-[80px]"
    >
      <motion.div 
        style={{ scale, opacity, top: `calc(15vh + ${index * 20}px)` }}
        className="relative flex flex-col justify-center w-full max-w-4xl bg-white rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 origin-top"
      >
        <div className="flex flex-col gap-4">
          <span className="text-sm md:text-base font-outfit font-bold tracking-widest uppercase text-slate-400">
            {project.id === 'netra' ? '01 - Cybersecurity' : project.id === 'oasis' ? '02 - AI Documentation' : '03 - ML Platform'}
          </span>
          <h3 className="font-outfit text-3xl md:text-5xl font-black text-slate-800 tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="font-inter text-lg md:text-xl text-slate-500 font-light max-w-2xl mt-4">
            {project.subtitle}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const ScrollStack = ({ projects }) => {
  const containerRef = useRef(null);
  // We use standard CSS sticky positioning to create the scroll-stack effect
  return (
    <div ref={containerRef} className="relative w-full">
      {projects.map((project, i) => {
        // Calculate the target scale so cards progressively scale down as more stack on top
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <StackCard 
            key={project.id} 
            project={project} 
            index={i} 
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export default ScrollStack;
