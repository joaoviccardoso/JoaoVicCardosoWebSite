import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import CssSobreMim from "./sobreMim.module.css"
import SecaoHeroSobreMim from "./sections/sectionHeroSobreMim"
import SecaoQueSouEu from "./sections/sectionQuemSouEu"
import SecaoHabilidades from "./sections/sectionHabilidades"

function SobreMim(){
    const el = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(SplitText, ScrollTrigger);
        const isMobile = window.innerWidth <= 780;
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
                    start: isMobile ? "-60% 20%" : "-20% 20%",
                    end: isMobile ? "15% 20%" : "15% 20%",
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
        

            //  força recalcular posições
            ScrollTrigger.refresh();
        });

    }, el);

    return () => ctx.revert();
    }, [el, titleRef, textRef]);

    return(
        <section className={CssSobreMim.secaoPaginaSobreMim}>
            <SecaoHeroSobreMim/>
            <div className={CssSobreMim.divBackGroundVerdeQuemSouEu}>
                <SecaoQueSouEu/>
            </div>
            <div className={CssSobreMim.secaoTituloHabilidades} ref={el}>   
                <h3 ref={titleRef}>Habilidades Técnicas</h3>
                <p ref={textRef}>Aqui estão as tecnologias que uso para transformar ideias em projetos reais.</p>
            </div>
            <SecaoHabilidades/>
        </section>
    )
}

export default SobreMim