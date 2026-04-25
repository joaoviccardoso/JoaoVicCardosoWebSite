import { useRef } from "react"
import CssSobreMim from "./heroSobreMim.module.css"
import BotaoCta from "../../../../../Componentes/BotaoCta"
import imgPersonagemHero from "../../../../../assets/personagemPaginaSobreMim.png"
import useLayoutEffectHeroPadrao from "../../../../../hooks/useScrollAnimationHeroPadrao"

function SecaoHeroSobreMim(){
    const el = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const divHero = useRef(null)
    const imgHero = useRef(null)
    const divBotao = useRef(null)

    useLayoutEffectHeroPadrao(el,titleRef,textRef,divHero,imgHero,divBotao)
    
    return(
        <section className={CssSobreMim.secaoHeroSobreMim} ref={el}>
            <div className={CssSobreMim.containerTextoSobreMimHero} ref={divHero}>
                <h1 ref={titleRef}>Transformo ideias em produtos digitais.</h1>
                <p ref={textRef}>Projetos bem planejados, design estratégico e desenvolvimento focado em performance e crescimento.</p>
                <div ref={divBotao}>
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to="/Contato"
                    />
                </div>
            </div>

            <img src={imgPersonagemHero} className={CssSobreMim.imgSobreMim} ref={imgHero} alt="um quadrado com as borda verde com um boneco no centro" />
        </section>
    )
}

export default SecaoHeroSobreMim