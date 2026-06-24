import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
  particles: {
    number: { value: 50 },
    color: { value: "#ffffff" },
    opacity: {
      value: { min: 0.1, max: 0.5 }
    },
    size: {
      value: { min: 1, max: 2 }
    },
    links: {
      enable: false
    },
    move: {
      enable: true,
      speed: 0.2
    }
  },
  interactivity: {
  detect_on: "window",
  events: {
    onHover: {
      enable: true,
      mode: "repulse"
    },
    onClick: {
      enable: false
    }
  },
  modes: {
    repulse: {
      distance: 60,
      duration: 0.4
    }
  }
}
}), []);

  if (!init) return null;

  return (
    <Particles
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
        }}
        options={options}
    />
  )
  
  
}