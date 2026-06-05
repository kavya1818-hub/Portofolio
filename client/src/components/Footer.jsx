function Footer() {
  return (
    <footer
      className="
      mt-24
      border-t
      border-slate-800
      bg-slate-950/70
      backdrop-blur-lg
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-12
        text-center
        "
      >

        {/* Name */}

        <h2
          className="
          text-3xl
          font-extrabold
          mb-4
          bg-gradient-to-r
          from-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
          "
        >
          Daggubati Kavya
        </h2>

        {/* Description */}

        <p className="text-slate-400 max-w-2xl mx-auto leading-7 mb-8">
          Full Stack Developer and Data Science student passionate
          about building scalable web applications, intelligent
          systems and modern digital experiences.
        </p>

        {/* Links */}

        <div className="flex justify-center gap-8 mb-10 flex-wrap">

          <a
            href="https://github.com/kavya1818-hub"
            target="_blank"
            rel="noreferrer"
            className="
            hover:text-cyan-400
            transition-all
            duration-300
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kavya-daggubati-7b7a5828a/"
            target="_blank"
            rel="noreferrer"
            className="
            hover:text-cyan-400
            transition-all
            duration-300
            "
          >
            LinkedIn
          </a>

          <a
            href="mailto:kavya.d2023a@vitstudent.ac.in"
            className="
            hover:text-cyan-400
            transition-all
            duration-300
            "
          >
            Email
          </a>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 pt-6">

          <p className="text-slate-500 text-sm">
            © 2026 Daggubati Kavya. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;