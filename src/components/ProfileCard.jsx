// src/components/ProfileCard.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center space-y-4" data-aos="zoom-in">
      <img
        src="/zillehuma.jpg"
        alt="Zillehuma"
        className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500"
      />
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Zillehuma</h2>
      <p className="text-gray-600 dark:text-gray-300">Frontend Developer | React & Next.js Enthusiast</p>

      <div className="flex justify-center gap-4 text-xl text-indigo-600 dark:text-indigo-400">
        <a href="https://github.com/zillehuma693" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/zille-huma-4364051a4" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:zillehumasaif693@gmail.com"><FaEnvelope /></a>
      </div>
 <a
          href="/projects"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition"
        >
          View My Projects
        </a>
      <a
        href="/Zillehuma.pdf"
        download
        className="inline-block mt-3 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Download CV
      </a>
    </div>
  );
};

export default ProfileCard;
