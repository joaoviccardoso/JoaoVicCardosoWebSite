import { useLayoutEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";

export default function useScrollAnimationHeroSobreMim(el,titleRef,textRef,divBotao,divHero) {
    useLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const ctx = gsap.context(() => {
        let split;

        document.fonts.ready.then(() => {
            split = new SplitText(titleRef.current, {
                types: "words",
            });

            const intro = gsap.timeline({
                onComplete: () => {
                    // 👇 ScrollTrigger só nasce aqui
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: el.current,
                            scrub: 1,
                            //markers: true,
                            start: "top 70%",
                            end: "bottom 50%",
                        }
                    })
                    .to(divHero.current, {
                        y: -150,
                        opacity: .7,
                        scale: 0.95,
                        filter: "blur(5px)"
                    },1)
                }
            });

            intro
                .from(split.words, {
                    duration: 1.3,
                    opacity: 0,
                    y: 30,
                    stagger: 0.08,
                    ease: "power2.out",
                    delay: 0.5
                })
                .from(textRef.current, {
                    y: 30,
                    opacity: 0,
                }, "-=0.8")
                .from(divBotao.current, {
                    y: 30,
                    opacity: 0,
                }, "-=0.8")
            });

        }, el);

        return () => ctx.revert();
    }, []);
}
