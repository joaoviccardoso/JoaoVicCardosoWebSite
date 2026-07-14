import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationUpServicos(el, ids) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 480;
        const elements = ids.map(ref => ref.current).filter(Boolean);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: elements[0] ?? el.current,
                    markers: true,
                    scrub: 2,
                    start: isMobile ? "-90% 10%" : "-90% 10%",
                    end: isMobile ? "300% 10%" : "bottom 10%",
                },
            });

            tl.fromTo(
                elements,
                { opacity: 0, y: isMobile ? 80 : 140 },
                { opacity: 1, y: 0, stagger: 0.2, ease: "power2.out" }
            );
        }, el);

        return () => ctx.revert();
    }, [el, ids]);
}