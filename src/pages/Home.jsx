// src/pages/Home.jsx
import ParticlesBackground from "../components/ParticlesBackground";
import ProfileCard from "../components/ProfileCard";

function Home() {
  return (
    <div className="relative z-10 text-white pt-24 px-4 bg-white dark:bg-gray-900">
      {/* Background only behind content */}
   <div className="absolute inset-0 h-full w-full -z-10 pointer-events-none">
  <ParticlesBackground />
</div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 pb-16">
        {/* Hero / Profile */}
        <ProfileCard />

        {/* About Me Section */}
        <section
          className="max-w-xl w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-6 rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">👩‍💻 About Me</h3>
          <p className="mb-3">
            I'm <strong>Zillehuma</strong>, a passionate frontend developer with over 2 years of experience building
            modern, user-centric web apps using <strong>React.js</strong>, <strong>Next.js</strong>, and
            <strong> Tailwind CSS</strong>.
          </p>
          <p className="mb-3">
            I’ve developed ERPs, e-commerce platforms, and flight booking apps. My backend experience includes
            <strong> Node.js</strong> and <strong>PostgreSQL</strong>.
          </p>
          <p>
            I love blending UI design with clean code and continuously learning new technologies. 🚀
          </p>
        </section>
      </div>
      
    </div>
  );
}

export default Home;
