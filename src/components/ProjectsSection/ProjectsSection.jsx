import React from 'react';
import ScrollStack from '../ScrollStack/ScrollStack';

const ProjectsSection = () => {
  const PROJECTS = [
    {
      id: 'netra',
      title: 'NETRA v2',
      subtitle: 'AI-Native Asset Discovery Engine',
    },
    {
      id: 'oasis',
      title: 'OASIS',
      subtitle: 'Self-Healing Documentation Engine',
    },
    {
      id: 'disaster',
      title: 'Disaster Risk Prediction Platform',
      subtitle: 'End-to-End ML Platform for Risk Modeling',
    },
  ];

  /* 
    The section here is deliberately NOT a snap-section, but a flexible container 
    that allows the 3 scroll-stack cards to stick naturally inside the document flow. 
    It still integrates perfectly into the 100vh Lucid Architect motif.
  */
  return (
    <section id="projects" className="relative w-full bg-offwhite px-6 md:px-12 py-24 z-10">
      <div className="max-w-6xl w-full mx-auto mb-[10vh]">
        <h2 className="font-outfit text-4xl md:text-6xl font-black text-slate-800 tracking-tighter">
          Systems I've Built<span className="text-slate-400">.</span>
        </h2>
      </div>
      <ScrollStack projects={PROJECTS} />
    </section>
  );
};

export default ProjectsSection;
