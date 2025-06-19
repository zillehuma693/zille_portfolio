import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaTelegram,FaEnvelope } from 'react-icons/fa';

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            color: { value: '#000000' },
            links: { enable: true, color: '#999' },
          },
        }}
        className="absolute inset-0"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left px-6">
        {/* Left content */}
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Hi There, I'm <span className="text-orange-500">Zillehuma</span>
          </h1>
          <h2 className="text-2xl text-gray-700 dark:text-gray-300">
            I am into <span className="text-pink-600 font-semibold">
              <Typewriter
                words={['Web Development', 'Frontend Engineering', 'React Projects']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <a
            href="/about"
            className="inline-block mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
          >
            About Me ⬇️
          </a>

          {/* Social Icons */}
<div className="flex justify-center md:justify-start mt-6 space-x-4 text-2xl">
  <a href="https://github.com/zillehuma693" target="_blank" rel="noopener noreferrer">
    <FaGithub className="hover:text-gray-600" />
  </a>
  <a href="https://www.linkedin.com/in/zille-huma-4364051a4" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="hover:text-blue-600" />
  </a>
  <a href="mailto:zillehumasaif693@gmail.com">
    <FaEnvelope className="hover:text-red-600" />
  </a>
</div>
</div>

        {/* Avatar */}
        <div className="mt-10 md:mt-0 md:ml-12">
          <img
            src="/avatar.png" // Replace with your own avatar or illustration
            alt="Zillehuma Avatar"
            className="w-60 h-60 rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
