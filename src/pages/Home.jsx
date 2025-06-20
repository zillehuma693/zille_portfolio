// src/pages/Home.jsx
import ParticlesBackground from "../components/ParticlesBackground";
import ProfileCard from "../components/ProfileCard";
import Testimonials from "../components/Testimonials";


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
  className="max-w-3xl w-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 p-8 rounded-lg shadow-xl leading-relaxed"
  data-aos="fade-up"
>
  <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 text-center">
    👋 About Me
  </h3>

  <p className="mb-4 text-lg">
    I'm <span className="font-semibold text-indigo-700 dark:text-indigo-300">Zillehuma</span>, a versatile and solution-focused web developer who specializes in building <strong className="text-blue-600 dark:text-blue-400">complete websites and platforms</strong> — from clean, modern UIs to secure backend architectures and smooth deployments.
  </p>

  <p className="mb-4">
    I’ve worked with companies across various industries to build end-to-end applications such as:
    <span className="font-medium text-green-700 dark:text-green-300"> real estate ERPs</span>, 
    <span className="font-medium text-yellow-700 dark:text-yellow-300"> e-commerce platforms</span>, 
    and <span className="font-medium text-purple-700 dark:text-purple-300"> flight booking systems</span>. Whether it’s designing a responsive interface with <strong>React</strong> and <strong>Next.js</strong> or implementing backend logic using <strong>Node.js</strong> and <strong>PostgreSQL</strong>, I bring the full project to life — efficiently and collaboratively.
  </p>

  <p className="mb-4">
    My development style balances performance, usability, and scalability. I'm confident building everything from <span className="text-blue-700 dark:text-blue-300">REST APIs</span> and 
    <span className="text-orange-600 dark:text-orange-300"> user dashboards</span> to integrating AI modules, content management tools, and deployment workflows.
  </p>

  <p className="mb-4">
    I believe in writing clean, maintainable code and collaborating closely with teams or clients to ensure the product not only works — but delivers value.
  </p>

  <p className="mb-6 text-gray-600 dark:text-gray-400 italic">
    "Good software is not just built — it’s designed with empathy, tested with intent, and deployed with purpose."
  </p>

  <div className="flex justify-center gap-4 flex-wrap">
  
    <a
      href="/contact"
      className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
    >
      🤝 Let’s Connect
    </a>
  </div>
</section>
<Testimonials />
      </div>
      
    </div>
  );
}

export default Home;
