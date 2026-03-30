import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: "#0a0a0a" }} className="px-6 md:px-12 py-16 md:py-24 flex flex-col md:flex-row">

      {/* Left: stacked identity words */}
      <div className="w-full md:w-1/2 flex items-center justify-center mb-12 md:mb-0">
        <div className="flex flex-col items-start">
          <p className="text-[clamp(40px,5.5vw,80px)] font-bold uppercase tracking-tight text-white" style={{ lineHeight: "0.85" }}>Engineer</p>
          <p className="text-[clamp(40px,5.5vw,80px)] font-bold uppercase tracking-tight text-white" style={{ lineHeight: "0.85" }}>Designer</p>
          <p className="text-[clamp(40px,5.5vw,80px)] font-bold uppercase tracking-tight text-white" style={{ lineHeight: "0.85" }}>Creator*</p>
        </div>
      </div>

      {/* Right: title + grid */}
      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className="w-fit">
          <h2 className="text-[clamp(36px,5vw,72px)] font-bold uppercase leading-none tracking-tight text-white mb-[5vh] text-center">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 md:gap-x-16 gap-y-10 md:gap-y-12">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-base uppercase tracking-widest text-white/40 mb-4 font-semibold">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-white/80 text-sm font-medium uppercase tracking-wide">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </div>

    </section>
  );
}
