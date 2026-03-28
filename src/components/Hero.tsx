"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { personalInfo } from "@/lib/data";

import avatarImg from "@/assets/pfp_portfolio.png";
import heroBgImg from "@/assets/bg-light.png";

function Avatar() {
  return (
    <div className="w-[220px] h-[220px] rounded-full overflow-hidden border-2 border-white/5 relative shrink-0">
      <Image
        src={avatarImg}
        alt={personalInfo.name}
        fill
        className="object-cover"
        style={{ objectPosition: "center 20%" }}
        priority
      />
    </div>
  );
}

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={heroBgImg}
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left: Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="shrink-0"
        >
          <Avatar />
        </motion.div>

        {/* Right: Text content */}
        <div className="flex flex-col items-start text-left">
          {/* Social icons above name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/70 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/70 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-white hover:text-white/70 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-3 text-white">
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="#experience"
              className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/30 text-white text-sm rounded-full hover:border-white/60 hover:bg-white/5 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
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
