// src/pages/demos/Demos.jsx
import { Link } from "react-router-dom";

const Demos = () => {
  const demos = [
    {
      title: "🛍 E-commerce Homepage",
      description: "Clean, responsive layout with product grid and categories.",
      path: "/demos/ecommerce"
    },
    {
      title: "✈️ Flight Booking Homepage",
      description: "Flight search layout with destination cards and filters.",
      path: "/demos/flight-booking"
    },
    {
      title: "📺 Streaming Service Homepage",
      description: "Netflix-style grid of shows and featured banner.",
      path: "/demos/streaming"
    }
  ];

  return (
    <div className=" p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">🎨 UI Demo Pages</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {demos.map((demo, index) => (
          <Link
            key={index}
            to={demo.path}
            className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition border-l-4 border-indigo-500"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h2 className="text-xl font-semibold mb-2">{demo.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{demo.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Demos;
