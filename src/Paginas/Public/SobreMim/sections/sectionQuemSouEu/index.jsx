import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CssQuemSouEu from "./quemSouEu.module.css"
import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta"
import imgJoaoDev from "../../../../../assets/fotoDoJoaoDesenvolvedorDaPagina.png"
import imgSetaDireta from "../../../../../assets/setaParaDireita.png"
import { useScrollAnimationTitulosSkills } from "../../../../../hooks/useScrollAnimationTituloSkills"
import { useScrollAnimationTitulosMentalidade } from "../../../../../hooks/useScrollAnimationTitulosMentalidade"
import { useScrollAnimationLetrasSkills } from "../../../../../hooks/useScrollAnimationLetrasSkills"
import { useScrollAnimationLetrasMentalidade } from "../../../../../hooks/useScrollAnimationLetrasMentalidade"
import useLayoutEffectSobreMimTextos from "../../../../../hooks/useScrollAnimationSobreMimTextoPrincipal"

gsap.registerPlugin(ScrollTrigger)

function SecaoQueSouEu(){
    const wrapperRef = useRef(null)
    const trackRef = useRef(null)
    const contTituloSkills = useRef(null)
    const contMenta = useRef(null)
    const item1 = useRef(null)
    const item2 = useRef(null)
    const item3 = useRef(null)
    const item4 = useRef(null)
    const h3Skill1 = useRef(null)
    const h3Skill2 = useRef(null)
    const h3Skill3 = useRef(null)
    const h3Mental1 = useRef(null)
    const h3Mental2 = useRef(null)
    const h3Mental3 = useRef(null)

    //ref titulo e imagem principal
    const contTituloSobreMim = useRef(null)
    const h3TituloSobreMim = useRef(null)
    const pTextoSobreMim = useRef(null)
    const divBotao = useRef(null)
    const contSeta = useRef(null)
    
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

    useScrollAnimationTitulosSkills(contTituloSkills, [item2, item1])
    useScrollAnimationTitulosMentalidade(contMenta, [item3, item4])
    useScrollAnimationLetrasSkills(contTituloSkills, [h3Skill1, h3Skill2, h3Skill3])
    useScrollAnimationLetrasMentalidade(contMenta, [h3Mental1, h3Mental2, h3Mental3])
    useLayoutEffectSobreMimTextos(contTituloSobreMim, h3TituloSobreMim, pTextoSobreMim, divBotao, contSeta)

    return(
        <section>
            <div ref={wrapperRef} className={CssQuemSouEu.secaoQuemSouEuWrapper}>
                <section ref={trackRef} className={CssQuemSouEu.secaoQuemSouEu}>
                    <div className={CssQuemSouEu.containerImagem}>
                        <img className={CssQuemSouEu.imagemQuemSou} src={imgJoaoDev} alt="Foto do desenvolvedor da pagina" />
                    </div>
                    
                    <div className={CssQuemSouEu.divQuemSouEuTexto} ref={contTituloSobreMim}>
                        <h3 ref={h3TituloSobreMim}>Construindo quem eu sou</h3>
                        <p ref={pTextoSobreMim}>Sou João Victor, desenvolvedor front-end apaixonado por transformar ideias em produtos digitais bem estruturados. Trabalho com foco em performance, organização e crescimento constante.</p>
                        <div ref={divBotao}>
                            <BotaoCta
                                child="Conheça meus Projetos"
                                to="/Portfolio"
                            />
                        </div>
                        <div className={CssQuemSouEu.containerContinue} ref={contSeta}>
                            <p>Continue rolando. Isso é só o começo.</p>
                            <img className={CssQuemSouEu.imagemSetaDireta} src={imgSetaDireta} alt="Seta indicativa de direção" />
                        </div>
                    </div>

                    <div className={CssQuemSouEu.containerSkills}>

                        {/* Habilidades */}
                        <div className={CssQuemSouEu.boxSkills} ref={contTituloSkills}>
                            <div className={CssQuemSouEu.containerTitulosSkills} >
                                <h5 className={CssQuemSouEu.tituloSkills1} ref={item1}>
                                    Princípios
                                </h5>

                                <h5 className={CssQuemSouEu.tituloSkills2} ref={item2}>
                                    Técnicos
                                </h5>
                            </div>
                            
                            <div className={CssQuemSouEu.linhaSkills} >
                                <h3 ref={h3Skill1}>Performance sólida</h3>
                                <h3 ref={h3Skill2}>Código limpo</h3>
                                <h3 ref={h3Skill3}>Arquitetura escalável</h3>
                            </div>
                        </div>

                        {/* Mentalidade */}
                        <div className={CssQuemSouEu.boxSkills} ref={contMenta}>
                            <div className={CssQuemSouEu.containerTitulosMentalidade}>
                                <h5 className={CssQuemSouEu.tituloMentalidade1} ref={item3}>
                                    Minha
                                </h5>

                                <h5 className={CssQuemSouEu.tituloMentalidade2} ref={item4}>
                                    Mentalidade
                                </h5>
                            </div>

                            <div className={CssQuemSouEu.linhaSkills}>
                                <h3 ref={h3Mental1}>Evolução constante</h3>
                                <h3 ref={h3Mental2}>Disciplina</h3>
                                <h3 ref={h3Mental3}>Curiosidade</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        
    )
}

export default SecaoQueSouEu