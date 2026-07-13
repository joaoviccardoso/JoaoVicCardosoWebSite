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
    const contBtn = useRef(null);

    useLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const ctx = gsap.context(() => {
        let split;

        document.fonts.ready.then(() => {
            split = new SplitText(titleRef.current, {
                types: "words",
            });

            // ✅ INTRO (continua igual)
            const intro = gsap.timeline();

            intro
                .from(split.words, {
                    duration: 1.3,
                    opacity: 0,
                    y: 30,
                    stagger: 0.08,
                    ease: "power2.out",
                    delay: 0.5
                })
                .from(imgHero.current, {
                    x: 50,
                    opacity: 0,
                    rotateY: -90
                }, "-=0.8")
                .from("#subtituloHero", {
                    opacity: 0,
                    y: 20,
                }, "-=0.8")
                .from(contBtn.current, {
                    opacity: 0,
                    scale: 0.9,
                }, "-=0.3");

            // ✅ SCROLL TRIGGER (AGORA CORRETO)
            gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    //markers: true,
                    scrub: 1,
                    start: "top top",
                    end: "30% top",
                }
            })
            .fromTo(imgHero,
                { yPercent: 0, opacity: 1,  filter: "blur(0px)" },
                { yPercent: 0, opacity: 0.7, filter: "blur(5px)" }
            )
            .fromTo("#containerTituloHero",
                { yPercent: 0, opacity: 1, filter: "blur(0px)" },
                { yPercent: 0, opacity: 0.7, filter: "blur(5px)" }
            )
            .fromTo(contBtn,
                { yPercent: 0, opacity: 1, filter: "blur(0px)" },
                { yPercent: 0, opacity: 0.7, filter: "blur(5px)" }
            );

            // 🔥 força recalcular posições
            ScrollTrigger.refresh();
        });

    }, el);

    return () => ctx.revert();
}, []);

    return(
        <section className={CssHero.sectionHero} ref={el}>

                <div className={CssHero.containerTextoHero} id="containerTituloHero">
                    <div className={CssHero.containerImagemHero} ref={imgHero}>
                        <img id="personagemAnimadoHero" src={imagemBonecoJoaoHome} alt="Personagem Animado do João com um labtop" />
                    </div>
                    
                    <h1 ref={titleRef}>Eu ajudo negócios a crescer <br/><span>na internet</span></h1>
                    <p id="subtituloHero">Desenvolvo sites que conectam sua empresa a mais clientes, de <br/> forma simples e profissional.</p>
                    <div className={CssHero.containerBotaoCta} ref={contBtn}>
                        <BotaoCta
                            child="Comece seu projeto hoje"
                            to="Contato"
                        />
                        <BotaoCta
                            child="Conheça meu trabalho"
                            to="Servicos"
                        />
                    </div>
                </div>

                
        </section>
    )
}

export default Hero