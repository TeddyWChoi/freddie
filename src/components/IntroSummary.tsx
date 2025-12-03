import React from 'react';
import { motion } from 'motion/react';

export function IntroSummary() {
  return (
    <section id="campaign" className="relative py-32 px-6 bg-[#030305] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-white/20" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 border border-cyan-500/30 rounded-full text-cyan-400 text-xs tracking-widest mb-8 backdrop-blur-sm">
            PROJECT MANIFESTO
          </span>
          
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-16 text-white">
            <span className="block text-white/40 text-2xl md:text-3xl italic mb-4">"Voice Beyond Borders"</span>
            프레디 머큐리의 목소리가<br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-purple-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              서울에서 다시 울린다.
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-20 border-t border-white/10 pt-12">
            <div className="group">
              <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-4 group-hover:text-cyan-400 transition-colors">01. Fusion</h3>
              <p className="text-white/60 text-sm leading-7 group-hover:text-white/80 transition-colors">
                프레디 머큐리의 '장르 파괴적 창의성'과 K-Pop의 만남. 장르, 세대, 국가의 경계를 허무는 새로운 음악적 서사.
              </p>
            </div>
            <div className="group">
               <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-4 group-hover:text-purple-400 transition-colors">02. Identity</h3>
               <p className="text-white/60 text-sm leading-7 group-hover:text-white/80 transition-colors">
                 가장 한국적인 것이 가장 세계적인 것. 한복, 국악, 그리고 서울의 밤거리를 배경으로 재탄생한 록 스피릿.
               </p>
            </div>
            <div className="group">
               <h3 className="text-white font-bold tracking-widest text-xs uppercase mb-4 group-hover:text-pink-400 transition-colors">03. Legacy</h3>
               <p className="text-white/60 text-sm leading-7 group-hover:text-white/80 transition-colors">
                 우리는 과거의 스타를 추억하는 것을 넘어, 모든 세대가 자신을 표현할 수 있는 '자유의 목소리'를 탐구합니다.
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
