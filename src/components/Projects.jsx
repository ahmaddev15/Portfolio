import ScrollDown from "./ScrollDown";

const projects = [
  {
    number: "01",
    title: "University Assignment Website",
    category: "Web Development",
    description:
      "A university project focused on building a responsive and user-friendly website with a clean modern interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    accent: "purple",
  },
  {
    number: "02",
    title: "TWC E-Commerce",
    category: "Full Stack Development",
    description:
      "A modern watches and accessories e-commerce platform with product management, authentication, inventory, and backend integration.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    status: "In Development",
    accent: "blue",
  },
];

function Projects() {
  return (
    <section
      id="projects"
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

      {/* Glows */}
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple-500/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[150px]" />

      {/* Floating Code */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[5%] top-[18%] font-mono text-xl text-white/[0.07] animate-floating-code">
          {"<project />"}
        </span>

        <span className="absolute right-[8%] top-[28%] font-mono text-xl text-white/[0.07] animate-floating-code">
          {"{ }"}
        </span>

        <span className="absolute bottom-[18%] left-[8%] font-mono text-lg text-white/[0.06] animate-floating-code">
          {"01"}
        </span>

        <span className="absolute bottom-[25%] right-[12%] font-mono text-xl text-white/[0.06] animate-floating-code">
          {"=>"}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-14rem)] max-w-6xl items-center">
        <div className="w-full">

          {/* Heading */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/30">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
              My <span className="text-white/25">Projects</span>
            </h2>

            <div className="mx-auto mt-5 h-px w-16 bg-white/20" />
          </div>

          {/* Project Cards */}
          <div className="grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.number}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/[0.10] bg-white/[0.025] p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.045] ${
                  project.accent === "purple"
                    ? "hover:border-purple-400/30 hover:shadow-[0_25px_80px_rgba(168,85,247,0.12)]"
                    : "hover:border-blue-400/30 hover:shadow-[0_25px_80px_rgba(59,130,246,0.12)]"
                }`}
              >
                {/* Glow */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-[90px] opacity-30 transition-opacity duration-500 group-hover:opacity-60 ${
                    project.accent === "purple"
                      ? "bg-purple-500"
                      : "bg-blue-500"
                  }`}
                />

                {/* Large Number */}
                <div className="pointer-events-none absolute -right-3 -top-8 select-none text-[140px] font-black leading-none text-white/[0.025] transition-transform duration-700 group-hover:scale-110">
                  {project.number}
                </div>

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.3em] text-white/25">
                      PROJECT {project.number}
                    </span>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/25">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-mono text-sm text-white/40 transition-all duration-500 group-hover:scale-110 group-hover:border-white/25 group-hover:text-white">
                    ↗
                  </div>
                </div>

                {/* Project Preview */}
                <div className="relative z-10 mt-8 h-44 overflow-hidden rounded-2xl border border-white/[0.08] bg-black/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/50" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                    <span className="h-2 w-2 rounded-full bg-green-400/50" />
                  </div>

                  <div className="absolute inset-x-8 top-16 h-px bg-white/[0.08]" />
                  <div className="absolute inset-x-8 top-24 h-2 w-2/3 rounded-full bg-white/[0.06]" />
                  <div className="absolute inset-x-8 top-32 h-2 w-1/2 rounded-full bg-white/[0.04]" />

                  <div className="absolute bottom-5 right-5 font-mono text-xs text-white/10">
                    {project.number} / BUILD
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 mt-6 text-sm leading-7 text-white/40">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-xs text-white/40 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span
                    className={`flex items-center gap-2 text-xs ${
                      project.status === "Completed"
                        ? "text-emerald-400/70"
                        : "text-blue-400/70"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {project.status}
                  </span>

                  <button className="text-xs font-medium text-white/35 transition-colors duration-300 hover:text-white">
                    View Project →
                  </button>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full ${
                    project.accent === "purple"
                      ? "bg-purple-400"
                      : "bg-blue-400"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollDown target="#education" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

export default Projects;