import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationUp(el, ids) {
    useLayoutEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 480;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    scrub: 2,
                    start: "top 60%",
                    end: "bottom 50%",
                },
            });

            tl.fromTo(
                    ids, // 👈 array completo
                        {
                            opacity: 0,
                            y: isMobile ? 100 : 200,
                        },
                        {
                            opacity: 1,
                            y: 0,
                            stagger: 0.2, // 🔥 aqui está o segredo
                        }
                    );

        }, el);

        return () => ctx.revert();
    }, [el, ids])
}