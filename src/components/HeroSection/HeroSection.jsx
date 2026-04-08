import React from 'react';
import BlurText from '../BlurText/BlurText';

const HeroSection = () => {
  return (
    <section id="about" className="snap-section relative flex flex-col md:flex-row items-center justify-center px-6 md:px-12 w-full max-w-7xl mx-auto gap-12 md:gap-24 mb-32 z-10 min-h-[80vh]">
      
      {/* Left Side (Photo) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-16 md:mt-0">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <img 
            src="/profile.jpg" 
            alt="Pooja Patel" 
            className="w-full h-full object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
          />
          {/* Subtle decorative backing */}
          <div className="absolute inset-0 z-[-1] bg-slate-100 rounded-3xl -rotate-6 blur-lg opacity-50" />
        </div>
      </div>

      {/* Right Side (Typography) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="font-outfit text-6xl md:text-8xl font-black tracking-tighter text-slate-800 leading-[0.9] mb-8">
          Pooja<br/>Patel<span className="text-slate-400">.</span>
        </h1>
        
        <div className="max-w-2xl font-inter text-lg md:text-xl text-slate-600 leading-relaxed font-light tracking-tight flex flex-wrap">
          <BlurText 
            text="Computer Science undergraduate and aspiring Applied ML Systems Researcher with a robust foundation in core CS fundamentals, distributed architectures, and cybersecurity."
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.8}
            className="inline text-slate-600"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
