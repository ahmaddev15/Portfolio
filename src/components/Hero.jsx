import { useEffect, useState } from "react";
import ScrollDown from "./ScrollDown";

const roles = [
    "BS AI Student",
    "Full Stack Developer",
    "Web & App Developer",
    "Python Developer",
    "Aspiring AI Engineer",
];

const floatingElements = [
    { text: "{ }", top: "14%", left: "7%", delay: "0s", duration: "7s" },
    { text: "</>", top: "27%", left: "43%", delay: "1s", duration: "8s" },
    { text: "AI", top: "12%", right: "8%", delay: "2s", duration: "6s" },
    { text: "01", top: "68%", left: "8%", delay: "1.5s", duration: "9s" },
    { text: "=>", top: "78%", left: "38%", delay: "3s", duration: "7s" },
    { text: "< >", top: "58%", right: "7%", delay: "0.5s", duration: "8s" },
    { text: "( )", top: "40%", left: "4%", delay: "2.5s", duration: "10s" },
    { text: "#", top: "82%", right: "35%", delay: "1s", duration: "6s" },
];

const particles = Array.from({ length: 35 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${5 + Math.random() * 7}s`,
}));

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const typingSpeed = isDeleting ? 45 : 85;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                const nextText = currentRole.slice(0, text.length + 1);
                setText(nextText);

                if (nextText === currentRole) {
                    setTimeout(() => setIsDeleting(true), 1400);
                }
            } else {
                const nextText = currentRole.slice(0, text.length - 1);
                setText(nextText);

                if (nextText === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#030303] text-white"
        >

            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Large Ambient Glow */}
            <div className="pointer-events-none absolute left-1/4 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[140px] animate-pulse" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px] animate-pulse" />

            {/* Floating Particles */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <span
                        key={particle.id}
                        className="absolute h-1 w-1 rounded-full bg-white/30 animate-floating-particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>

            {/* Floating Code Symbols */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {floatingElements.map((item, index) => (
                    <span
                        key={index}
                        className="absolute select-none text-lg font-mono text-white/[0.12] animate-floating-code sm:text-xl"
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
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
                <div className="grid w-full grid-cols-1 items-center gap-16 md:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="relative text-center md:text-left">

                        {/* Small Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                            <span className="text-xs tracking-[0.2em] text-white/60">
                                AVAILABLE TO BUILD
                            </span>
                        </div>

                        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
                            Hello, I'm
                        </p>
                        <div className="group relative text-center md:text-left">
                            <h1 className="relative text-5xl font-black leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                                <span className="block text-white/95">
                                    Muhammad
                                </span>

                                <span className="relative mt-2 block overflow-hidden bg-gradient-to-r from-white via-white/70 to-white/25 bg-clip-text text-transparent">
                                    Ahmad

                                    <span className="pointer-events-none absolute inset-y-0 -left-[120%] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
                                </span>
                            </h1>
                        </div>
                        {/* Typewriter */}
                        <div className="mt-6 flex h-10 items-center justify-center text-xl font-medium sm:text-2xl md:justify-start">
                            <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                                {text}
                            </span>

                            <span className="ml-1 animate-pulse text-white/70">
                                |
                            </span>
                        </div>

                        <p className="mt-7 max-w-xl text-base leading-8 text-white/45 sm:text-lg">
                            I build modern websites and applications with
                            <span className="text-white/75"> code, creativity, and AI-assisted development.</span>
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

                            <a
                                href="#projects"
                                className="group relative overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.15)]"
                            >
                                <span className="relative z-10">
                                    View Projects
                                </span>

                                <span className="absolute inset-0 -translate-x-full bg-white/70 transition-transform duration-500 group-hover:translate-x-0" />
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
                            >
                                Contact Me
                            </a>

                        </div>

                        {/* Small Tech Line */}
                        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs text-white/30 md:justify-start">
                            <span>React</span>
                            <span>•</span>
                            <span>Python</span>
                            <span>•</span>
                            <span>AI</span>
                            <span>•</span>
                            <span>Full Stack</span>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative flex justify-center md:justify-end">

                        {/* Outer Glow */}
                        <div className="absolute h-[420px] w-[320px] rounded-[2rem] bg-purple-500/10 blur-[80px] animate-pulse sm:h-[540px] sm:w-[400px]" />

                        {/* Rotating Ring */}
                        <div className="absolute -inset-4 rounded-[2rem] border border-white/[0.06] animate-slow-spin" />

                        {/* Image Container */}
                        <div className="group relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.6)] backdrop-blur-xl">

                            <div className="relative overflow-hidden rounded-[1.5rem]">

                                <img
                                    src="/images/profile/ahmad-profile.jpeg"
                                    alt="Muhammad Ahmad"
                                    className="h-[500px] w-full object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0 sm:h-[600px]"
                                />

                                {/* Image Gradient */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                {/* Hover Light */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                                    <div className="absolute -left-20 top-0 h-full w-24 rotate-12 bg-white/10 blur-2xl transition-transform duration-1000 group-hover:translate-x-[500px]" />
                                </div>

                            </div>

                            {/* Image Bottom Label */}
                            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl">
                                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                                    Developer
                                </p>

                                <p className="mt-1 text-sm font-medium text-white/80">
                                    Building the future with AI & Code
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Down */}
            <ScrollDown target="#about" />

            {/* Bottom Fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

        </section>
    );
}

export default Hero;