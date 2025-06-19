// src/components/HomeLayout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-24 relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
