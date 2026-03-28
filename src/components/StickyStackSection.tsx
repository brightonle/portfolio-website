"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

interface Props {
  children: ReactNode;
  zIndex: number;
  backgroundColor?: string;
  borderRadius?: string;
  scrollSpace?: string; // how much scroll space to give for the next section to slide in
}

export default function StickyStackSection({
  children,
  zIndex,
  backgroundColor = "#ffffff",
  borderRadius = "24px 24px 0 0",
  scrollSpace = "50vh",
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0.7, 1], [0, 60]);
  const blurPx = useTransform(scrollYProgress, [0.7, 1], [0, 12]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.5]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    // Dark backdrop so when the card sinks, dark is revealed beneath it
    <div
      ref={outerRef}
      style={{
        position: "relative",
        zIndex,
        backgroundColor: "#0a0a0a",
        // Natural content height + scroll space for next section to slide up
        paddingBottom: scrollSpace,
      }}
    >
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor,
          borderRadius,
          y,
          filter,
          opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
