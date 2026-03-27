import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimation(el, ids) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 480;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    scrub: 2,
                    start: "top 90%",
                    end: "bottom 70%",
                },
            });

            ids.forEach((id) => {
                tl.fromTo(id,
                    {
                        opacity: 0,
                        x: isMobile ? -100 : -160,
                    },
                    {
                        opacity: 1,
                        x: 0,
                    }
                );
            });
        }, el);

        return () => ctx.revert();
    }, [el, ids]);
}