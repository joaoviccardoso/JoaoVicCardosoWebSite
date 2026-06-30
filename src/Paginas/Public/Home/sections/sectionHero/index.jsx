import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/src/SplitText";
import CssHero from "./hero.module.css"
import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta"
import imagemBonecoJoaoHome from "../../../../../assets/imagemBonecoJoaoHome.png"

function Hero(){
    const titleRef = useRef(null);
    const el = useRef();
    const imgHero = useRef(null)

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
                            start: "top 80%",
                            end: "bottom 30%",
                        }
                    })
                    .to(imgHero.current, {
                        y: 150,
                        opacity: .7,
                        scale: 0.95,
                        filter: "blur(5px)"
                    },1)
                    .to("#containerTituloHero", {
                        y: 150,
                        opacity: .7,
                        scale: 0.95,
                        filter: "blur(5px)"
                    }, 1)
                    .to("#containerBotaoHero", {
                        y: 150,
                        opacity: .7,
                        scale: 0.95,
                        filter: "blur(5px)"
                    }, 1);
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
                .from("#containerBalaoOla", {
                    x: 50,
                    opacity: 0,
                    rotateY: -90
                }, "-=0.8")
                .from("#personagemAnimadoHero", {
                    x: 50,
                    opacity: 0,
                    rotateY: -90
                }, "-=0.8")
                .from("#subtituloHero", {
                    opacity: 0,
                    y: 20,
                }, "-=0.8")
                .from("#containerBotaoHero", {
                    opacity: 0,
                    scale: 0.9,
                }, "-=0.3");
        });

    }, el);

    return () => ctx.revert();
}, []);

    return(
        <section className={CssHero.sectionHero} ref={el}>
                <div className={CssHero.containerImagemHero} id="containerImgHero" ref={imgHero}>
                    <img id="personagemAnimadoHero" src={imagemBonecoJoaoHome} alt="Personagem Animado do João com um labtop" />
                </div>

                <div className={CssHero.containerTextoHero} id="containerTituloHero">
                    <h1 ref={titleRef}>Eu ajudo negócios a crescer <br/><span>na internet</span></h1>
                    <p id="subtituloHero">Desenvolvo sites que conectam sua empresa a mais clientes, de <br/> forma simples e profissional.</p>
                </div>

                <div className={CssHero.containerBotaoCta} id="containerBotaoHero">
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to="Contato"
                    />
                    <BotaoCta
                        child="Conheça meu trabalho"
                        to="Servicos"
                    />
                </div>
        </section>
    )
}

export default Hero