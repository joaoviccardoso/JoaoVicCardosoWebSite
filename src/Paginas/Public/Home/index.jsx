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
    const teste = useRef(null)
    const ctxRef = useRef(null)

    useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: true,
    })

    // ✅ Garante que o scroll já foi restaurado pelo browser antes de inicializar
    const init = () => {
        // Double rAF: garante que o browser pintou E restaurou o scroll
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {

                const ctx = gsap.context(() => {

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

                    gsap.fromTo(
                        teste.current,
                        { y: "-100vh" },
                        {
                            y: "-200vh",
                            ease: "none",
                            scrollTrigger: {
                                trigger: secao2Ref.current,
                                start: "top bottom",
                                end: "top top",
                                scrub: 1,
                            },
                        }
                    )

                })

                // ✅ Força recalculo depois de tudo registrado
                ScrollTrigger.refresh()

                // Guarda ctx no ref pra cleanup
                ctxRef.current = ctx
            })
        })
    }

    if (document.readyState === "complete") {
        init()
    } else {
        window.addEventListener("load", init, { once: true })
    }

    return () => {
        ctxRef.current?.revert()
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
                <div className={CssHome.secao1}>
                    <ParticlesBackground position="fixed" zIndex={10} />
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
            <div ref={teste} className={CssHome.teste}>
                <ParticlesBackground position="absolute" zIndex={10} />
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