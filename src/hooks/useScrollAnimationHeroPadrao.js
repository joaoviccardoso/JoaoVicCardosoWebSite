import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";

export default function useLayoutEffectHeroPadrao(el,titleRef,textRef,imgHero,divBotao, containerInfo) {
  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const ctx = gsap.context(() => {
        let split;

        document.fonts.ready.then(() => {
            split = new SplitText(titleRef.current, {
                types: "words",
            });

            // ✅ INTRO (continua igual)
            const intro = gsap.timeline();

            intro
                .from(split.words, {
                    duration: 1.3,
                    opacity: 0,
                    y: 30,
                    stagger: 0.08,
                    ease: "power2.out",
                    delay: 0.5
                })
                .from(imgHero.current, {
                    x: 50,
                    opacity: 0,
                    rotateY: -90
                }, "-=0.8")
                .from(textRef.current, {
                    opacity: 0,
                    y: 20,
                }, "-=0.8")
                .from(divBotao.current, {
                    opacity: 0,
                    scale: 0.9,
                }, "-=0.3");

            // ✅ SCROLL TRIGGER (AGORA CORRETO)
            gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    //markers: true,
                    scrub: 1,
                    start: "top top",
                    end: "30% top",
                }
            })
            .fromTo(containerInfo.current,
                { yPercent: 0, opacity: 1, filter: "blur(0px)" },
                { yPercent: 0, opacity: 0.7, filter: "blur(5px)" }
            );

            // 🔥 força recalcular posições
            ScrollTrigger.refresh();
        });

    }, el);

    return () => ctx.revert();
}, []);
}