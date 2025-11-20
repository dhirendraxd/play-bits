"use client";

import { motion } from "framer-motion";
import { Difficulty } from "@/types";
import { getDifficultyLabel } from "@/lib/tools";

interface DifficultySelectorProps {
  selectedDifficulty?: Difficulty;
  onSelect: (difficulty?: Difficulty) => void;
}

export default function DifficultySelector({
  selectedDifficulty,
  onSelect,
}: DifficultySelectorProps) {
  const difficulties: (Difficulty | undefined)[] = [undefined, 1, 2, 3, 4];

  const getDifficultyColor = (
    difficulty?: Difficulty
  ): { bg: string; border: string; text: string } => {
    if (!difficulty)
      return {
        bg: "bg-gray-100",
        border: "border-gray-900",
        text: "text-gray-900",
      };
    if (difficulty <= 2)
      return {
        bg: "bg-green-100",
        border: "border-green-600",
        text: "text-green-900",
      };
    if (difficulty === 3)
      return {
        bg: "bg-yellow-100",
        border: "border-yellow-600",
        text: "text-yellow-900",
      };
    return { bg: "bg-red-100", border: "border-red-600", text: "text-red-900" };
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3
          className="text-xl font-black text-gray-900"
          style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}
        >
          Pick Your Level! ⚡
        </h3>
        <div className="flex items-center justify-center gap-2 mt-1">
          <div
            className="w-8 h-0.5 bg-gray-400"
            style={{ transform: "rotate(-2deg)" }}
          />
          <div
            className="w-8 h-0.5 bg-gray-400"
            style={{ transform: "rotate(2deg)" }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {difficulties.map((diff, index) => {
          const colors = getDifficultyColor(diff);
          const isSelected = selectedDifficulty === diff;
          const rotation = [-1.5, 0.5, -0.5, 1, -1][index];

          return (
            <motion.button
              key={index}
              onClick={() => onSelect(diff)}
              whileHover={{ scale: 1.05, rotate: rotation + 2 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-5 py-3 rounded-xl font-black transition-all border-3
                ${
                  isSelected
                    ? `${colors.bg} ${colors.border} ${colors.text} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
                    : "bg-white border-gray-900 text-gray-700 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                }
              `}
              style={{
                transform: `rotate(${rotation}deg)`,
                fontFamily: "Comic Sans MS, cursive, sans-serif",
              }}
            >
              {diff ? getDifficultyLabel(diff) : "All Levels"}
            </motion.button>
          );
        })}
      </div>

      {/* Decorative doodles */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <svg width="40" height="20" viewBox="0 0 40 20" className="opacity-30">
          <path
            d="M 5 10 Q 15 5 25 10 T 45 10"
            stroke="#1f2937"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="w-2 h-2 bg-gray-400 rounded-full" />
        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        <div className="w-2 h-2 bg-gray-400 rounded-full" />
        <svg width="40" height="20" viewBox="0 0 40 20" className="opacity-30">
          <path
            d="M 5 10 Q 15 15 25 10 T 45 10"
            stroke="#1f2937"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
