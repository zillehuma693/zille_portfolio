// src/components/Testimonials.jsx
const testimonials = [
  {
    name: "Umair Ahmad",
    role: "Project Manager at SA Systems",
    text: "Zillehuma consistently delivered high-quality components and was instrumental in launching our ERP product. Her problem-solving and speed are exceptional.",
  },
  {
    name: "Shoaib Raza",
    role: "Team Lead at ILSA Interactive",
    text: "She handled both UI and API integration seamlessly for our Reserval project. Highly dependable and always open to feedback.",
  },
  {
    name: "Usman Khan",
    role: "Founder, Freelance Client",
    text: "Zillehuma built my entire e-commerce site from scratch. The UI is beautiful, the performance is solid, and the handoff was professional.",
  },
];

const Testimonials = () => {
  return (
    <section
  className="max-w-3xl w-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 p-8 rounded-lg shadow-xl leading-relaxed"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
        ⭐ Reviews & Testimonials
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition border border-gray-200 dark:border-gray-700"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{review.text}"</p>
            <hr className="my-3 border-gray-300 dark:border-gray-600" />
            <p className="text-indigo-700 dark:text-indigo-300 font-semibold">{review.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
