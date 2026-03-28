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
              I&apos;m a passionate full-stack developer who loves turning ideas into
              fast, elegant, and accessible web products. I care deeply about
              code quality, user experience, and building things that last.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source, or working on side projects that
              challenge me to learn something new.
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
              { label: "Projects Shipped", value: "20+" },
              { label: "Technologies", value: "15+" },
              { label: "Cups of Coffee", value: "∞" },
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
