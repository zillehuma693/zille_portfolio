// src/pages/About.jsx
import { AboutIntro } from "../components/about/AboutIntro";
import { AboutStatement } from "../components/about/AboutStatement";
import ProfileCard from "../components/ProfileCard";


const About = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">
      <ProfileCard />

      <AboutIntro />
            <AboutStatement />

    </div>
  );
};

export default About;



