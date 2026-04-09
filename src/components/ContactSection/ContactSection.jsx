import React from 'react';
import FlowingMenu from '../FlowingMenu/FlowingMenu';

const CONTACT_LINKS = [
  { link: 'https://github.com/PoojasPatel013', text: 'GitHub', image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop' },
  { link: 'https://www.linkedin.com/in/pooja-p-77329933b/', text: 'LinkedIn', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
  { link: 'mailto:poojaspatel1375@gmail.com', text: 'Email', image: 'https://images.unsplash.com/photo-1577563908411-50cb98976fea?q=80&w=800&auto=format&fit=crop' },
];

const ContactSection = () => {
  return (
    <section id="connect" className="snap-section relative flex flex-col items-center justify-center px-6 md:px-12 min-h-screen">
      <div className="w-full flex justify-between items-start mb-auto mt-24">
        <h2 className="font-outfit text-xl md:text-3xl font-bold text-slate-400 uppercase tracking-widest">
          Connect<span className="text-slate-300">.</span>
        </h2>
      </div>

      <div className="flex-1 w-full flex items-center justify-center z-10 h-[500px] relative rounded-3xl overflow-hidden">
        <FlowingMenu
          items={CONTACT_LINKS}
          speed={15}
          textColor="#220d0dff"
          bgColor="#E8D5F5"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#0f172a"
          borderColor="rgba(255,255,255,0.15)"
        />
      </div>

      <div className="w-full flex justify-between items-end mt-auto mb-12">
        <p className="font-inter text-sm text-slate-500 tracking-wider">
          © {new Date().getFullYear()} Pooja Patel
        </p>
        <p className="font-inter text-sm text-slate-500 tracking-wider hidden md:block">
          Built with Gatsby &amp; Framer Motion
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
