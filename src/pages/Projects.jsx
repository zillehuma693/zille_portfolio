import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "SAG ERP (Real Estate)",
    description:
      "A full-featured real estate ERP platform built using Next.js and React. Implemented a modern UI, property dashboards, and bug-free workflows. Contributed to a 26% increase in usability.",
      image: "sasystems.PNG",
    link: "https://sasystems.solutions/",
    stack: ["React", "Next.js", "Tailwind", "Node.js"]
  },
  {
    title: "Reserval (Flight Booking)",
    description:
      "A responsive flight booking platform that handles search, filter, and booking flows. Improved performance by 50% and integrated SEO with Next.js.",
      image: "reserval.PNG",
    link: "https://www.reserval.com/airlines/saudi-arabian-airlines/SV",
    stack: ["Next.js", "Tailwind", "Node.js", "MongoDB"]
  },
  {
    title: "Lightning Store",
    description:
      "An online light-ordering platform for businesses. Developed advanced product filters and checkout system using React & Tailwind CSS.",
      image: "lightning.PNG",
    link: "https://lightingstores.com.sa/",
    stack: ["React", "Tailwind", "MongoDB", "Express"]
  },
  {
    title: "Blackbooking (Backend Project)",
    description:
      "Hotel booking system backend using Node.js and MySQL. Developed RESTful APIs, ensured secure authentication, and enabled admin-level management tools.",
      image: "blackbooking.PNG",
    link: "https://www.blackbooking.org/",
    stack: ["Node.js", "Express", "MySQL"]
  }
];

const Projects = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">🚀 Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
