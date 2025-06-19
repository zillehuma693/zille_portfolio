// src/pages/demos/StreamingHome.jsx
import ReturnToDemos from "../../components/ReturnToDemos";
const shows = [
  { title: "The Great Code War", image: "https://picsum.photos/200/300?random=1" },
  { title: "Startup Hustle", image: "https://picsum.photos/200/300?random=2" },
  { title: "Dark Mode Diaries", image: "https://picsum.photos/200/300?random=3" },
  { title: "Nextflix Originals", image: "https://picsum.photos/200/300?random=4" },
  { title: "Terminal Tales", image: "https://picsum.photos/200/300?random=5" },
  { title: "AI Love", image: "https://picsum.photos/200/300?random=6" },
  { title: "Debugged", image: "https://picsum.photos/200/300?random=7" },
  { title: "Deploy Now!", image: "https://picsum.photos/200/300?random=8" },{ title: "Debugged", image: "https://picsum.photos/200/300?random=9" },
  { title: "Deploy Now!", image: "https://picsum.photos/200/300?random=10" }
];

const StreamingHome = () => {
  return (
<div className="min-h-screen pt-6 p-6 bg-gradient-to-br from-blue-100 to-red-100 text-gray-900">      <div className="max-w-7xl mx-auto space-y-10">
        <ReturnToDemos />

        <h1 className="text-3xl font-bold text-center">📺 Streaming Homepage Demo</h1>

        {/* Hero Banner */}
        <div className="bg-white p-6 rounded-xl shadow text-center space-y-3">
          <h2 className="text-2xl font-bold">Now Streaming: The Great Code War</h2>
          <p className="text-sm text-gray-600">A thrilling series for developers by developers</p>
          <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-white mt-2">Watch Now</button>
        </div>

        {/* Shows Grid */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">🔥 Popular This Week</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {shows.map((show, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-gray-50 p-2 rounded shadow text-center transition"
              >
                <img
                  src={show.image}
                  alt={show.title}
                  className="rounded mb-2 w-full aspect-[2/3] object-cover"
                />
                <p className="text-sm font-medium">{show.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingHome;
