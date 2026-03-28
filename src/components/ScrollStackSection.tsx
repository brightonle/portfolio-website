"use client";

import { type ReactNode } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function ScrollStackSection({ children }: Props) {
  const { scrollY } = useScroll();

  // As About slides up: Hero sinks slightly down + blurs
  const y = useTransform(scrollY, [0, 600], [0, 60]);
  const blurPx = useTransform(scrollY, [0, 600], [0, 14]);
  // Fade out once About fully covers it — prevents Hero showing behind Skills etc.
  const opacity = useTransform(scrollY, [400, 700], [1, 0]);
  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100vh",
          zIndex: 1,
          y,
          opacity,
          filter,
          overflow: "hidden",
        }}
      >
        {children}
      </motion.div>
      {/* Reserves 100vh in document flow — About starts just off the bottom of the screen */}
      <div style={{ height: "100vh" }} />
    </>
  );
}
