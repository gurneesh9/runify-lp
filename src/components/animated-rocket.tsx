"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const AnimatedRocket = ({ className = "" }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [-8, 8, -8],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        className="w-full h-full"
        aria-hidden="true"
      >
        <g transform="translate(200, 100) scale(0.6)">
          {/* Main body */}
          <path
            d="M400,50 C250,50 100,200 100,500 C100,700 250,850 400,850 C550,850 700,700 700,500 C700,200 550,50 400,50 Z"
            fill="#13263c"
          />
          {/* Nose cone */}
          <path d="M400,50 L250,300 L550,300 Z" fill="#ff7402" />
          {/* Windows */}
          <circle cx="400" cy="400" r="50" fill="#ffffff" />
          <circle cx="400" cy="550" r="40" fill="#ffffff" />
          {/* Fins */}
          <path d="M100,500 L50,700 L200,600 Z" fill="#ffa005" />
          <path d="M700,500 L750,700 L600,600 Z" fill="#ffa005" />
          {/* Flames */}
          <path d="M250,850 C300,950 500,950 550,850 L400,950 Z" fill="#ff4d00">
            <animate
              attributeName="d"
              dur="0.3s"
              repeatCount="indefinite"
              values="M250,850 C300,950 500,950 550,850 L400,950 Z;
                      M250,850 C300,900 500,900 550,850 L400,900 Z;
                      M250,850 C300,950 500,950 550,850 L400,950 Z"
            />
          </path>
        </g>
      </svg>
    </motion.div>
  );
};
