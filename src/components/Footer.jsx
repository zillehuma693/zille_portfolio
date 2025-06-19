// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-4 text-center">
        <p>© {new Date().getFullYear()} Zillehuma. All rights reserved.</p>
  <div className="flex justify-center gap-4 mt-2 text-lg">
    <a href="https://github.com/zillehuma693" target="_blank" rel="noopener noreferrer" className="hover:text-black">GitHub</a>
    <a href="https://www.linkedin.com/in/zille-huma-4364051a4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">LinkedIn</a>
    <a href="mailto:zillehumasaif693@gmail.com" className="hover:text-red-500">Email</a>
  </div>
      </footer>
    );
  };
  
  export default Footer;
  