import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        <h2
          className="
          text-4xl
          md:text-5xl
          font-extrabold
          mb-4
          bg-gradient-to-r
          from-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
          "
        >
          Featured Projects
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Full stack and intelligent systems projects focused on
          solving real-world problems using modern technologies.
        </p>

      </div>

      {/* Grid */}

      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (

          <div
            key={index}
            className="
            bg-slate-900/80
            backdrop-blur-xl
            rounded-3xl
            overflow-hidden
            border
            border-slate-800
            hover:border-cyan-500/40
            hover:-translate-y-2
            hover:shadow-cyan-500/10
            shadow-xl
            transition-all
            duration-500
            flex
            flex-col
            "
          >

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-56
                object-cover
                hover:scale-110
                transition-all
                duration-700
                "
              />

            </div>

            {/* Content */}

            <div className="p-6 flex flex-col flex-grow">

              {/* Title */}

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              {/* Description */}

              <p className="text-slate-400 leading-7 mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-3 mb-6">

                {project.techStack.map((tech, i) => (

                  <span
                    key={i}
                    className="
                    bg-blue-600/20
                    border
                    border-blue-500/30
                    text-blue-300
                    px-4
                    py-1
                    rounded-full
                    text-sm
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  bg-blue-600
                  hover:bg-blue-700
                  px-5
                  py-2
                  rounded-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  font-medium
                  "
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;