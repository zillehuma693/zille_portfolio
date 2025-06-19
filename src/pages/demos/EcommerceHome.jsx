// src/pages/demos/EcommerceHome.jsx
import ReturnToDemos from "../../components/ReturnToDemos";

const products = [
  { id: 1, name: "Wireless Headphones", emoji: "🎧", price: "$89.99" },
  { id: 2, name: "Smartphone", emoji: "📱", price: "$499.00" },
  { id: 3, name: "Sneakers", emoji: "👟", price: "$69.00" },
  { id: 4, name: "Smartwatch", emoji: "⌚", price: "$129.99" },
  { id: 5, name: "Camera", emoji: "📷", price: "$329.00" },
  { id: 6, name: "Laptop", emoji: "💻", price: "$899.99" }
];

const EcommerceHome = () => {
  return (
<div className="min-h-screen pt-6 p-6 bg-gradient-to-br from-purple-100 to-green-100 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-10">
        <ReturnToDemos />

        <h1 className="text-3xl font-bold text-center">🛍 E-Commerce Homepage Demo</h1>

        {/* Hero Banner */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-2">Big Sale Weekend</h2>
          <p className="text-gray-600 mb-4">Up to 50% off on tech gadgets and fashion</p>
          <button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-semibold mb-2">📦 Featured Products</h3>
            <p className="text-sm text-gray-600">Top-rated and new arrivals</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-semibold mb-2">🔥 Deals of the Day</h3>
            <p className="text-sm text-gray-600">Limited time offers every day</p>
          </div>
          <div className="bg-white p-4 rounded shadow text-center">
            <h3 className="text-lg font-semibold mb-2">🌟 Best Sellers</h3>
            <p className="text-sm text-gray-600">Most popular items right now</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">🛒 Products</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded shadow text-center hover:shadow-md transition"
              >
                <div className="text-5xl mb-2">{product.emoji}</div>
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-gray-600 mb-2">{product.price}</p>
                <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHome;
