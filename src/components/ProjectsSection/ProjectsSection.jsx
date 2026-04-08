import React from 'react';
import ScrollStack, { ScrollStackItem } from '../ScrollStack/ScrollStack';

const ProjectsSection = () => {
  const PROJECTS = [
    {
      id: 'netra',
      header: '01 - Cybersecurity',
      title: 'NETRA v2',
      subtitle: 'AI-Native Asset Discovery Engine',
    },
    {
      id: 'oasis',
      header: '02 - AI Documentation',
      title: 'OASIS',
      subtitle: 'Self-Healing Documentation Engine',
    },
    {
      id: 'disaster',
      header: '03 - ML Platform',
      title: 'Disaster Risk Prediction',
      subtitle: 'End-to-End ML Platform for Risk Modeling',
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-offwhite z-10 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32">
        <h2 className="font-outfit text-4xl md:text-6xl font-black text-slate-800 tracking-tighter mb-[5vh]">
          Systems I've Built<span className="text-slate-400">.</span>
        </h2>
      </div>
      
      {/* Scroll Stack dynamically handles its own Lenis scrolling and pinning */}
      <ScrollStack useWindowScroll={true} itemDistance={100} itemStackDistance={30} blurAmount={0}>
        {PROJECTS.map((project) => (
          <ScrollStackItem key={project.id}>
            <div className="flex flex-col gap-4 h-full justify-center">
              <span className="text-sm md:text-base font-outfit font-bold tracking-widest uppercase text-slate-400">
                {project.header}
              </span>
              <h3 className="font-outfit text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">
                {project.title}
              </h3>
              <p className="font-inter text-xl md:text-2xl text-slate-500 font-light max-w-2xl mt-4">
                {project.subtitle}
              </p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default ProjectsSection;
