// src/components/about/AboutSkills.jsx

export const AboutSkills = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "SCSS", "JavaScript (ES6+)", "React.js", "Next.js", "Vue.js", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "REST APIs", "Security"],
    Database: ["SQL", "MySQL", "MongoDB"],
    Tools: ["Git", "Agile/Scrum", "Docker", "Jest", "Mocha"]
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-center p-6 max-w-4xl mx-auto">🧠 Technical Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded shadow" data-aos="fade-up" data-aos-delay={index * 100}>
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">{category}</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              {items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
