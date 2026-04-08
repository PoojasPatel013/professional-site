import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StaggeredMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Connect', href: '#connect' },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: 'afterChildren',
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12 md:py-8 mix-blend-difference text-white">
        <div className="font-outfit font-bold text-2xl tracking-tighter mix-blend-difference">
          PP<span className="text-slate-400">.</span>
        </div>
        <button
          className="z-50 font-outfit uppercase tracking-widest text-sm font-bold mix-blend-difference hover:text-slate-300 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-slate-900 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-outfit text-5xl md:text-7xl font-black text-white hover:italic transition-all uppercase tracking-tighter"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StaggeredMenu;
