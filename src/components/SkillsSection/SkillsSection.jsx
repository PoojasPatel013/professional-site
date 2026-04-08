/**
 * SkillsSection.jsx — Premium Bento Grid skills layout
 *
 * Three cards: Languages | Applied ML & AI | Cloud, Systems & Security
 * Soft diffuse shadows, no harsh borders. Entrance via IntersectionObserver.
 */

import React, { useEffect, useRef, useState } from 'react';
import './SkillsSection.css';

/* ── Skill data ──────────────────────────────────────────── */
const SKILL_GROUPS = [
  {
    id: 'languages',
    icon: '⌨️',
    title: 'Languages',
    accent: '#3B5BDB',
    accentLight: 'rgba(59, 91, 219, 0.07)',
    skills: [
      'Python 3.10',
      'Ruby',
      'JavaScript',
      'TypeScript',
      'C / C++',
      'Rust',
      'Java',
      'Bash',
    ],
  },
  {
    id: 'ml-ai',
    icon: '🧠',
    title: 'Applied ML & AI',
    accent: '#0F766E',
    accentLight: 'rgba(15, 118, 110, 0.07)',
    skills: [
      'Amazon Bedrock',
      'Nova Pro',
      'Claude 4 Sonnet',
      'TinyLLM',
      'NLP Analysis',
      'Predictive Modeling',
    ],
  },
  {
    id: 'cloud-systems',
    icon: '☁️',
    title: 'Cloud, Systems & Security',
    accent: '#7C3AED',
    accentLight: 'rgba(124, 58, 237, 0.07)',
    skills: [
      'Kubernetes',
      'Docker Compose',
      'MinIO',
      'Redis Streams',
      'Neo4j',
      'Vulnerability Assessment',
      'AST Analysis',
      'Google Cloud',
    ],
  },
];

/* ── Skill pill ──────────────────────────────────────────── */
const SkillPill = ({ label, accent }) => (
  <span className="skill-pill" style={{ '--pill-accent': accent }}>
    {label}
  </span>
);

/* ── Individual bento card ───────────────────────────────── */
const BentoCard = ({ group, index, isVisible }) => (
  <article
    className={`bento-card bento-card--${group.id} ${isVisible ? 'bento-card--visible' : ''}`}
    style={{
      '--card-accent': group.accent,
      '--card-accent-light': group.accentLight,
      transitionDelay: `${index * 120}ms`,
    }}
    aria-label={`${group.title} skills`}
  >
    {/* Accent top bar */}
    <div className="bento-card__bar" aria-hidden="true" />

    <header className="bento-card__header">
      <span className="bento-card__icon" aria-hidden="true">
        {group.icon}
      </span>
      <h3 className="bento-card__title">{group.title}</h3>
    </header>

    <div className="bento-card__pills" role="list" aria-label={`${group.title} technologies`}>
      {group.skills.map((skill) => (
        <SkillPill key={skill} label={skill} accent={group.accent} />
      ))}
    </div>
  </article>
);

/* ── Section ─────────────────────────────────────────────── */
const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="skills-section"
      ref={sectionRef}
      aria-labelledby="skills-heading"
    >
      <div className="section-container">
        {/* ── Section header ── */}
        <header className="section-header">
          <p className="section-eyebrow">Technical Arsenal</p>
          <h2 id="skills-heading" className="section-title">
            Core Competencies
          </h2>
          <p className="section-subtitle">
            A curated stack refined through research, systems engineering,
            and production-grade deployments.
          </p>
        </header>

        {/* ── Bento grid ── */}
        <div className="bento-grid" role="region" aria-label="Skills organized by category">
          {SKILL_GROUPS.map((group, i) => (
            <BentoCard
              key={group.id}
              group={group}
              index={i}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
