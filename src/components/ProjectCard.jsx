const ProjectCard = ({ title, description, link, stack, image }) => (
  <div
    className="p-0 rounded-lg shadow bg-white dark:bg-gray-800 hover:shadow-lg transition overflow-hidden"
    data-aos="zoom-in"
  >
    {/* 🔼 Project Top View Screenshot */}
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
    )}

    <div className="p-5">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {stack.map((tech, i) => (
          <span
            key={i}
            className="text-sm px-2 py-1 bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Project →
      </a>
    </div>
  </div>
);

export default ProjectCard;
