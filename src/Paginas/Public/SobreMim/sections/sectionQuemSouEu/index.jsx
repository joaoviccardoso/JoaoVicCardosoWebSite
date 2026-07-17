import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CssQuemSouEu from "./quemSouEu.module.css"
import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta"
import imgJoaoDev from "../../../../../assets/fotoDoJoaoDesenvolvedorDaPagina.png"
//import { useFadeInScroll } from "../../../../../hooks/useScrollAnimationFadeIn"
gsap.registerPlugin(ScrollTrigger)

function SecaoQueSouEu(){
    const wrapperRef = useRef(null)
    const trackRef = useRef(null)
    const contHabili = useRef(null)
    const contMenta = useRef(null)
    const item1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    
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

    //useFadeInScroll(contHabili)

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
                        <div className={CssQuemSouEu.boxSkills} ref={contHabili}>
                            <div className={CssQuemSouEu.containerTitulosSkills}>
                                <h5 className={CssQuemSouEu.tituloSkills1} ref={item1}>
                                    Habilidades
                                </h5>

                                <h5 className={CssQuemSouEu.tituloSkills2} ref={item2}>
                                    Técnico
                                </h5>
                            </div>
                            
                            <div className={CssQuemSouEu.linhaSkills} ref={item3}>
                                <h3>Performance</h3>
                                <h3>UI Moderna</h3>
                                <h3>Escalável</h3>
                            </div>
                        </div>

                        {/* Mentalidade */}
                        <div className={CssQuemSouEu.boxSkills} ref={contMenta}>
                            <div className={CssQuemSouEu.containerTitulosMentalidade}>
                                <h5 className={CssQuemSouEu.tituloMentalidade1}>
                                    Minha
                                </h5>

                                <h5 className={CssQuemSouEu.tituloMentalidade2}>
                                    Mentalidade
                                </h5>
                            </div>

                            <div className={CssQuemSouEu.linhaSkills}>
                                <h3>Evolução constante</h3>
                                <h3>Disciplina</h3>
                                <h3>Curiosidade</h3>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </section>
        
    )
}

export default SecaoQueSouEu