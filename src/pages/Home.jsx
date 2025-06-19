// src/pages/Home.jsx
import ParticlesBackground from "../components/ParticlesBackground";
import ProfileCard from "../components/ProfileCard";
function Home() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center text-white">
      <ParticlesBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">
        <ProfileCard />
      </div>
    </div>
  );
}

export default Home;

