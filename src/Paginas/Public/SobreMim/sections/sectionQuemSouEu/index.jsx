import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CssQuemSouEu from "./quemSouEu.module.css"
import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta"
import imgJoaoDev from "../../../../../assets/fotoDoJoaoDesenvolvedorDaPagina.png"

gsap.registerPlugin(ScrollTrigger)

function SecaoQueSouEu(){
    const wrapperRef = useRef(null)
    const trackRef = useRef(null)

    useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 701px)": function() {
                const track = trackRef.current

                const getScrollAmount = () => {
                    return track.scrollWidth - wrapperRef.current.offsetWidth
                }

                const tween = gsap.to(track, {
                    x: () => -getScrollAmount(),
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapperRef.current,
                        start: "top top",
                        end: () => `+=${getScrollAmount()}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                    }
                })

                return () => tween.scrollTrigger?.kill()
            }
        })

        requestAnimationFrame(() => ScrollTrigger.refresh())
    }, wrapperRef)

    return () => ctx.revert()
}, [])

    return(
        <section>
            <div ref={wrapperRef} className={CssQuemSouEu.secaoQuemSouEuWrapper}>
                <section ref={trackRef} className={CssQuemSouEu.secaoQuemSouEu}>
                    <div className={CssQuemSouEu.containerImagem}>
                        <img className={CssQuemSouEu.imagemQuemSou} src={imgJoaoDev} alt="Foto do desenvolvedor da pagina" />
                    </div>
                    
                    <div className={CssQuemSouEu.divQuemSouEuTexto}>
                        <h3>Construindo quem eu sou</h3>
                        <p>Sou João Victor, desenvolvedor front-end apaixonado por transformar ideias em produtos digitais bem estruturados. Trabalho com foco em performance, organização e crescimento constante.</p>
                        <div>
                            <BotaoCta
                                child="Conheça meus Projetos"
                                to="/Portfolio"
                            />
                        </div>
                        <div className={CssQuemSouEu.containerContinue}>
                            <p>Continue rolando. Isso é só o começo.</p>
                            <img src="" alt="" />
                        </div>
                    </div>

                    <div className={CssQuemSouEu.containerSkills}>

                        {/* Habilidades */}
                        <div className={CssQuemSouEu.boxSkills}>
                            <div className={CssQuemSouEu.containerTitulosSkills}>
                                <h5 className={CssQuemSouEu.tituloSkills}>
                                    Habilidades
                                </h5>

                                <h5 className={CssQuemSouEu.tituloSkills}>
                                    Técnico
                                </h5>
                            </div>
                            

                            <div className={CssQuemSouEu.linhaSkills}>
                                <span>Performance</span>
                                <span>UI Moderna</span>
                                <span>Escalável</span>
                            </div>
                        </div>

                        {/* Mentalidade */}
                        <div className={CssQuemSouEu.boxSkills}>
                            <h4 className={CssQuemSouEu.tituloSkills}>
                                Mentalidade
                            </h4>

                            <div className={CssQuemSouEu.linhaSkills}>
                                <span>Evolução constante</span>
                                <span>Disciplina</span>
                                <span>Curiosidade</span>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </section>
        
    )
}

export default SecaoQueSouEu