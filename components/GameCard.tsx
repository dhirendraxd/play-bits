"use client";

import { motion } from "framer-motion";
import { Item } from "@/types";
import ItemImage from "./ItemImage";

interface GameCardProps {
  item: Item;
}

export default function GameCard({ item }: GameCardProps) {
  const categoryColors: Record<string, { bg: string; border: string }> = {
    grocery: { bg: "bg-green-50", border: "border-green-600" },
    food: { bg: "bg-orange-50", border: "border-orange-600" },
    transport: { bg: "bg-blue-50", border: "border-blue-600" },
    home: { bg: "bg-purple-50", border: "border-purple-600" },
    services: { bg: "bg-pink-50", border: "border-pink-600" },
    health: { bg: "bg-red-50", border: "border-red-600" },
    stationery: { bg: "bg-yellow-50", border: "border-yellow-600" },
  };

  const colors = categoryColors[item.category] || {
    bg: "bg-gray-50",
    border: "border-gray-600",
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0, rotate: -2 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="max-w-lg mx-auto mb-8"
    >
      <div
        className={`bg-white border-3 border-gray-900 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 ${colors.bg}`}
        style={{ transform: "rotate(0.5deg)" }}
      >
        <ItemImage item={item} />

        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-black text-gray-900"
            style={{
              fontFamily: "Comic Sans MS, cursive, sans-serif",
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
            }}
          >
            {item.name}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 flex-wrap"
          >
            <span
              className={`px-4 py-2 border-2 ${colors.border} bg-white rounded-full text-sm font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
              style={{ transform: "rotate(-1deg)" }}
            >
              {item.category.toUpperCase()}
            </span>
            <span
              className="px-4 py-2 bg-gray-900 text-white border-2 border-gray-900 rounded-full text-sm font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              style={{ transform: "rotate(1deg)" }}
            >
              {item.unit}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-4"
          >
            <div
              className="inline-block bg-yellow-100 border-2 border-gray-900 rounded-xl px-6 py-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{ transform: "rotate(-0.5deg)" }}
            >
              <p className="text-gray-800 text-lg font-bold">
                How much does this cost? 🤔
              </p>
            </div>
          </motion.div>
        </div>

        {/* Decorative dots */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-gray-900 rounded-full" />
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-gray-900 rounded-full" />
      </div>
    </motion.div>
  );
}
