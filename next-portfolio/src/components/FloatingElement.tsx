"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface FloatingElementProps extends PropsWithChildren {
  className?: string;
  delay?: number;
  duration?: number;
}

export default function FloatingElement({
  children,
  className,
  delay = 0,
  duration = 3
}: FloatingElementProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}