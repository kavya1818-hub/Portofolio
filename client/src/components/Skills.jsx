const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS"
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs"
];

const otherSkills = [
  "Python",
  "Power BI",
  "Git & GitHub",
  "Cloud Computing",
  "Java"
];

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-5xl font-extrabold mb-4">
          Skills & Technologies
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to build scalable,
          modern and efficient software solutions.
        </p>

      </div>

      {/* Skills Grid */}

      <div className="grid md:grid-cols-3 gap-8">

        {/* Frontend */}

        <div
          className="
          bg-slate-900/80
          backdrop-blur-lg
          border
          border-slate-800
          rounded-3xl
          p-8
          hover:border-blue-500/40
          transition-all
          duration-500
          "
        >

          <h3 className="text-2xl font-bold mb-6 text-blue-400">
            Frontend
          </h3>

          <div className="flex flex-wrap gap-3">

            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="
                bg-blue-600/20
                border
                border-blue-500/30
                text-blue-300
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                "
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

        {/* Backend */}

        <div
          className="
          bg-slate-900/80
          backdrop-blur-lg
          border
          border-slate-800
          rounded-3xl
          p-8
          hover:border-cyan-500/40
          transition-all
          duration-500
          "
        >

          <h3 className="text-2xl font-bold mb-6 text-cyan-400">
            Backend
          </h3>

          <div className="flex flex-wrap gap-3">

            {backendSkills.map((skill) => (
              <span
                key={skill}
                className="
                bg-cyan-600/20
                border
                border-cyan-500/30
                text-cyan-300
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                "
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

        {/* Other */}

        <div
          className="
          bg-slate-900/80
          backdrop-blur-lg
          border
          border-slate-800
          rounded-3xl
          p-8
          hover:border-purple-500/40
          transition-all
          duration-500
          "
        >

          <h3 className="text-2xl font-bold mb-6 text-purple-400">
            Tools & Other Skills
          </h3>

          <div className="flex flex-wrap gap-3">

            {otherSkills.map((skill) => (
              <span
                key={skill}
                className="
                bg-purple-600/20
                border
                border-purple-500/30
                text-purple-300
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
                "
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;