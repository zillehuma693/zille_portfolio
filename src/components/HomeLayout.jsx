// src/components/HomeLayout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="pt-24 relative z-10">
        {children}
      </main>

      {/* ✅ Fixed Footer only for Home */}
      <footer className="fixed bottom-0 left-0 w-full z-30">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
