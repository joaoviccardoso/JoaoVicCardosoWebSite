import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/src/SplitText";
import img from "../../../../../assets/iconePaginaWeb.svg"
import CssHeroServico from "./heroServico.module.css"
import BotaoCta from "../../../../../Componentes/BotaoCta"

function HeroServico(){
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const divBotao = useRef(null);
    const imgHeroServico = useRef(null);
    const divHero = useRef(null);
    const el = useRef(null);

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
                            start: "top 90%",
                            end: "bottom 50%",
                        }
                    })
                    .to(divHero.current, {
                        y: -150,
                        opacity: .7,
                        scale: 0.95,
                        filter: "blur(5px)"
                    },1)
                    .to(imgHeroServico.current, {
                        y: -150,
                        opacity: .7,
                        scale: 0.95,
                        filter: "blur(5px)"
                    }, 1)
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
                .from(imgHeroServico.current, {
                    opacity: 0,
                    x: 40,
                }, "-=0.3")
            });

        }, el);

        return () => ctx.revert();
    }, []);

    return(
        <section className={CssHeroServico.secaoHeroServico} ref={el}>
            <div className={CssHeroServico.containerTexto} ref={divHero}>
                <h1 ref={titleRef}>Sites e Sistemas Pensados <br/> para Resultado</h1>
                <p ref={textRef}>Crio landing pages estratégicas e sistemas web sob medida para transformar ideias em soluções reais e gerar resultados.</p>
                <div className={CssHeroServico.containerBtnCtaHero} ref={divBotao}>
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to="/Contato"
                    />
                    <BotaoCta
                        child="Ver Meus Projetos"
                        to="/Portfolio"
                    />
                </div>
            </div>

            <img src={img} className={CssHeroServico.img} ref={imgHeroServico} alt="imagem ilustrativa de uma pagina web" />
        </section>
    )
}

export default HeroServico