"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import { personalInfo } from "@/lib/data";

import avatarImg from "@/assets/pfp_portfolio.png";
import heroBgImg from "@/assets/bg-light.png";

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Image src={heroBgImg} alt="" fill className="object-cover object-center" priority />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col px-12 pt-24 pb-4 relative overflow-hidden">
      <HeroBackground />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Top right: availability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="self-end text-right"
      >
        <p className="text-xs uppercase tracking-widest text-white/40">Available for Work</p>
        <p className="text-[clamp(28px,4vw,56px)] font-bold uppercase leading-none tracking-tight text-white">May'26</p>
      </motion.div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom row: avatar+name on left, availability on right */}
      <div className="flex items-end justify-between">

        {/* Left: avatar above name */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 mb-0"
          >
            <div className="w-[170px] h-[170px] rounded-full overflow-hidden border-2 border-white/10 relative shrink-0">
              <Image
                src={avatarImg}
                alt={personalInfo.name}
                fill
                className="object-cover"
                style={{ objectPosition: "center 20%" }}
                priority
              />
            </div>
            <div className="flex flex-col gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="text-white/50 hover:text-white transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <p className="text-base uppercase tracking-widest text-white/40 mt-2 font-semibold">
                Full-Stack Engineer
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-[clamp(60px,12vw,160px)] font-bold uppercase leading-none tracking-tight text-white"
          >
            {personalInfo.name}
          </motion.h1>
        </div>


      </div>
    </section>
  );
}
