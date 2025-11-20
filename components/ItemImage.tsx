"use client";

import { motion } from "framer-motion";
import { Item } from "@/types";
import { getCategoryEmoji } from "@/lib/tools";

interface ItemImageProps {
  item: Item;
}

export default function ItemImage({ item }: ItemImageProps) {
  const emoji = getCategoryEmoji(item.category);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-52 h-52 mx-auto mb-6"
    >
      {/* Background circle with hand-drawn style */}
      <div
        className="absolute inset-0 bg-white border-3 border-gray-900 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        style={{
          background:
            "repeating-linear-gradient(45deg, #f9fafb 0px, #f9fafb 10px, #f3f4f6 10px, #f3f4f6 20px)",
        }}
      />

      {/* Emoji container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-8xl z-10"
        >
          {emoji}
        </motion.div>
      </div>

      {/* Level badge - doodle style */}
      <motion.div
        className="absolute -top-2 -right-2 bg-gray-900 text-white text-sm font-black px-4 py-2 rounded-full border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-20"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
        style={{
          fontFamily: "Comic Sans MS, cursive, sans-serif",
          transform: "rotate(12deg)",
        }}
      >
        LVL {item.difficulty}
      </motion.div>

      {/* Decorative squiggles */}
      <svg
        className="absolute -top-4 -left-4 w-12 h-12 opacity-30"
        viewBox="0 0 40 40"
      >
        <path
          d="M 5 20 Q 15 10 25 20 T 45 20"
          stroke="#1f2937"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="absolute -bottom-4 -right-4 w-10 h-10 opacity-30"
        viewBox="0 0 40 40"
      >
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke="#1f2937"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="20" cy="20" r="8" fill="#1f2937" />
      </svg>

      {/* Corner dots */}
      <div className="absolute top-2 left-2 w-2 h-2 bg-gray-900 rounded-full" />
      <div className="absolute bottom-2 right-2 w-2 h-2 bg-gray-900 rounded-full" />
    </motion.div>
  );
}
