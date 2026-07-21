import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import CssHero from "./heroProdutos.module.css"
import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta"
import useScrollAnimationHeroSobreMim from "../../../../../hooks/useScrollAnimationHeroSobreMim";

function HeroProdutos(){
    const el = useRef(null)
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const divBotao = useRef(null);
    const divHero = useRef(null);

    useScrollAnimationHeroSobreMim(el,titleRef,textRef,divBotao,divHero)
    return (
        <section  ref={el}>
            <div className={CssHero.secaoHeroProdutos} ref={divHero}>
                <h1 ref={titleRef}>Soluções reais desenvolvidas com <span>tecnologia e estratégia</span></h1>
                <p ref={textRef}>Cada projeto foi pensado para resolver problemas de forma prática,<br/> com código limpo, design funcional e foco em resultado.</p>
                <div ref={divBotao}>
                    <BotaoCta
                        child="Comece seu projeto hoje"
                        to="/Contato"
                        className="btnSecaoHeroProdutos"
                    />
                </div> 
            </div>
            
        </section>
    )
}

export default HeroProdutos