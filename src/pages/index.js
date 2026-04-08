import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';

import StaggeredMenu from '../components/StaggeredMenu/StaggeredMenu';
import HeroSection from '../components/HeroSection/HeroSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import ContactSection from '../components/ContactSection/ContactSection';

// Dynamically import FluidGlass since it relies on window/mousemove objects
// which throw errors during Gatsby's SSR (Server-Side Rendering) build phase.
const FluidGlass = lazy(() => import('../components/FluidGlass/FluidGlass'));

const IndexPage = () => {
  const isBrowser = typeof window !== 'undefined';

  return (
    <>
      <Helmet>
        <title>Pooja Patel — Applied ML Systems Researcher</title>
        <meta name="description" content="Portfolio of Pooja Patel — Lucid Architect Design." />
      </Helmet>

      {/* Global Background Interactive Blob */}
      {isBrowser && (
        <Suspense fallback={<div className="fixed inset-0 z-[-1] bg-offwhite" />}>
          <FluidGlass />
        </Suspense>
      )}

      {/* Animated Fixed Header Menu */}
      <StaggeredMenu />

      {/* 
        Snap-Y scrolling container for the entire viewport. 
        Each section acts as a slide.
      */}
      <main className="snap-y-container w-full">
        <HeroSection />
        
        {/* We omitted snap constraints on the projects page specifically as the ScrollStack works via scrolling over height. */}
        <ProjectsSection />
        
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
};

export default IndexPage;
