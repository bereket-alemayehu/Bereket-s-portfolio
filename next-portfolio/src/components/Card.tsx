"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends PropsWithChildren {
  className?: string;
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
}

export default function Card({
  children,
  className,
  variant = "default",
  hover = true,
}: CardProps) {
  const baseClasses = "rounded-2xl border transition-all duration-300";

  const variants = {
    default: "border-border bg-card text-card-foreground shadow-sm",
    glass: "glass border-white/20 bg-white/5 text-foreground",
    gradient:
      "border-transparent bg-linear-to-br from-primary/10 to-secondary/10 text-foreground",
  };

  const hoverClasses = hover
    ? "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02]"
    : "";

  return (
    <motion.div
      className={cn(baseClasses, variants[variant], hoverClasses, className)}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.02,
              transition: { duration: 0.2 },
            }
          : undefined
      }
      whileTap={hover ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  );
}
