import React from 'react';
import BlurText from '../BlurText/BlurText';

const HeroSection = () => {
  return (
    <section id="about" className="snap-section relative flex items-center justify-center px-6 md:px-12">
      <div className="max-w-6xl w-full z-10 flex flex-col gap-8 md:gap-12 mt-16 md:mt-0">
        {/* Massive Typography Name / Greeting */}
        <div className="flex flex-col">
          <h1 className="font-outfit text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter text-slate-800 leading-[0.9]">
            Pooja<br/>Patel<span className="text-slate-400">.</span>
          </h1>
        </div>

        {/* Blur Text Summary */}
        <div className="max-w-3xl">
          <h2 className="font-inter text-lg md:text-2xl text-slate-600 leading-relaxed font-light tracking-tight">
            <BlurText 
              text="Computer Science undergraduate and aspiring Applied ML Systems Researcher with a robust foundation in core CS fundamentals, distributed architectures, and cybersecurity."
              animateBy="words"
              direction="bottom"
              delay={40}
              duration={0.8}
              className="inline"
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
