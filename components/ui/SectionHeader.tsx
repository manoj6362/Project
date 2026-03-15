"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", centered && "text-center", className)}>
      {eyebrow && (
        <motion.span
          className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-widest mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-0.5 bg-accent inline-block" />
          {eyebrow}
          <span className="w-8 h-0.5 bg-accent inline-block" />
        </motion.span>
      )}
      <motion.h2
        className={cn(
          "font-heading font-bold text-4xl md:text-5xl lg:text-[3.25rem] leading-tight",
          light ? "text-white" : "text-primary"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <motion.p
          className={cn(
            "mt-4 text-lg max-w-2xl leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/70" : "text-gray-500"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
