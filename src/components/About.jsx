import ScrollDown from "./ScrollDown";

const floatingElements = [
    { text: "{ }", top: "12%", left: "5%", delay: "0s", duration: "8s" },
    { text: "</>", top: "25%", right: "8%", delay: "1s", duration: "7s" },
    { text: "AI", top: "68%", left: "6%", delay: "2s", duration: "9s" },
    { text: "01", top: "78%", right: "10%", delay: "1.5s", duration: "8s" },
    { text: "< >", top: "48%", left: "2%", delay: "3s", duration: "10s" },
    { text: "#", top: "18%", right: "30%", delay: "2s", duration: "7s" },
];

const particles = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 6}s`,
}));

function About() {
    return (
        <section
            id="about"
            className="relative min-h-screen overflow-hidden bg-[#030303] px-6 py-28 text-white"
        >
            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.045]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Ambient Glows */}
            <div className="pointer-events-none absolute left-0 top-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px]" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />

            {/* Floating Particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <span
                        key={particle.id}
                        className="absolute h-1 w-1 rounded-full bg-white/20 animate-floating-particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>

            {/* Floating Code Elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {floatingElements.map((item, index) => (
                    <span
                        key={index}
                        className="absolute select-none font-mono text-lg text-white/[0.10] animate-floating-code sm:text-xl"
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

            {/* Main Content */}
            <div className="relative z-10 mx-auto flex min-h-[calc(100vh-14rem)] max-w-6xl items-center pb-24">
                <div className="w-full">

                    {/* Section Heading */}
                    <div className="mb-16 text-center">
                        <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/35">
                            Get To Know Me
                        </p>

                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            About <span className="text-white/40">Me</span>
                        </h2>

                        <div className="mx-auto mt-5 h-px w-16 bg-white/20" />
                    </div>

                    {/* Main Content */}
                    <div className="grid items-center gap-12 md:grid-cols-2">

                        {/* Left */}
                        <div>
                            <p className="text-lg leading-8 text-white/60 sm:text-xl">
                                I'm{" "}
                                <span className="font-semibold text-white">
                                    Muhammad Ahmad
                                </span>
                                , a BS Artificial Intelligence student with a strong interest
                                in software development, modern web technologies, and
                                artificial intelligence.
                            </p>

                            <p className="mt-6 leading-8 text-white/40">
                                I enjoy turning ideas into functional and visually engaging
                                digital experiences. My current focus is on building modern
                                websites and applications while continuously improving my
                                programming and problem-solving skills.
                            </p>

                            <p className="mt-6 leading-8 text-white/40">
                                My long-term goal is to become an AI Engineer and eventually
                                build my own software company, creating innovative technology
                                solutions for real-world problems.
                            </p>
                        </div>

                        {/* Right Premium Cards */}
                        <div className="grid grid-cols-2 gap-5">

                            {/* AI Card */}
                            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/[0.12] via-white/[0.03] to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:shadow-[0_20px_60px_rgba(168,85,247,0.12)]">

                                <div className="absolute -right-6 -top-8 text-8xl font-black text-purple-400/[0.06] transition-transform duration-700 group-hover:scale-110">
                                    AI
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-400/10 text-lg font-bold text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.12)]">
                                        AI
                                    </div>

                                    <h3 className="text-lg font-semibold text-white">
                                        Artificial Intelligence
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/40">
                                        Exploring intelligent systems and modern AI technologies.
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400 transition-all duration-500 group-hover:w-full" />
                            </div>


                            {/* Web Card */}
                            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/[0.12] via-white/[0.03] to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-[0_20px_60px_rgba(59,130,246,0.12)]">

                                <div className="absolute -right-8 -top-8 text-7xl font-black text-blue-400/[0.06] transition-transform duration-700 group-hover:scale-110">
                                    WEB
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-sm font-bold text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.12)]">
                                        &lt;/&gt;
                                    </div>

                                    <h3 className="text-lg font-semibold text-white">
                                        Web Development
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/40">
                                        Building modern, responsive and interactive web experiences.
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-400 transition-all duration-500 group-hover:w-full" />
                            </div>


                            {/* App Card */}
                            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.10] via-white/[0.03] to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]">

                                <div className="absolute -right-8 -top-8 text-7xl font-black text-cyan-400/[0.06] transition-transform duration-700 group-hover:scale-110">
                                    APP
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-lg text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
                                        ◈
                                    </div>

                                    <h3 className="text-lg font-semibold text-white">
                                        App Development
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/40">
                                        Creating functional applications with clean and modern interfaces.
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                            </div>


                            {/* Python Card */}
                            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/[0.10] via-white/[0.03] to-transparent p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/30 hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)]">

                                <div className="absolute -right-8 -top-8 text-7xl font-black text-amber-400/[0.06] transition-transform duration-700 group-hover:scale-110">
                                    PY
                                </div>

                                <div className="relative z-10">
                                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-lg font-bold text-amber-300 shadow-[0_0_25px_rgba(245,158,11,0.12)]">
                                        Py
                                    </div>

                                    <h3 className="text-lg font-semibold text-white">
                                        Python Development
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/40">
                                        Developing practical solutions with Python and problem solving.
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-px w-0 bg-amber-400 transition-all duration-500 group-hover:w-full" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Next Section Arrow */}
            <ScrollDown target="#skills" />

            {/* Bottom Fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}

export default About;