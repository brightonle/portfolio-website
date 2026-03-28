"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 border-t border-white/5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-white/30 tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience</h2>

          <div className="space-y-0">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-6 pb-10 last:pb-0 border-l border-white/10 last:border-transparent"
              >
                {/* dot */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm text-white/50">{job.company}</p>
                  </div>
                  <span className="text-xs text-white/30 bg-white/5 px-3 py-1 rounded-full shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
