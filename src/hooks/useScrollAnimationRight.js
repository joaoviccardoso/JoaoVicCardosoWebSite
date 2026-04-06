import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationRight(el, ids) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 480;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    scrub: 2,
                    start: "top 70%",
                    end: "bottom 40%",
                },
            });

            tl.fromTo(
            ids, 
                {
                    opacity: 0,
                    x: isMobile ? 100 : 220,
                },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.2,
                }
            );
        }, el);

        return () => ctx.revert();
    }, [el, ids]);
}