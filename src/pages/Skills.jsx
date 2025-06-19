import { Helmet } from "react-helmet";
import { AboutSkills } from "../components/about/AboutSkills";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "📜" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Node.js", icon: "🌿" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "🔧" },
  { name: "Next.js", icon: "🚀" },
  { name: "Svelte", icon: "🔥" },
];

const Skills = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>Zillehuma | Skills</title>
        <meta name="description" content="Skills and technologies I use including React, Tailwind, Node.js, and more." />
      </Helmet>

      <h2 className="text-2xl font-bold mb-6 text-center">🛠 My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-lg shadow hover:shadow-md transition cursor-default"
          >
            <div className="text-3xl mb-2 transform hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <div className="font-medium">{skill.name}</div>
          </div>
        ))}
      </div>
            <AboutSkills />

    </div>
  );
};

export default Skills;
