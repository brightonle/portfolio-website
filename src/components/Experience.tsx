"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="scroll-mt--1 py-24 px-6 border-t border-[var(--border)]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-[var(--subtle)] tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[var(--foreground)]">Experience</h2>

          <div className="space-y-0">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-6 pb-10 last:pb-0 border-l border-[var(--border)] last:border-transparent"
              >
                {/* dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--subtle)] border border-[var(--border)]" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{job.role}</h3>
                    <p className="text-sm text-[var(--muted)]">{job.company}</p>
                  </div>
                  <span className="text-xs text-[var(--subtle)] bg-[var(--chip-bg)] px-3 py-1 rounded-full shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
