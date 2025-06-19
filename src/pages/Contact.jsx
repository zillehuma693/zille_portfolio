import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  // Hide success message after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Helmet>
        <title>Contact Zillehuma</title>
        <meta
          name="description"
          content="Get in touch with Zillehuma via contact form for projects or collaboration."
        />
      </Helmet>

      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

      {submitted && (
        <div className="mb-4 text-green-600" role="alert">
          Thank you! Message sent ✅
        </div>
      )}
<div className="flex justify-center gap-6 text-2xl mb-6 text-gray-800 dark:text-gray-200">
  <a href="https://github.com/zillehuma693" target="_blank" rel="noopener noreferrer" className="hover:text-black">
    <FaGithub />
  </a>
  <a href="https://www.linkedin.com/in/zille-huma-4364051a4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
    <FaLinkedin />
  </a>
  <a href="mailto:zillehumasaif693@gmail.com" className="hover:text-red-500">
    <FaEnvelope />
  </a>
</div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          aria-label="Your name"
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          aria-label="Your email"
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          required
          aria-label="Your message"
          className="w-full p-3 border rounded"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
