"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { personalInfo } from "@/lib/data";

function Avatar() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // Placeholder circle with initials
    return (
      <div className="w-[150px] h-[150px] rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-3xl font-bold text-white/70 shrink-0">
        BL
      </div>
    );
  }

  return (
    <Image
      src="/avatar.jpg"
      alt={personalInfo.name}
      width={150}
      height={150}
      className="w-[150px] h-[150px] rounded-full object-cover border-2 border-white/20"
      onError={() => setImgError(true)}
      priority
    />
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          /* Fallback gradient if no image is present */
          background:
            "url('/hero-bg.jpg') center/cover fixed no-repeat, linear-gradient(135deg, #0d1116 0%, #1a0533 60%, #0d1116 100%)",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl flex flex-col items-center"
      >
        {/* Circular avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <Avatar />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-white/40 tracking-widest uppercase mb-3"
        >
          Hi, I&apos;m
        </motion.p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
          {personalInfo.name}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-white/60 mb-4 font-light"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base text-white/40 max-w-xl mx-auto mb-10"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/30 text-white text-sm rounded-full hover:border-white/60 hover:bg-white/5 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-white/40 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-white/20"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
