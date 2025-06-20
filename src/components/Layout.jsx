// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page content */}
      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer always visible and on top */}
      <footer className="relative z-20">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
