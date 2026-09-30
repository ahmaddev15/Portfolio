function ScrollDown({ target }) {
  const handleScroll = () => {
    const section = document.querySelector(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      onClick={handleScroll}
      aria-label="Scroll to next section"
      className="group absolute bottom-24 left-1/2 z-40 -translate-x-1/2"
    >
      <span className="block text-2xl font-light text-white/35 transition-all duration-300 animate-scroll-arrow group-hover:scale-125 group-hover:text-white">
        ↓
      </span>
    </button>
  );
}

export default ScrollDown;