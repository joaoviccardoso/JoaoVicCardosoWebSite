import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";

export default function useLayoutEffectHeroPadrao(el,titleRef,textRef,divHero,imgHero,divBotao) {
  useLayoutEffect(() => {
    if (!el?.current) return;

    gsap.registerPlugin(SplitText, ScrollTrigger);

    const ctx = gsap.context(() => {
      let split;

      document.fonts.ready.then(() => {
        if (!titleRef.current) return;

        split = new SplitText(titleRef.current, {
          types: "words",
        });

        const intro = gsap.timeline({
          onComplete: () => {
            gsap.timeline({
              scrollTrigger: {
                trigger: el.current,
                scrub: 2,
                start: "top 90%",
                end: "bottom 50%",
              },
            })
              .to(
                divHero.current,
                {
                  y: -150,
                  opacity: 0.7,
                  scale: 0.95,
                  filter: "blur(5px)",
                },
                1
              )
              .to(
                imgHero.current,
                {
                  y: -150,
                  opacity: 0.7,
                  scale: 0.95,
                  filter: "blur(5px)",
                },
                1
              );
          },
        });

        intro
          .from(split.words, {
            duration: 1.3,
            opacity: 0,
            y: 30,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.5,
          })
          .from(
            textRef.current,
            {
              y: 30,
              opacity: 0,
            },
            "-=0.8"
          )
          .from(
            divBotao.current,
            {
              y: 30,
              opacity: 0,
            },
            "-=0.8"
          )
          .from(
            imgHero.current,
            {
              opacity: 0,
              x: 40,
            },
            "-=0.3"
          );
      });
    }, el.current);

    return () => {
      ctx.revert();
    };
  }, []);
}