"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  once?: boolean;
};

export function TextReveal({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const words = children.split(" ");

  return (
    <Tag className={cn(className)}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%", rotate: 2 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once, margin: "-8% 0px" }}
            transition={{
              duration: 0.65,
              delay: delay + i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
