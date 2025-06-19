// src/pages/Achievements.jsx

const achievements = [
  {
    title: "🏅 Developer of the Quarter",
    description: "Recognized at SA Systems for delivering high-quality features under tight deadlines and collaborating across teams effectively."
  },
  {
    title: "🔧 Fixed 200+ Critical Bugs",
    description: "Improved performance and user experience across production systems through aggressive debugging and QA collaboration."
  },
  {
    title: "⚡ Improved Site Performance by 50%",
    description: "Used Lighthouse reports and code refactoring to significantly boost speed and SEO rankings for key platforms."
  },
  {
    title: "🌐 Served 10,000+ Users",
    description: "Built scalable platforms like Reserval and Lightning Store, supporting thousands of real-world users seamlessly."
  },
  {
    title: "🚀 Deployed 3 High-Impact Products",
    description: "Successfully launched ERP, booking, and e-commerce platforms — all used in real business operations across multiple countries."
  }
];

const Achievements = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">🏆 Achievements</h2>
      <div className="space-y-6">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="p-4 border-l-4 border-green-500 bg-white dark:bg-gray-800 shadow rounded-md"
            data-aos="fade-right"
            data-aos-delay={idx * 100}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
