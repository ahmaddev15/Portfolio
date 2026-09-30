import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", target: "#home" },
  { label: "About", target: "#about" },
  { label: "Skills", target: "#skills" },
  { label: "Projects", target: "#projects" },
  { label: "Education", target: "#education" },
  { label: "Contact", target: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.target))
        .filter(Boolean);

      let current = "Home";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= 140) {
          current =
            navItems.find((item) => item.target === `#${section.id}`)?.label ||
            current;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (target) => {
    const section = document.querySelector(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled
            ? "border-white/10 bg-black/60 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-white/[0.06] bg-black/20 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavigation("#home")}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] font-mono text-xs font-bold text-white/70 transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.08] group-hover:text-white">
            MA
          </span>

          <span className="hidden text-sm font-semibold tracking-tight text-white/80 sm:block">
            Muhammad Ahmad
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.target)}
              className={`relative rounded-xl px-3 py-2 text-xs transition-all duration-300 ${
                active === item.label
                  ? "text-white"
                  : "text-white/35 hover:bg-white/[0.04] hover:text-white/75"
              }`}
            >
              {item.label}

              {active === item.label && (
                <span className="absolute bottom-1 left-1/2 h-0.5 w-1 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              )}
            </button>
          ))}
        </div>

        {/* Talk Button */}
        <button
          onClick={() => handleNavigation("#contact")}
          className="hidden rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.09] hover:text-white md:block"
        >
          Let's Talk
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
        >
          <span
            className={`h-px w-4 bg-white/60 transition-all duration-300 ${
              menuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-4 bg-white/60 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-px w-4 bg-white/60 transition-all duration-300 ${
              menuOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[420px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col p-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.target)}
              className={`rounded-xl px-4 py-3 text-left text-sm transition-all duration-300 ${
                active === item.label
                  ? "bg-white/[0.07] text-white"
                  : "text-white/40 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;