"use client";

import { motion } from "framer-motion";

interface TileProps {
  pulseDelay?: number;
}

export default function Tile({ pulseDelay }: TileProps) {
  const isAnimated = pulseDelay !== undefined;

  return (
    <motion.div
      className="aspect-square border border-gray-200/80 cursor-default"
      initial={{ backgroundColor: "rgba(27,158,140,0)" }}
      animate={
        isAnimated
          ? {
              backgroundColor: [
                "rgba(27,158,140,0)",
                "rgba(27,158,140,0.22)",
                "rgba(27,158,140,0)",
              ],
            }
          : undefined
      }
      transition={
        isAnimated
          ? {
              duration: 1.6,
              delay: pulseDelay,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }
          : undefined
      }
      whileHover={{
        backgroundColor: "rgba(27,158,140,0.22)",
        zIndex: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
    />
  );
}
