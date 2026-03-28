"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="scroll-mt-20 py-24 px-6 border-t border-[var(--border)]" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-[var(--subtle)] tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">Let&apos;s Work Together</h2>
          <p className="text-[var(--muted)] mb-10 leading-relaxed">
            I&apos;m currently exploring opportunities in software engineering, data engineering,
            and related technical roles. If you think my background could be a fit for your team, I&apos;d love to connect.
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--foreground)] text-[var(--background)] text-sm font-medium rounded-full hover:opacity-90 transition-all mb-12"
          >
            <Mail size={16} />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
