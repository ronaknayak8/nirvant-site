"use client";
import { motion } from "framer-motion";
import { hero } from "@/data/content";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center px-6 md:px-16 bg-gradient-to-br from-sky-300 via-blue-200 to-teal-200">
      
      {/* Floating glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_60%)] blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,112,243,0.25),transparent_60%)] blur-3xl"></div>

      {/* Headline */}
      <motion.h1
        className="relative text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-700 to-teal-700 drop-shadow-lg mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {hero.tagline}
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="relative text-lg md:text-2xl text-blue-900/90 max-w-2xl mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {hero.subtext}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.6 }}
      >
        <button className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          {hero.cta}
        </button>
        <button className="px-8 py-4 border border-sky-600 text-sky-700 text-lg font-semibold rounded-full hover:bg-sky-100 transition-all duration-300">
          Explore Nirvant
        </button>
      </motion.div>

      {/* Floating light orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 right-16 w-40 h-40 bg-white/30 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-24 left-16 w-48 h-48 bg-blue-300/30 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
