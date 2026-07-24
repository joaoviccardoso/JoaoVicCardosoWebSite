import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";

export default function useLayoutEffectSobreMimTextos(el,titleRef,textRef,divBotao,contSeta) {
  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const isMobile = window.innerWidth <= 780;

    if(isMobile){
        return
    }
    
    const ctx = gsap.context(() => {
        let split;

        document.fonts.ready.then(() => {
            split = new SplitText(titleRef.current, {
                types: "lines",
                linesClass: "line",
            });

            gsap.set(split.lines, { overflow: "hidden" });
        
            // ✅ SCROLL TRIGGER (AGORA CORRETO)
            gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    //markers: true,
                    scrub: 1,
                    start: isMobile ? "-20% 20%" : "-20% 20%",
                    end: "15% 20%",
                }
            })
            .from(split.lines, {
                duration: 1.3,
                opacity: 0,
                yPercent: 100,
                stagger: 0.08,
                ease: "power2.out",
                delay: 0.5
            })
            .from(textRef.current, {
                duration: 1.3,
                opacity: 0,
                y: 40,
            }, "-=0.3")
            .from(divBotao.current, {
                duration: 1.3,
                opacity: 0,
                y: 40,
                scale: 0.9,
            }, "-=0.3")
            .from(contSeta.current, {
                duration: 1.3,
                x: -100,
                opacity: 0,
            }, "-=0.3");

            //  força recalcular posições
            ScrollTrigger.refresh();
        });

    }, el);

    return () => ctx.revert();
}, [el, titleRef, textRef, divBotao, contSeta]);
}