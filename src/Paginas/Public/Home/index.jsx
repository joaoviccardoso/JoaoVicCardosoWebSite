import { useLayoutEffect, useRef } from "react"
import CssHome from "./home.module.css"
import Hero from "./sections/sectionHero" 
import CardVerde from "../../../Componentes/ComponetesCards/CardVerde"
import CardBlackGrande from "../../../Componentes/ComponetesCards/CardBlackGrande"
import ConstruindoExperiencias from "./sections/ConstruindoExperiencias"
import AlemDeCodigo from "./sections/sectionEntregoAlemDeCodigo"
import GerarValor from "./sections/sectionGerarValor"
import ProntoParaComecar from "./sections/sectionProntoParaComecar"
import ParticlesBackground from "./ParticulasHome"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

function Home(){
    const secao0Ref = useRef(null)
    const secao2Ref = useRef(null)

    useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: true, // ignora resize da barra do browser mobile
    })

    const ctx = gsap.context(() => {

        // Efeito 1: secao0 começa abaixo da viewport e sobe cobrindo o Hero
        gsap.fromTo(
            secao0Ref.current,
            { y: "0vh" },
            {
                y: "-100vh",
                ease: "none",
                scrollTrigger: {
                    trigger: secao0Ref.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: 1,
                },
            }
        )
    })

    return () => {
        ctx.revert()
        // Restaura o padrão ao desmontar (boa prática)
        ScrollTrigger.config({
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
        })
    }
}, [])

    return(
        <section className={CssHome.sectionContainerHero}>
            <div className={CssHome.heroWrapper}>
                <Hero />
            </div>

            <div ref={secao0Ref} className={CssHome.secao0}>
                <ParticlesBackground/>
                <div className={CssHome.secao1}>
                    <CardVerde
                        tag={"Seja encontrado na internet"}
                        titulo={"Presença Digital Não é Luxo É Necessidade."}
                        texto={"Em um mundo onde a primeira impressão é online, não ter um site é como não ter um número de telefone."}
                    />
                    <CardBlackGrande
                        tag={"Comportamento do consumidor"}
                        titulo={"85% dos consumidores pesquisam online antes de comprar."}
                        texto={"Se seu negócio não tem presença digital, você está perdendo oportunidades todos os dias."}
                    />
                    <ConstruindoExperiencias/>
                    <AlemDeCodigo/>
                </div>
                    
            </div>


            <div ref={secao2Ref} className={CssHome.secao2}>
                <GerarValor/>
            </div>
            <div className={CssHome.secao3}>
                <ProntoParaComecar/>
            </div>
        </section>
    )
}

export default Home