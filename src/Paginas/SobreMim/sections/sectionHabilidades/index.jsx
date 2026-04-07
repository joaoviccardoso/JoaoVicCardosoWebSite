import CssHabilidades from "./habilidades.module.css"
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function SecaoHabilidades(){
    const containerPai = useRef(null)
    const el = useRef(null);

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            const largura = el.current.scrollWidth;

            tl.to(el.current, {
                x: -(largura - window.innerWidth),
                scrollTrigger:{
                    trigger: containerPai.current,
                    pin: true,
                    start: "top top",
                    end: `+=${largura}`,
                    scrub: 1,
                }

            }, containerPai)

            return () => ctx.revert();
        }, [el])
    })
        
    

    return(
        <section className={CssHabilidades.secaoHabilidades} ref={containerPai}>
            <h3>Habilidades Técnicas</h3>
            <ul className={CssHabilidades.ulListaHabilidades} ref={el}>
                <li className={CssHabilidades.divs1}>1</li>

                <li className={CssHabilidades.divs2}>2</li>

                <li className={CssHabilidades.divs3}>3</li>

                <li className={CssHabilidades.divs1}>4</li>

                <li className={CssHabilidades.divs2}>5</li>

                <li className={CssHabilidades.divs3}>6</li>

                <li className={CssHabilidades.divs1}>7</li>

                <li className={CssHabilidades.divs2}>8</li>

                <li className={CssHabilidades.divs3}>9</li>

                <li className={CssHabilidades.divs1}>10</li>
            </ul>
        </section>
    )
}

export default SecaoHabilidades