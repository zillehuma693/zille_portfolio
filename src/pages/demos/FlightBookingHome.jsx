// src/pages/demos/FlightBookingHome.jsx
import ReturnToDemos from "../../components/ReturnToDemos";
const FlightBookingHome = () => {
  return (
<div className="min-h-screen pt-6 p-6 bg-gradient-to-br from-yellow-100 to-pink-100 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-10">
          <ReturnToDemos />
      <h1 className="text-3xl font-bold text-center">✈️ Flight Booking Homepage Demo</h1>

      {/* Search Bar Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow space-y-4">
        <h2 className="text-xl font-semibold">Find Your Flight</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <input type="text" placeholder="From" className="p-2 border rounded" />
          <input type="text" placeholder="To" className="p-2 border rounded" />
          <input type="date" className="p-2 border rounded" />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Search</button>
        </div>
      </div>

      {/* Featured Destinations Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Popular Destinations</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Dubai", "Istanbul", "Jeddah", "London", "New York", "Makkah"].map((city, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow text-center hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium">{city}</h3>
              <p className="text-gray-500 dark:text-gray-300">From $399</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default FlightBookingHome;
