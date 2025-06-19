// src/components/ReturnToDemos.jsx
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ReturnToDemos = () => {
  return (
    <div className="mb-6">
      <Link
        to="/demos"
        className="inline-flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="font-medium">Back to Demos</span>
      </Link>
    </div>
  );
};

export default ReturnToDemos;
