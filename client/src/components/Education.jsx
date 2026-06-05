function Education() {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-24"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-5xl font-extrabold mb-4">
          Education
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Academic background and specialization in
          Data Science and modern software technologies.
        </p>

      </div>

      {/* Education Card */}

      <div
        className="
        bg-slate-900/80
        backdrop-blur-lg
        border
        border-slate-800
        rounded-3xl
        p-10
        hover:border-blue-500/40
        transition-all
        duration-500
        shadow-xl
        "
      >

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold mb-3">
              Integrated MTech Data Science
            </h3>

            <p className="text-blue-400 text-lg font-medium">
              VIT Vellore University
            </p>

          </div>

          {/* Right */}

          <div
            className="
            bg-blue-600/20
            border
            border-blue-500/30
            px-5
            py-3
            rounded-2xl
            text-blue-300
            font-semibold
            w-fit
            "
          >
            2023 - 2028
          </div>

        </div>

        {/* Description */}

        <p className="text-slate-400 leading-8 mt-8 text-lg">

          Focused on Data Science, Full Stack Development,
          Machine Learning, Cloud Computing and scalable
          software application development with practical
          project implementation experience.

        </p>

      </div>
    </section>
  );
}

export default Education;