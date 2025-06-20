import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md px-6 py-4">      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Zillehuma</h1>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 dark:text-white md:hidden text-2xl"
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <NavLinks />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <NavLinks setMenuOpen={setMenuOpen} />
        </div>
      )}
    </nav>
  );
}

const NavLinks = ({ setMenuOpen }) => {
  const handleClick = () => {
    if (setMenuOpen) setMenuOpen(false);
  };

  return (
    <>
      <Link to="/" onClick={handleClick} className="text-blue-500 font-medium hover:underline">Home</Link>
      <Link to="/projects" onClick={handleClick} className="text-blue-500 font-medium hover:underline">Projects</Link>
      <Link to="/skills" onClick={handleClick} className="text-blue-500 font-medium hover:underline">Skills</Link>
      <Link to="/resume" onClick={handleClick} className="text-blue-500 font-medium hover:underline">Resume</Link>
      <Link to="/experience" onClick={handleClick} className="text-blue-500 font-medium hover:underline">Experience</Link>
            <Link to="/demos" onClick={handleClick} className="text-blue-500 font-medium hover:underline">Demo Projects</Link>

      <Link to="/achievements" onClick={handleClick} className="text-blue-500 font-medium hover:underline">Achievements</Link>
      <Link to="/contact" onClick={handleClick} className="text-blue-500 font-medium hover:underline">Contact</Link>
    </>
  );
};

export default Navbar;
