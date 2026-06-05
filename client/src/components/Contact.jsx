import { useState } from "react";
import axios from "axios";

function Contact() {

  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        form
      );

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24"
    >

      {/* Heading */}

      <div className="text-center mb-16">

        <h2 className="text-5xl font-extrabold mb-4">
          Contact Me
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Interested in collaboration, internships or
          software development opportunities? Let’s connect.
        </p>

      </div>

      {/* Form Card */}

      <div
        className="
        bg-slate-900/80
        backdrop-blur-lg
        border
        border-slate-800
        rounded-3xl
        p-10
        shadow-xl
        hover:border-blue-500/40
        transition-all
        duration-500
        "
      >

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Name */}

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="
            w-full
            bg-slate-800
            border
            border-slate-700
            focus:border-blue-500
            focus:outline-none
            rounded-2xl
            px-5
            py-4
            text-white
            transition-all
            "
            required
          />

          {/* Email */}

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="
            w-full
            bg-slate-800
            border
            border-slate-700
            focus:border-blue-500
            focus:outline-none
            rounded-2xl
            px-5
            py-4
            text-white
            transition-all
            "
            required
          />

          {/* Subject */}

          <input
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) =>
              setForm({
                ...form,
                subject: e.target.value,
              })
            }
            className="
            w-full
            bg-slate-800
            border
            border-slate-700
            focus:border-blue-500
            focus:outline-none
            rounded-2xl
            px-5
            py-4
            text-white
            transition-all
            "
            required
          />

          {/* Message */}

          <textarea
            rows="6"
            placeholder="Write your message..."
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="
            w-full
            bg-slate-800
            border
            border-slate-700
            focus:border-blue-500
            focus:outline-none
            rounded-2xl
            px-5
            py-4
            text-white
            transition-all
            resize-none
            "
            required
          />

          {/* Success Message */}

          {success && (
            <div
              className="
              bg-green-500/20
              border
              border-green-500/30
              text-green-400
              px-5
              py-4
              rounded-2xl
              "
            >
              Message sent successfully!
            </div>
          )}

          {/* Button */}

          <button
            type="submit"
            className="
            bg-blue-600
            hover:bg-blue-700
            px-8
            py-4
            rounded-2xl
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-lg
            shadow-blue-500/20
            "
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;