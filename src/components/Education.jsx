import ScrollDown from "./ScrollDown";

const education = [
  {
    year: "2025 — Present",
    title: "BS Artificial Intelligence",
    institute: "Superior University",
    status: "Currently Studying",
  },
  {
    year: "2025",
    title: "Intermediate",
    institute: "Higher Secondary Education",
    status: "Completed",
  },
  {
    year: "2023",
    title: "Matriculation",
    institute: "Secondary Education",
    status: "Completed",
  },
];

const certificates = [
  {
    number: "01",
    title: "Software Development",
    issuer: "LinkedIn Learning",
    symbol: "</>",
    accent: "purple",
  },
  {
    number: "02",
    title: "Web & App Development",
    issuer: "NAVTTC",
    symbol: "WEB",
    accent: "blue",
  },
  {
    number: "03",
    title: "MEAN & MERN Full Stack Development",
    issuer: "Lahza",
    symbol: "{ }",
    accent: "cyan",
  },
];

function Education() {
  return (
    <section
      id="education"
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
      <div className="pointer-events-none absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple-500/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

      {/* Floating Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[5%] top-[16%] font-mono text-xl text-white/[0.07] animate-floating-code">
          {"01"}
        </span>

        <span className="absolute right-[7%] top-[28%] font-mono text-xl text-white/[0.07] animate-floating-code">
          {"</>"}
        </span>

        <span className="absolute bottom-[20%] left-[8%] font-mono text-xl text-white/[0.06] animate-floating-code">
          {"AI"}
        </span>

        <span className="absolute bottom-[25%] right-[10%] font-mono text-xl text-white/[0.06] animate-floating-code">
          {"{ }"}
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/30">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            Education <span className="text-white/25">&</span> Certificates
          </h2>

          <div className="mx-auto mt-5 h-px w-16 bg-white/20" />
        </div>

        {/* Education */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-white/20" />
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
              Education
            </h3>
          </div>

          <div className="relative ml-2 border-l border-white/[0.10] pl-8">
            {education.map((item, index) => (
              <div
                key={item.title}
                className="group relative mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-[#030303]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-all duration-300 group-hover:bg-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                </div>

                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <span className="font-mono text-xs tracking-[0.2em] text-white/25">
                        {item.year}
                      </span>

                      <h4 className="mt-2 text-xl font-semibold">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-white/35">
                        {item.institute}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/40">
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-white/20" />
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/40">
              Certificates
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {certificates.map((certificate) => (
              <div
                key={certificate.number}
                className={`group relative min-h-[230px] overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 ${
                  certificate.accent === "purple"
                    ? "hover:border-purple-400/30 hover:shadow-[0_25px_70px_rgba(168,85,247,0.10)]"
                    : certificate.accent === "blue"
                    ? "hover:border-blue-400/30 hover:shadow-[0_25px_70px_rgba(59,130,246,0.10)]"
                    : "hover:border-cyan-400/30 hover:shadow-[0_25px_70px_rgba(34,211,238,0.10)]"
                }`}
              >
                {/* Large Symbol */}
                <div className="pointer-events-none absolute -right-4 -top-5 select-none font-mono text-[90px] font-black text-white/[0.035] transition-transform duration-700 group-hover:scale-110">
                  {certificate.symbol}
                </div>

                {/* Number */}
                <span className="relative z-10 font-mono text-[10px] tracking-[0.3em] text-white/25">
                  CERTIFICATE {certificate.number}
                </span>

                {/* Icon */}
                <div
                  className={`relative z-10 mt-7 flex h-12 w-12 items-center justify-center rounded-2xl border bg-white/[0.04] font-mono text-xs transition-all duration-500 group-hover:scale-110 ${
                    certificate.accent === "purple"
                      ? "border-purple-400/20 text-purple-300"
                      : certificate.accent === "blue"
                      ? "border-blue-400/20 text-blue-300"
                      : "border-cyan-400/20 text-cyan-300"
                  }`}
                >
                  {certificate.symbol}
                </div>

                <h4 className="relative z-10 mt-6 text-lg font-semibold leading-7">
                  {certificate.title}
                </h4>

                <p className="relative z-10 mt-2 text-sm text-white/35">
                  {certificate.issuer}
                </p>

                {/* Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-700 group-hover:w-full ${
                    certificate.accent === "purple"
                      ? "bg-purple-400"
                      : certificate.accent === "blue"
                      ? "bg-blue-400"
                      : "bg-cyan-400"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ScrollDown target="#contact" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

export default Education;