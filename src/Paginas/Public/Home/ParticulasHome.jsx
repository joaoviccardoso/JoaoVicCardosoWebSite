import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground({ position, zIndex }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => {
    const isMobile = window.innerWidth <= 768;

    return {
      fullScreen: { enable: false },
      detectRetina: !isMobile, // não renderiza em resolução retina no celular
      fpsLimit: isMobile ? 30 : 60, // segura o loop pra não brigar com o scroll
      particles: {
        number: { value: isMobile ? 50 : 200 },
        color: { value: "#ffffff" },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.5,
            sync: false,
          },
        },
        shadow: {
          enable: !isMobile, // o maior custo, desliga no celular
          blur: 8,
          color: "#ffffff",
        },
        size: {
          value: { min: 2, max: 3 },
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 0.2,
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onHover: {
            enable: !isMobile, // hover não existe no touch, só custa
            mode: "repulse",
          },
          onClick: {
            enable: false,
          },
        },
        modes: {
          repulse: {
            distance: 60,
            duration: 0.4,
          },
        },
      },
    };
  }, []);

  if (!init) return null;

  return (
    <Particles
      style={{
        position,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex,
      }}
      options={options}
    />
  );
}