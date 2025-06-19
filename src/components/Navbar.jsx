import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex gap-6 fixed top-0 w-full z-50">
   <Link to="/" className="text-blue-500 font-medium hover:underline">Home</Link>
<Link to="/about" className="text-blue-500 font-medium hover:underline">About</Link>
<Link to="/skills" className="text-blue-500 font-medium hover:underline">Skills</Link>
<Link to="/experience" className="text-blue-500 font-medium hover:underline">Experience</Link>
<Link to="/projects" className="text-blue-500 font-medium hover:underline">Projects</Link>
<Link to="/achievements" className="text-blue-500 font-medium hover:underline">Achievements</Link>
<Link to="/resume" className="text-blue-500 font-medium hover:underline">Resume</Link>
<Link to="/contact" className="text-blue-500 font-medium hover:underline">Contact</Link>
<Link to="/demos" className="text-blue-500 font-medium hover:underline">Demos</Link>

<Link to="/generate-bio" className="text-blue-500 font-medium hover:underline">AI Bio</Link>

    </nav>
  );
}

export default Navbar;
