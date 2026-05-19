import { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import CssHero from "./heroProdutos.module.css"
import BotaoCta from "../../../../../Componentes/BotaoCta"

function HeroProdutos(){
    const el = useRef(null)
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const divBotao = useRef(null);
    const divHero = useRef(null);

    useLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const ctx = gsap.context(() => {
        let split;

        document.fonts.ready.then(() => {
            split = new SplitText(titleRef.current, {
                types: "words",
            });

            const intro = gsap.timeline({
                onComplete: () => {
                    // 👇 ScrollTrigger só nasce aqui
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: el.current,
                            scrub: 2,
                            start: "top 30%",
                            end: "bottom 50%",
                        }
                    })
                    .to(divHero.current, {
                        y: -150,
                        opacity: .7,
                        scale: 0.95,
                        filter: "blur(5px)"
                    },1)
                }
            });

            intro
                .from(split.words, {
                    duration: 1.3,
                    opacity: 0,
                    y: 30,
                    stagger: 0.08,
                    ease: "power2.out",
                    delay: 0.5
                })
                .from(textRef.current, {
                    y: 30,
                    opacity: 0,
                }, "-=0.8")
                .from(divBotao.current, {
                    y: 30,
                    opacity: 0,
                }, "-=0.8")
            });

        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section  ref={el}>
            <div className={CssHero.secaoHeroProdutos} ref={divHero}>
                <h1 ref={titleRef}>Soluções reais desenvolvidas com <span>tecnologia e estratégia</span></h1>
                <p ref={textRef}>Cada projeto foi pensado para resolver problemas de forma prática,<br/> com código limpo, design funcional e foco em resultado.</p>
                <div ref={divBotao}>
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to="/Contato"
                        className="btnSecaoHeroProdutos"
                    />
                </div> 
            </div>
            
        </section>
    )
}

export default HeroProdutos