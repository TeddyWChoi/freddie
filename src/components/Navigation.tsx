import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import svgPaths from "../imports/svg-7rhauayh9t";

export function Navigation() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 mix-blend-difference"
    >
      <div className="text-xl font-serif font-bold tracking-widest">SEOUL RHAPSODY</div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest">
        <button onClick={() => document.getElementById('campaign')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors uppercase">Campaign</button>
        <button onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors uppercase">Music</button>
        <button onClick={() => document.getElementById('visuals')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors uppercase">Visuals</button>
        <button onClick={() => document.getElementById('goods')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan-400 transition-colors uppercase">Goods</button>
      </div>

      <button className="md:hidden text-white">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 12H21M3 6H21M3 18H21" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </motion.nav>
  );
}
