import React from 'react';
import FlowingMenu from '../FlowingMenu/FlowingMenu';

const ContactSection = () => {
  return (
    <section id="connect" className="snap-section relative flex flex-col items-center justify-center px-6 md:px-12 bg-offwhite min-h-screen">
      <div className="w-full flex justify-between items-start mb-auto mt-24">
        <h2 className="font-outfit text-xl md:text-3xl font-bold text-slate-400 uppercase tracking-widest">
          Connect<span className="text-slate-300">.</span>
        </h2>
      </div>

      <div className="flex-1 w-full flex items-center justify-center z-10">
        <FlowingMenu />
      </div>

      <div className="w-full flex justify-between items-end mt-auto mb-12">
        <p className="font-inter text-sm text-slate-400 tracking-wider">
          © {new Date().getFullYear()} Pooja Patel
        </p>
        <p className="font-inter text-sm text-slate-400 tracking-wider hidden md:block">
          Built with Gatsby & Framer Motion
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
