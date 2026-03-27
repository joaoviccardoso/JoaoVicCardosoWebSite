import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap/src/SplitText";
import CssHero from "./hero.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"
import balaoMensagemHola from "../../../../assets/balaoOlaHome.png"
import imagemBonecoJoaoHome from "../../../../assets/imagemBonecoJoaoHome.png"

function Hero(){
    const titleRef = useRef(null)

    useLayoutEffect(() =>{
        let split;
        const tl = gsap.timeline();         
        gsap.registerPlugin(SplitText)
        document.fonts.ready.then(() => {
            split = new SplitText(titleRef.current, {
            types: "words",
        });

        tl.from(split.words, {
                duration: 1.3,
                opacity: 0,
                y: 30,
                stagger: 0.08,
                ease: "power2.out",
                delay: 0.5
            })
            .from("#containerBalaoOla", {
                x: 50,
                opacity:0,
                rotateY: -90
           }, "-=0.8")
           .from("#personagemAnimadoHero", {
                x: 50,
                opacity:0,
                rotateY: -90
           }, "-=0.8")
            .from("#subtituloHero", {
                opacity: 0,
                y: 20,
            }, "-=0.8")
            .from("#containerBotaoHero", {
                opacity: 0,
                scale: 0.9,
            }, "-=0.3")
           ;
        });

        return
    }, [])

    return(
        <section className={CssHero.sectionHero}>
                <div className={CssHero.containerImagemHero}>
                    <span id="containerBalaoOla">
                        <img src={balaoMensagemHola} alt="Caixa de mensagem Olá! Seja bem-vindo ao meu site."/>
                        <p>Olá! Seja bem-vindo ao meu site.</p>
                    </span>

                    <img id="personagemAnimadoHero" src={imagemBonecoJoaoHome} alt="Personagem Animado do João com um labtop" />
                </div>

                <div className={CssHero.containerTextoHero}>
                    <h1 ref={titleRef}>Eu ajudo negócios a crescer <br/>na internet</h1>
                    <p id="subtituloHero">Desenvolvo sites que conectam sua empresa a mais clientes, de <br/> forma simples e profissional.</p>
                </div>

                <div className={CssHero.containerBotaoCta} id="containerBotaoHero">
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to=""
                    />
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to=""
                    />
                </div>
        </section>
    )
}

export default Hero