import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationTitulosSkills(el, ids) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 780;
        const elements = ids.map(ref => ref.current).filter(Boolean);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: elements[0] ?? el.current,
                    //markers: true,
                    scrub: 1,
                    start: isMobile ? "-350% 50%" : "600% 10%",
                    end: isMobile ? "-220% 50%" : "1000% 10%",
                },
            });

            tl.fromTo(
                elements[0],
                { 
                    opacity: 0,
                    x: isMobile ? 60 : 160,
                    scale: 0.85,
                    rotate: -3,
                },
                { 
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    ease: "back.out(1.7)",
                    duration: 1,
                }
            )
            .fromTo(
                elements[1],
                { 
                    opacity: 0,
                    x: isMobile ? 40 : -160,
                    scale: 0.85,
                    rotate: 3,
                },
                { 
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    ease: "back.out(1.7)",
                    duration: 1,  
                },
                 "-=0.65" // começa junto com a anterior, remove pra ter o stagger manual
            );
            return () => tl.scrollTrigger?.kill();
        }, el);

        return () => ctx.revert();
    }, [el, ids]);
}