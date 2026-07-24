import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationLetrasSkills(containerRef, targets) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 780;
        const elements = targets.map(ref => ref.current).filter(Boolean);

        const originais = elements.map(el => el.innerHTML);

        const splitEmLetras = (el) => {
            const texto = el.textContent;
            el.innerHTML = "";
            const spans = [];

            texto.split("").forEach((char) => {
                const span = document.createElement("span");
                span.textContent = char === " " ? "\u00A0" : char;
                span.style.display = "inline-block";
                span.style.willChange = "transform, opacity";
                el.appendChild(span);
                spans.push(span);
            });

            return spans;
        };

        const ctx = gsap.context(() => {
            const todasLetras = elements.map(splitEmLetras);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    //markers: true,
                    scrub: 1,
                    start: isMobile ? "40% 50%" : "1000% 10%",
                    end: isMobile ? "80% 50%" : "2000% 10%",
                },
            });

            todasLetras.forEach((letras, i) => {
                tl.fromTo(
                    letras,
                    {
                        opacity: 0,
                        y: isMobile ? -40 : -80,
                        
                    },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "expo.out",
                        duration: 0.7,
                        stagger: 0.045,
                    },
                    i === 0 ? undefined : "-=0.35"
                );
            });

            return () => tl.scrollTrigger?.kill();
        }, containerRef);

        return () => {
            ctx.revert();
            elements.forEach((el, i) => {
                el.innerHTML = originais[i];
            });
        };
    }, [containerRef, targets]);
}