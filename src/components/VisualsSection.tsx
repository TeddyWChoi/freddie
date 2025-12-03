import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import outroImg from "figma:asset/30464a95580d6fce00f97d150b4b19339ec7ccbc.png";
import imgGolden from "figma:asset/1b2742e364a1ab2b688c75a6a84f2ba405a486cb.png";
import imgApt from "figma:asset/7fa2798a8e0abd90ad687e37e8428483413ebcf8.png";
import imgUphill from "figma:asset/634a675f87fd23673f7bb783753caf558cd220a0.png";
import imgAlbum1 from "figma:asset/65e2f1ea8f046440aa866f25b470238e8034c01c.png";
import imgAlbum2 from "figma:asset/d3315d2a30e67ee5038ed87ee4198d5eeff4c21c.png";
import imgAlbum3 from "figma:asset/527168867a0c3131f57a9de9cc0fbb08e85f1c45.png";

export function VisualsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="visuals" className="pt-[80px] pb-[0px] bg-[#030305] relative pr-[0px] pl-[0px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-purple-500 tracking-[0.5em] uppercase mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-purple-500"></span>
              MV & POSTER
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif text-white">
              VISUAL ART
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-right text-white/50 text-sm mt-6 md:mt-0 max-w-full md:whitespace-nowrap"
          >
            프레디의 아이콘을 한복의 선과 색동으로 재해석한 시각적 경험
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[150vh] md:h-[90vh]">
          {/* 1. Main Large Visual (Seoul Rhapsody) - Spans 2x2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedVideo("https://www.youtube.com/embed/YIV_URly8g0?autoplay=1")}
            className="md:col-span-2 md:row-span-2 relative rounded-sm overflow-hidden border border-white/10 group cursor-pointer"
          >
            <img
              src={imgAlbum1}
              alt="Seoul Rhapsody"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h4 className="text-3xl font-serif italic text-white mb-2">
                Seoul Rhapsody
              </h4>
              <p className="text-cyan-400 text-xs tracking-widest uppercase">
                Limited Edition
              </p>
            </div>
          </motion.div>

          {/* 6. Album Art 2 - New Seoul Rhapsody Poster */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onClick={() => setSelectedImage(imgAlbum2)}
            className="md:col-span-1 md:row-span-1 relative rounded-sm overflow-hidden border border-white/10 group cursor-pointer"
          >
            <img
              src={imgAlbum2}
              alt="Seoul Rhapsody"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
              <p className="text-white font-serif italic">Seoul Rhapsody</p>
              <p className="text-xs text-white/50 mt-1">
                우리의 무대는 끝나지 않았다
              </p>
            </div>
          </motion.div>

          {/* 7. Album Art 3 - Royal Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            onClick={() => setSelectedImage(imgAlbum3)}
            className="md:col-span-1 md:row-span-1 relative rounded-sm overflow-hidden border border-white/10 group cursor-pointer"
          >
            <img
              src={imgAlbum3}
              alt="Royal Portrait"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
              <p className="text-white font-serif italic">Royal Portrait</p>
              <p className="text-xs text-white/50 mt-1">Heritage Reimagined</p>
            </div>
          </motion.div>

          {/* 8. Quote Block - Spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="md:col-span-2 md:row-span-1 relative rounded-sm overflow-hidden border border-white/10 bg-gradient-to-r from-purple-900/20 to-[#030305] flex items-center justify-center p-8"
          >
            <div className="text-center">
              <svg
                className="w-8 h-8 text-white/20 mx-auto mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M14.017 21L14.017 18C14.017 16.082 12.438 15.524 10.958 13.945C9.579 12.473 9.16 11.36 9.32 10.075C9.66 7.337 11.744 5.817 13.773 4.571C15.042 3.793 16.326 3.022 16.657 1H12.946C11.318 1 9.227 2.023 7.882 3.16C6.46 4.36 5.34 5.944 4.783 7.69C3.976 10.214 4.192 12.26 5.305 14.618C6.406 16.95 7.542 18.645 8.682 21H14.017ZM20.783 21H24L24 18C24 16.082 22.421 15.524 20.941 13.945C19.562 12.473 19.143 11.36 19.303 10.075C19.643 7.337 21.727 5.817 23.756 4.571C25.025 3.793 26.309 3.022 26.64 1H22.929C21.301 1 19.21 2.023 17.865 3.16C16.443 4.36 15.323 5.944 14.766 7.69C13.959 10.214 14.175 12.26 15.288 14.618C16.389 16.95 17.525 18.645 18.665 21H20.783Z"
                  transform="translate(-4 0)"
                />
              </svg>
              <p className="text-white font-serif italic text-xl md:text-2xl mb-2">
                "The Show Must Go On"
              </p>
              <p className="text-white/40 text-sm tracking-widest uppercase">
                Now in Seoul
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image container
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Expanded Visual"
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal - Fullscreen */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] text-white/50 hover:text-white transition-colors p-2 bg-black/20 rounded-full backdrop-blur-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full h-full"
            >
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
