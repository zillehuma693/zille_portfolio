// src/pages/Experience.jsx

const workExperience = [
  {
    role: "Frontend Developer",
    company: "SA Systems",
    duration: "Jan 2024 - Feb 2025",
    description: "Led frontend development of a real estate ERP platform using Next.js and React. Improved UI responsiveness, fixed 200+ critical bugs, and implemented new features including a property management dashboard."
  },
  {
    role: "Frontend Developer",
    company: "ILSA Interactive",
    duration: "May 2022 - Dec 2022",
    description: "Built Reserval and Lightning Store platforms with Next.js, Tailwind, and SEO optimizations. Increased site performance by 50% and implemented flight and light order modules used by thousands of users."
  },
  {
    role: "Backend Developer (Intern)",
    company: "BizzClan",
    duration: "Jul 2021 - Oct 2021",
    description: "Worked on Blackbooking backend using Node.js. Developed and secured RESTful APIs and integrated MySQL for managing hotel booking operations."
  }
];

const Experience = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">💼 Work Experience</h2>
      <div className="space-y-6">
        {workExperience.map((job, idx) => (
          <div
            key={idx}
            className="border-l-4 border-yellow-500 pl-4 py-4 shadow-md rounded-md bg-white dark:bg-gray-800"
            data-aos="fade-left"
            data-aos-delay={idx * 200}
          >
            <h3 className="text-xl font-semibold">{job.role} at {job.company}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{job.duration}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-200">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
