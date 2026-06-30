import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationUp(el, ids) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 480;
        console.log(ids.map(ref => ref.current));

        const elements = ids.map(ref => ref.current).filter(Boolean);
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: elements[0] ?? el.current,
                    scrub: 1,
                    start: "-20% 100%",
                    end: "top 60%",
                },
            });

            tl.fromTo(
                elements,
                { opacity: 0, y: isMobile ? 60 : 140, },
                { opacity: 1, y: 0, stagger: 0.2, ease: "power2.out" }
            );
        }, el);

        return () => ctx.revert();
    }, [el, ids]);
}