"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "gradient" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "default",
  size = "md",
  className,
  href,
  target,
  rel,
  onClick,
  disabled = false
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border bg-transparent text-foreground hover:bg-accent",
    gradient: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg",
    ghost: "bg-transparent text-foreground hover:bg-accent"
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    const isExternal = href.startsWith('http') || target === '_blank';

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className="inline-block"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}