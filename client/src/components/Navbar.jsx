function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-slate-950/80
      backdrop-blur-lg
      border-b
      border-slate-800
      text-white
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <h1
          className="
          text-lg
          md:text-2xl
          font-extrabold
          bg-gradient-to-r
          from-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
          "
        >
          Kavya Portfolio
        </h1>

        {/* Nav Links */}

        <div
          className="
          flex
          gap-4
          md:gap-8
          text-sm
          md:text-base
          font-medium
          "
        >

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
