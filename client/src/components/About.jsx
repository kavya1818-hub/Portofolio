function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-24"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-5xl font-extrabold mb-4">
          About Me
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Passionate about building impactful digital products,
          scalable applications and intelligent systems.
        </p>

      </div>

      {/* About Card */}

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

        <p className="text-lg text-slate-300 leading-9">

          I am an Integrated MTech Data Science student at
          VIT Vellore University with strong interest in
          Full Stack Development, Data Analytics, Cloud Computing,
          Artificial Intelligence and scalable software systems.

          <br /><br />

          I have developed multiple real-world projects including
          intelligent traffic management systems, healthcare
          applications, cloud-based e-commerce platforms and
          AI-powered solutions using modern technologies such as
          React, Node.js, MongoDB and Python.

          <br /><br />

          I enjoy solving real-world problems through technology,
          continuously improving my development skills and building
          professional software products with clean user experiences.

        </p>

      </div>
    </section>
  );
}

export default About;