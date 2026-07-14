import { useRef } from "react"
import CssSobreMim from "./heroSobreMim.module.css"
import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta"
//import useLayoutEffectHeroPadrao from "../../../../../hooks/useScrollAnimationHeroPadrao"

function SecaoHeroSobreMim(){
    const el = useRef(null)
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const divHero = useRef(null)
    const divBotao = useRef(null)

    //useLayoutEffectHeroPadrao(el,titleRef,textRef,divHero,divBotao)
    
    return(
        <section className={CssSobreMim.secaoHeroSobreMim} ref={el}>
            <div className={CssSobreMim.containerTextoSobreMimHero} ref={divHero}>
                <h1 ref={titleRef}>Transformo ideias em <span>experiências digitais</span></h1>
                <p ref={textRef}>Desenvolvedor front-end focado em interfaces modernas, rápidas e bem estruturadas.</p>
                <div ref={divBotao}>
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to="/Contato"
                    />
                </div>
            </div>
        </section>
    )
}

export default SecaoHeroSobreMim