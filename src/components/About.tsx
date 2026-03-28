"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "20+", label: "Technologies" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="scroll-mt-35 py-16 px-6 max-w-6xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Huge heading */}
        <h2 className="text-[clamp(60px,12vw,130px)] font-bold uppercase leading-none tracking-tight text-black mb-12">
          About Me *
        </h2>

        {/* Stats + description aligned to the lines */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: stat rows with thick lines */}
          <div>
            {stats.map((stat) => (
              <div key={stat.label} className="py-5 border-b-2 border-black flex items-baseline gap-4">
                <p className="text-5xl font-bold text-black">{stat.value}</p>
                <p className="text-lg uppercase tracking-widest text-black">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Right: description aligned to first line */}
          <div className="space-y-4 text-black/60 leading-relaxed text-base pt-5">
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
                className="text-black underline underline-offset-4 hover:text-black/50 transition-colors"
              >
                reach out
              </a>
              .
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
