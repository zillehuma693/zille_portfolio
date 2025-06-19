// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import Layout from "./components/Layout";
import "aos/dist/aos.css";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import AboutGenerator from "./components/AboutGenerator";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import { Helmet } from "react-helmet";
import Experience from './pages/Experience';
            import Achievements from "./pages/Achievements";
import Demos from './pages/demos/Demos';
import EcommerceHome from './pages/demos/EcommerceHome';
import FlightBookingHome from './pages/demos/FlightBookingHome';
import StreamingHome from './pages/demos/StreamingHome';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col">
        <Helmet>
          <title>Zillehuma's Portfolio</title>
          <meta name="description" content="Zillehuma's personal portfolio website" />
          <meta property="og:title" content="Zillehuma's Portfolio" />
          <meta property="og:description" content="Showcasing projects, skills, and contact info." />
          <meta property="og:type" content="website" />
        </Helmet>


        <main className="flex-grow">
          <Routes>
  {/* Pages with Navbar */}
  <Route path="/" element={<Layout><Home /></Layout>} />
  <Route path="/about" element={<Layout><About /></Layout>} />
  <Route path="/projects" element={<Layout><Projects /></Layout>} />
  <Route path="/contact" element={<Layout><Contact /></Layout>} />
  <Route path="/resume" element={<Layout><Resume /></Layout>} />
  <Route path="/skills" element={<Layout><Skills /></Layout>} />
  <Route path="/experience" element={<Layout><Experience /></Layout>} />
  <Route path="/achievements" element={<Layout><Achievements /></Layout>} />
  <Route path="/generate-bio" element={<Layout><AboutGenerator /></Layout>} />
<Route path="/demos" element={<Layout><Demos /></Layout>} />
  {/* Demo pages (NO Navbar) */}
  <Route path="/demos/ecommerce" element={<EcommerceHome />} />
  <Route path="/demos/flight-booking" element={<FlightBookingHome />} />
  <Route path="/demos/streaming" element={<StreamingHome />} />
</Routes>
        </main>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
