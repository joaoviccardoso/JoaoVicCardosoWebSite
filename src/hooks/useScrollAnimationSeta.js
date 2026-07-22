import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationSeta(el, seta) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 780;
        
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    markers: true,
                    scrub: 3,
                    start: isMobile ? "-350% 50%" : "-50% 10%",
                    end: isMobile ? "-220% 50%" : "200% 10%",
                },
            });

            tl.fromTo(
                seta.current,
                { 
                    x: isMobile ? 60 : 0,
                },
                { 
                    x: 1000,
                    ease: "back.out(1.7)",
                    duration: 1,
                }
            )
        
            return () => tl.scrollTrigger?.kill();
        }, el);

        return () => ctx.revert();
    }, [el,seta]);
}