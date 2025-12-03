import React from "react";
import { motion } from "motion/react";
import heroImg from "figma:asset/95b14089a8cf1295581605d2d911dd6c9d89fda6.png";
import logoImg from "figma:asset/4bada95214418d961f64a682f83518a094ee14f0.png";
import { SpectrumBar, VolumeButton } from "./HeroDeco";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background using the provided image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Seoul Nightscape Background"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Vignette and overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#030305]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          <p className="text-cyan-400 text-xs md:text-sm tracking-[0.5em] uppercase mb-8 font-bold drop-shadow-lg">
            K-Pop Legacy Extension Project
          </p>

          {/* Logo Image */}
          <div className="relative mb-6 max-w-full">
            <div className="absolute inset-0 bg-cyan-400/20 blur-[80px] rounded-full opacity-50" />
            <img
              src={logoImg}
              alt="Seoul Rhapsody Logo"
              className="relative w-[300px] md:w-[500px] h-auto drop-shadow-2xl"
            />
          </div>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
            <span className="text-white/60 text-xs tracking-[0.3em] uppercase">
              Est. 2025
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-white/50 to-transparent" />
          </div>

          <p className="text-white/90 text-xl md:text-2xl font-serif italic tracking-wide drop-shadow-lg">
            "Where Freddie Mercury Meets K-Pop"
          </p>
        </motion.div>
      </div>

      {/* Bottom Gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#030305] via-[#030305]/50 to-transparent z-20" />

      {/* Restored Figma Decorations */}
      <SpectrumBar />
      <VolumeButton />
    </section>
  );
}