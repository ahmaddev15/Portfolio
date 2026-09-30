import ScrollDown from "./ScrollDown";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Interface Development",
    symbol: "</>",
    glow: "purple",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Backend",
    subtitle: "Server & Database",
    symbol: "{ }",
    glow: "blue",
    skills: ["Python", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    number: "03",
    title: "Programming",
    subtitle: "Core Development",
    symbol: "01",
    glow: "cyan",
    skills: ["Python", "C++", "OOP", "Data Structures", "Problem Solving"],
  },
  {
    number: "04",
    title: "AI & Tools",
    subtitle: "AI & Development",
    symbol: "AI",
    glow: "amber",
    skills: ["AI Concepts", "Git", "GitHub", "VS Code", "AI-Assisted Development"],
  },
];

const floatingElements = [
  { text: "</>", top: "13%", left: "5%", delay: "0s", duration: "8s" },
  { text: "{ }", top: "25%", right: "7%", delay: "1s", duration: "7s" },
  { text: "AI", top: "72%", left: "5%", delay: "2s", duration: "9s" },
  { text: "01", top: "80%", right: "10%", delay: "1.5s", duration: "8s" },
  { text: "=>", top: "47%", left: "2%", delay: "3s", duration: "10s" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-[#030303] px-6 py-28 text-white"
    >
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-500/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[150px]" />

      {/* Floating Background Symbols */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingElements.map((item, index) => (
          <span
            key={index}
            className="absolute font-mono text-lg text-white/[0.07] animate-floating-code"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      {/* Main */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-14rem)] max-w-6xl items-center">
        <div className="w-full">

          {/* Heading */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/30">
              Technical Expertise
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              My <span className="text-white/25">Skills</span>
            </h2>

            <div className="mx-auto mt-5 h-px w-16 bg-white/20" />
          </div>

          {/* Floating Cards */}
          <div className="grid gap-6 md:grid-cols-2">

            {skillGroups.map((group) => (
              <div
                key={group.number}
                className={`group relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.025] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.045] ${
                  group.glow === "purple"
                    ? "hover:border-purple-400/30 hover:shadow-[0_25px_80px_rgba(168,85,247,0.10)]"
                    : group.glow === "blue"
                    ? "hover:border-blue-400/30 hover:shadow-[0_25px_80px_rgba(59,130,246,0.10)]"
                    : group.glow === "cyan"
                    ? "hover:border-cyan-400/30 hover:shadow-[0_25px_80px_rgba(34,211,238,0.10)]"
                    : "hover:border-amber-400/30 hover:shadow-[0_25px_80px_rgba(245,158,11,0.10)]"
                }`}
              >

                {/* Soft Card Glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[80px] transition-opacity duration-500 opacity-30 group-hover:opacity-60 ${
                    group.glow === "purple"
                      ? "bg-purple-500"
                      : group.glow === "blue"
                      ? "bg-blue-500"
                      : group.glow === "cyan"
                      ? "bg-cyan-500"
                      : "bg-amber-500"
                  }`}
                />

                {/* Huge Background Symbol */}
                <div className="pointer-events-none absolute -right-4 -top-8 select-none font-mono text-[120px] font-black leading-none text-white/[0.035] transition-all duration-700 group-hover:scale-110 group-hover:text-white/[0.06]">
                  {group.symbol}
                </div>

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">

                  <div>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-white/25">
                      {group.number}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/25">
                      {group.subtitle}
                    </p>
                  </div>

                  {/* Small Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-mono text-xs text-white/50 transition-all duration-500 group-hover:scale-110 group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white">
                    {group.symbol}
                  </div>

                </div>

                {/* Skills */}
                <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs text-white/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Status */}
                <div className="absolute bottom-5 left-7 right-7 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/15">
                    Technical Skill
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-emerald-400 group-hover:shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                </div>

                {/* Animated Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full ${
                    group.glow === "purple"
                      ? "bg-purple-400"
                      : group.glow === "blue"
                      ? "bg-blue-400"
                      : group.glow === "cyan"
                      ? "bg-cyan-400"
                      : "bg-amber-400"
                  }`}
                />

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Next Section */}
      <ScrollDown target="#projects" />

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

export default Skills;