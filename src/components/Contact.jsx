function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#030303] px-6 pb-8 pt-28 text-white"
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
                <span className="absolute left-[6%] top-[18%] font-mono text-xl text-white/[0.07] animate-floating-code">
                    {"<contact />"}
                </span>

                <span className="absolute right-[8%] top-[30%] font-mono text-xl text-white/[0.07] animate-floating-code">
                    {"{ }"}
                </span>

                <span className="absolute bottom-[25%] left-[8%] font-mono text-lg text-white/[0.06] animate-floating-code">
                    {"@"}
                </span>

                <span className="absolute bottom-[18%] right-[12%] font-mono text-xl text-white/[0.06] animate-floating-code">
                    {"=>"}
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <p className="mb-3 text-xs uppercase tracking-[0.4em] text-white/30">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                        Let's <span className="text-white/25">Connect</span>
                    </h2>

                    <div className="mx-auto mt-5 h-px w-16 bg-white/20" />

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                        Have a project idea, collaboration opportunity, or just want to
                        connect? Feel free to reach out.
                    </p>
                </div>

                {/* Main Contact Area */}
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* Left */}
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-8 backdrop-blur-2xl">
                        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-500/10 blur-[80px]" />

                        <div className="relative z-10">
                            <span className="font-mono text-[10px] tracking-[0.3em] text-white/25">
                                CONTACT
                            </span>

                            <h3 className="mt-5 text-2xl font-semibold">
                                Let's build something
                                <span className="block text-white/35">
                                    meaningful together.
                                </span>
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-white/35">
                                I'm always interested in learning, building new projects,
                                collaborating with developers, and exploring new ideas in
                                technology.
                            </p>

                            {/* Contact Links */}
                            <div className="mt-8 space-y-3">

                                <a
                                    href="mailto:codewithahmad5@gmail.com"
                                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white/50 transition group-hover:text-white">
                                        @
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                                            Email
                                        </p>
                                        <p className="mt-1 text-sm text-white/60">
                                            codewithahmad5@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/muhammad-ahmad-alam-4832913a8/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold text-white/50 transition group-hover:text-white">
                                        in
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                                            LinkedIn
                                        </p>
                                        <p className="mt-1 text-sm text-white/60">
                                            Connect with me
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href="https://github.com/ahmaddev15"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white/50 transition group-hover:text-white">
                                        ◉
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                                            GitHub
                                        </p>
                                        <p className="mt-1 text-sm text-white/60">
                                            View my projects
                                        </p>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-8 backdrop-blur-2xl">
                        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-500/10 blur-[90px]" />

                        <form
                            className="relative z-10"
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <div className="grid gap-5 sm:grid-cols-2">

                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/30">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/25 focus:bg-white/[0.04]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/30">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/25 focus:bg-white/[0.04]"
                                    />
                                </div>

                            </div>

                            <div className="mt-5">
                                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/30">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Project or collaboration"
                                    className="w-full rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/25 focus:bg-white/[0.04]"
                                />
                            </div>

                            <div className="mt-5">
                                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-white/30">
                                    Message
                                </label>

                                <textarea
                                    rows="6"
                                    placeholder="Tell me about your idea..."
                                    className="w-full resize-none rounded-2xl border border-white/[0.08] bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/25 focus:bg-white/[0.04]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group relative mt-6 w-full overflow-hidden rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,255,255,0.12)]"
                            >
                                <span className="relative z-10">
                                    Send Message <span className="ml-1">→</span>
                                </span>

                                <span className="absolute inset-0 -translate-x-full bg-white/70 transition-transform duration-500 group-hover:translate-x-0" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-20 border-t border-white/[0.07] pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                        <p className="text-xs text-white/25">
                            © {new Date().getFullYear()} Mohammad Ahmad. All rights reserved.
                        </p>

                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/15">
                            Built with React & Code
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Contact;