"use client";

import { Fragment, useState, useRef, useLayoutEffect, useEffect } from "react";
import { experience } from "@/lib/data";

const CARDS = experience;

function MobileExperience() {
  return (
    <section id="experience" className="px-6 py-16" style={{ backgroundColor: "#0a0a0a" }}>
      <h2 className="text-[clamp(40px,10vw,90px)] font-bold uppercase leading-none tracking-tight text-white mb-12">
        Technical<br />Experience
      </h2>
      <div className="flex flex-col gap-0">
        {CARDS.map((exp, i) => (
          <div key={i} className="py-8 border-t-2 border-white/20">
            <div className="flex justify-between items-start mb-3 gap-4">
              <h3 className="text-xl font-bold uppercase text-white leading-tight">{exp.role}</h3>
              <p className="text-base font-bold uppercase text-white/50 leading-tight text-right shrink-0">{exp.company}</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-2">{exp.description}</p>
            <p className="text-white/30 text-xs">({exp.period})</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopExperience() {
  const [peeks, setPeeks] = useState<number[]>([]);
  const [containerHeight, setContainerHeight] = useState(`${CARDS.length * 200}vh`);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const roleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useLayoutEffect(() => {
    const computed: number[] = [];
    for (let i = 0; i < CARDS.length - 1; i++) {
      const card = cardRefs.current[i];
      const role = roleRefs.current[i];
      if (!card || !role) break;
      const prevPeek = computed[i - 1] ?? 0;
      const cardTop = card.getBoundingClientRect().top;
      const roleBottom = role.getBoundingClientRect().bottom;
      computed.push(prevPeek + (roleBottom - cardTop) + 10);
    }
    const vh = window.innerHeight;
    const totalPx = CARDS.length * vh + (CARDS.length - 1) * vh - computed.reduce((a, b) => a + b, 0);
    setContainerHeight(`${totalPx}px`);
    setPeeks(computed);
  }, []);

  return (
    <section id="experience">
      <div style={{ height: containerHeight, position: "relative" }}>
        {CARDS.map((exp, i) => {
          const isFirst = i === 0;
          const stickyTop = isFirst ? 0 : (peeks[i - 1] ?? 200);
          return (
            <Fragment key={i}>
              <div
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  position: "sticky",
                  top: stickyTop,
                  height: isFirst ? "100vh" : `calc(100vh - ${stickyTop}px)`,
                  zIndex: i + 1,
                  backgroundColor: "#0a0a0a",
                  overflow: "hidden",
                }}
              >
                {isFirst ? (
                  <>
                    <div className="px-12 pt-16 flex justify-between items-baseline">
                      <h2 className="text-[clamp(40px,8vw,90px)] font-bold uppercase leading-none tracking-tight text-white">
                        Technical
                      </h2>
                      <h2 className="text-[clamp(40px,8vw,90px)] font-bold uppercase leading-none tracking-tight text-white">
                        Experience
                      </h2>
                    </div>
                    <div className="px-12 mt-[4vh]">
                      <div className="flex justify-between items-start">
                        <h3
                          ref={(el) => { roleRefs.current[i] = el; }}
                          className="text-3xl font-bold uppercase text-white leading-tight"
                        >
                          {exp.role}
                        </h3>
                        <p className="text-3xl font-bold uppercase text-white/50 leading-tight text-right">{exp.company}</p>
                      </div>
                      <div className="flex justify-between items-baseline mt-4 gap-8">
                        <p className="text-white/60 text-base">{exp.description}</p>
                        <p className="text-white/30 text-sm shrink-0">({exp.period})</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="px-12 pt-4">
                    <div className="h-[2px] bg-white/20" />
                    <div className="mt-5">
                      <div className="flex justify-between items-start">
                        <h3
                          ref={(el) => { roleRefs.current[i] = el; }}
                          className="text-3xl font-bold uppercase text-white leading-tight"
                        >
                          {exp.role}
                        </h3>
                        <p className="text-3xl font-bold uppercase text-white/50 leading-tight text-right">{exp.company}</p>
                      </div>
                      <div className="flex justify-between items-baseline mt-4 gap-8">
                        <p className="text-white/60 text-base">{exp.description}</p>
                        <p className="text-white/30 text-sm shrink-0">({exp.period})</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {i < CARDS.length - 1 && <div style={{ height: "100vh" }} />}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <MobileExperience /> : <DesktopExperience />;
}
