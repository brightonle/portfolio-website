"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs text-white/30 tracking-widest uppercase mb-3">About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Who I Am</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              I&apos;m a data-focused engineer who enjoys building reliable systems that transform raw information into meaningful insights. 
              I care about data quality, efficient workflows, and creating solutions that are both technically strong and practical for real users.
            </p>
            <p>
              When I&apos;m not coding, I enjoy rock climbing and running, which have taught me a lot about persistence, focus, and steady improvement. 
              I&apos;m always looking for opportunities to keep learning and work on projects that challenge me to grow!
            </p>
            <p>
              I&apos;m currently open to new opportunities — feel free to{" "}
              <a
                href="#contact"
                className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
              >
                reach out
              </a>
              .
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Shipped", value: "10+" },
              { label: "Technologies", value: "20+" },
              { label: "Cups of Coffee ☕", value: "∞" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors"
              >
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
