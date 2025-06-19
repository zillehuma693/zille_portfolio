// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { useMemo } from "react";

const ParticlesBackground = () => {
  const options = useMemo(() => ({
    background: { color: { value: "#000000" } },
    fpsLimit: 60,
    particles: {
      color: { value: "#ffffff" },
      links: { enable: true, color: "#ffffff", distance: 150 },
      move: { enable: true, speed: 2 },
      number: { value: 40 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } }
    },
  }), []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Avoids checkVersion error
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesBackground;
