const certs = [
  {
    title: "Angular Certification",
    issuer: "Infosys Springboard",
    file: "/angular.pdf",
  },

  {
    title: "HTML5 Certification",
    issuer: "Infosys Springboard",
    file: "/html5.pdf",
  },

  {
    title: "TypeScript Certification",
    issuer: "Infosys Springboard",
    file: "/typescript.pdf",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
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
          Certifications
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Professional certifications and technical learning
          experiences that strengthened my development skills.
        </p>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-8">

        {certs.map((cert) => (

          <div
            key={cert.title}
            className="
            bg-slate-900/80
            backdrop-blur-xl
            border
            border-slate-800
            rounded-3xl
            p-8
            shadow-xl
            hover:border-cyan-500/40
            hover:shadow-cyan-500/10
            hover:-translate-y-2
            transition-all
            duration-500
            "
          >

            {/* Icon */}

            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-cyan-500/10
              border
              border-cyan-500/30
              flex
              items-center
              justify-center
              text-3xl
              mb-6
              "
            >
              📜
            </div>

            {/* Title */}

            <h3 className="text-2xl font-bold mb-3">
              {cert.title}
            </h3>

            {/* Issuer */}

            <p className="text-cyan-400 text-lg mb-4">
              {cert.issuer}
            </p>

            {/* Button */}

            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              className="
              inline-block
              mt-4
              bg-blue-600
              hover:bg-blue-700
              px-5
              py-2
              rounded-xl
              transition-all
              duration-300
              hover:scale-105
              "
            >
              View Certificate
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;