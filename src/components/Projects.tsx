"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import { projects } from "@/lib/data";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { threshold: 0.5 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-2 min-h-screen scroll-mt-16">

      {/* Left: sticky counter — hidden on mobile */}
      <div className="hidden md:flex sticky top-0 h-screen flex-col justify-end pb-16 px-10 border-r-2 border-white/20">
        <div className="flex overflow-hidden">
          <span className="text-[clamp(80px,14vw,160px)] font-bold leading-none tracking-tight text-white">
            0
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeIndex}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="text-[clamp(80px,14vw,160px)] font-bold leading-none tracking-tight text-white"
            >
              {activeIndex + 1}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Right: PROJECTS label at top so it peeks below About, then scrolling cards */}
      <div>
        <div className="pt-6 pb-0">
          <div className="px-6 md:px-10 pb-8">
            <h2 className="text-[clamp(60px,12vw,130px)] font-bold uppercase leading-none tracking-tight text-white">
              Projects
            </h2>
          </div>
          {projects[0].image && (
            <Image
              src={projects[0].image}
              alt={`${projects[0].title} screenshot`}
              className="w-full border-b-2 border-white/20"
            />
          )}
        </div>
        {projects.map((project, i) => (
          <div
            key={project.title}
            ref={(el) => { cardRefs.current[i] = el; }}
            className={`flex flex-col px-6 md:px-10 border-b-2 border-white/20 last:border-b-0 ${i === 0 ? "pt-10 pb-16 min-h-0" : "min-h-screen justify-center py-16"}`}
          >
            <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-white/60 leading-relaxed mb-8 max-w-md">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 border border-white/20 rounded-full text-white/50 uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/50 transition-colors"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/50 transition-colors"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
