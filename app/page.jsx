"use client"

import React from "react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-white flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100" height="100" fill="url(#grad)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Amaan Kazi</h1>
        <p className="text-lg md:text-2xl text-gray-400">Full Stack Developer</p>

        <div className="mt-6 flex gap-4 justify-center scale-90 md:scale-100">
          <HoverBox text="GitHub" link="https://github.com/Amaan-Kazi" />
          <HoverBox text="LinkedIn" link="https://linkedin.com/in/amaan-abrar-kazi" />
        </div>
      </div>
    </div>
  );
}

function HoverBox({ text, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-gray-800 rounded-lg text-white font-semibold shadow-lg"
      whileHover={{ scale: 1.1, backgroundColor: "#1f2937" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {text}
    </motion.a>
  );
}
