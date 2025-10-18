"use client";

import { hero } from "@/data/content";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-sky-50 min-h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-20 mt-[190px]">
  <motion.h1
    className="text-5xl md:text-6xl font-bold text-sky-800 mb-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {hero.tagline}
  </motion.h1>

  <motion.p
    className="text-gray-700 max-w-2xl mb-6 text-lg md:text-xl"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    {hero.subtext}
  </motion.p>

  <motion.div
    className="flex gap-4 flex-col sm:flex-row"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    <button className="px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition">
      {hero.cta}
    </button>
    <button className="px-6 py-3 border border-sky-600 text-sky-600 font-medium rounded-lg hover:bg-sky-100 transition">
      Explore Nirvant
    </button>
  </motion.div>
</section>

  );
}

