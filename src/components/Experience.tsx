"use client";

import { Fragment, useState, useRef, useLayoutEffect } from "react";
import { experience } from "@/lib/data";

const CARDS = experience;

export default function Experience() {
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
    // Total scroll height = N cards (each 100vh) + (N-1) spacers (each 100vh) - peek savings
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
                      <div className="flex justify-between items-baseline">
                        <h3
                          ref={(el) => { roleRefs.current[i] = el; }}
                          className="text-3xl font-bold uppercase text-white leading-tight"
                        >
                          {exp.role}
                        </h3>
                        <p className="text-3xl font-bold uppercase text-white/50 leading-tight">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-sm text-white/30 mt-3">{exp.period}</p>
                      <p className="text-white/60 leading-relaxed mt-6 max-w-xl text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="px-12 pt-4">
                    <div className="h-[2px] bg-white/20" />
                    <div className="mt-5">
                      <div className="flex justify-between items-baseline">
                        <h3
                          ref={(el) => { roleRefs.current[i] = el; }}
                          className="text-3xl font-bold uppercase text-white leading-tight"
                        >
                          {exp.role}
                        </h3>
                        <p className="text-3xl font-bold uppercase text-white/50 leading-tight">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-sm text-white/30 mt-3">{exp.period}</p>
                      <p className="text-white/60 leading-relaxed mt-6 max-w-xl text-sm">
                        {exp.description}
                      </p>
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
