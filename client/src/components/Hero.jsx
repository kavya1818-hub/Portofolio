function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      text-center
      px-6
      relative
      overflow-hidden
      pt-24
      "
    >

      {/* Background Glow */}

      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-500/20 blur-3xl rounded-full top-10 left-0"></div>

      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/20 blur-3xl rounded-full bottom-10 right-0"></div>

      {/* Content */}

      <div className="relative z-10 max-w-4xl">

        {/* Profile */}

        <img
          src="/profile.jpeg"
          alt="Kavya"
          className="
          w-32
          h-32
          md:w-40
          md:h-40
          rounded-full
          mx-auto
          mb-8
          border-4
          border-blue-500
          object-cover
          shadow-2xl
          shadow-blue-500/30
          "
        />

        {/* Name */}

        <h1
          className="
          text-5xl
          sm:text-6xl
          md:text-7xl
          font-extrabold
          leading-tight
          mb-6
          bg-gradient-to-r
          from-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
          "
        >
          Daggubati Kavya
        </h1>

        {/* Role */}

        <h2
          className="
          text-xl
          sm:text-2xl
          text-slate-300
          mb-6
          font-medium
          "
        >
          Full Stack Developer & Data Science Student
        </h2>

        {/* Description */}

        <p
          className="
          text-slate-400
          text-base
          sm:text-lg
          leading-8
          max-w-2xl
          mx-auto
          mb-10
          "
        >
          Passionate about building scalable web applications,
          intelligent systems, cloud-based platforms and
          data-driven solutions using modern technologies.
        </p>

        {/* Buttons */}

        <div
          className="
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          "
        >

          <a
            href="#projects"
            className="
            bg-blue-600
            hover:bg-blue-700
            px-8
            py-3
            rounded-xl
            transition-all
            duration-300
            hover:scale-105
            font-semibold
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="
            border
            border-white/30
            hover:bg-white
            hover:text-black
            px-8
            py-3
            rounded-xl
            transition-all
            duration-300
            hover:scale-105
            font-semibold
            "
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;