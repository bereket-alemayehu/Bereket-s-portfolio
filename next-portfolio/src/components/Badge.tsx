"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "gradient";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Badge({
  children,
  variant = "default",
  className,
  size = "md",
}: BadgeProps) {
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-xs",
    lg: "px-4 py-2 text-sm",
  };

  const variantClasses = {
    default:
      "rounded-full border border-border bg-secondary text-secondary-foreground",
    secondary:
      "rounded-full border border-border bg-muted text-muted-foreground",
    outline: "rounded-full border border-primary bg-transparent text-primary",
    gradient:
      "rounded-full border border-transparent bg-linear-to-r from-primary to-primary/80 text-primary-foreground shadow-sm",
  };

  return (
    <motion.span
      className={cn(
        "inline-flex items-center font-medium transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
}
