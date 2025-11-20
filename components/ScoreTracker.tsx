"use client";

import { motion } from "framer-motion";
import { Trophy, Target } from "lucide-react";

interface ScoreTrackerProps {
  currentRound: number;
  totalRounds: number;
  score: number;
}

export default function ScoreTracker({
  currentRound,
  totalRounds,
  score,
}: ScoreTrackerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center gap-4 flex-wrap max-w-lg mx-auto mb-8"
    >
      {/* Round Counter */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: -2 }}
        className="flex items-center gap-2 bg-white border-3 border-gray-900 px-5 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        style={{ transform: "rotate(1deg)" }}
      >
        <Target className="w-5 h-5 text-gray-900" />
        <span
          className="font-black text-gray-900 text-lg"
          style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
        >
          {currentRound} / {totalRounds}
        </span>
      </motion.div>

      {/* Score Display */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="flex items-center gap-2 bg-gray-900 text-white border-3 border-gray-900 px-6 py-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        style={{ transform: "rotate(-1deg)" }}
      >
        <Trophy className="w-5 h-5 text-yellow-400" />
        <span
          className="font-black text-white text-xl"
          style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
        >
          {score.toLocaleString()}
        </span>
      </motion.div>

      {/* Decorative stars */}
      <motion.div
        className="absolute -right-12 top-0 hidden lg:block"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity },
        }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30">
          <path
            d="M 15 2 L 17 12 L 28 15 L 17 18 L 15 28 L 13 18 L 2 15 L 13 12 Z"
            fill="#fbbf24"
            stroke="#1f2937"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -left-12 top-0 hidden lg:block"
        animate={{
          rotate: [0, -360],
          y: [0, -10, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <svg width="25" height="25" viewBox="0 0 30 30">
          <circle
            cx="15"
            cy="15"
            r="10"
            fill="#3b82f6"
            stroke="#1f2937"
            strokeWidth="2"
          />
          <circle cx="15" cy="15" r="4" fill="white" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
