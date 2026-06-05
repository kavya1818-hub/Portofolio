function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      px-6
      md:px-16
      pt-28
      relative
      overflow-hidden
      "
    >

      {/* Background Glow */}

      <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-0"></div>

      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full bottom-10 right-0"></div>

      {/* Main Layout */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        w-full
        grid
        md:grid-cols-2
        gap-16
        items-center
        "
      >

        {/* LEFT SIDE */}

        <div>

          <p
            className="
            text-cyan-400
            font-semibold
            tracking-widest
            uppercase
            mb-4
            "
          >
            
          </p>

          <h1
            className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            font-extrabold
            leading-tight
            mb-6
            "
          >
            Hi, I'm{" "}
            <span
              className="
              bg-gradient-to-r
              from-blue-400
              to-cyan-300
              bg-clip-text
              text-transparent
              "
            >
              Daggubati Kavya
            </span>
          </h1>

          <p
            className="
            text-slate-400
            text-lg
            leading-8
            max-w-xl
            mb-10
            "
          >
            Passionate about building scalable web applications,
            intelligent systems, cloud platforms and modern
            data-driven solutions using cutting-edge technologies.
          </p>

          {/* Buttons */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            "
          >

            <a
              href="#projects"
              className="
              bg-blue-600
              hover:bg-blue-700
              px-8
              py-4
              rounded-xl
              transition-all
              duration-300
              hover:scale-105
              font-semibold
              text-center
              "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="
              border
              border-white/20
              hover:bg-white
              hover:text-black
              px-8
              py-4
              rounded-xl
              transition-all
              duration-300
              hover:scale-105
              font-semibold
              text-center
              "
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div
            className="
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-[40px]
            bg-gradient-to-br
            from-blue-500
            to-cyan-400
            p-1
            shadow-2xl
            shadow-cyan-500/20
            "
          >

            <div
              className="
              w-full
              h-full
              rounded-[36px]
              bg-slate-950
              flex
              items-center
              justify-center
              text-8xl
              md:text-9xl
              "
            >
              👩‍💻
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;