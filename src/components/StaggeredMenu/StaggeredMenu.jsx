import React from 'react';
import { motion } from 'framer-motion';

const StaggeredMenu = () => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Connect', href: '#connect' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2, // slightly delayed so the page can load first
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12 md:py-8 mix-blend-difference text-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="font-outfit font-bold text-xl tracking-tighter">
        PP<span className="text-slate-400">.</span>
      </motion.div>
      
      <ul className="flex items-center gap-6 md:gap-10">
        {links.map((link) => (
          <motion.li key={link.name} variants={itemVariants}>
            <a 
              href={link.href} 
              className="font-inter text-sm md:text-base tracking-wide hover:opacity-75 transition-opacity"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default StaggeredMenu;
