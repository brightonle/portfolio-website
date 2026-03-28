"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="scroll-mt-20 py-24 px-6 border-t border-[var(--border)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-[var(--subtle)] tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[var(--foreground)]">What I Work With</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-[var(--border)] rounded-xl p-6 hover:border-[var(--muted)] transition-colors"
              >
                <h3 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1 bg-[var(--chip-bg)] rounded-full text-[var(--muted)] hover:bg-[var(--chip-hover)] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
