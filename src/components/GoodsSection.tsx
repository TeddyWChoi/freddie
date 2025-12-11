import React from "react";
import { motion } from "motion/react";
import goods1 from "figma:asset/3af122ce083b3db6a8cc2d9c89d851fd027e660e.png";
import goods2 from "../assets/photocard.png";
import goods3 from "figma:asset/7fa0d50255b7d0d456496016ed49543a3a010b4f.png";

export function GoodsSection() {
  const items = [
    { img: goods1, name: "LIMITED LP", price: "₩89,000" },
    { img: goods2, name: "PHOTO CARD", price: "₩15,000" },
    {
      img: goods3,
      name: "MERCURY NEON T-SHIRT",
      price: "₩65,000",
    },
  ];

  return (
    <section id="goods" className="p-[0px] bg-[#030305] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif  text-white mb-6"
          >
            The Collection
          </motion.h2>
          <div className="w-px h-12 bg-white/20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-white/5 rounded-sm border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end justify-center pb-8">
                  <button className="text-xs font-bold text-white tracking-widest uppercase border-b border-white pb-1 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                    Add to Cart
                  </button>
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl font-serif text-white mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-white/40 font-medium">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}