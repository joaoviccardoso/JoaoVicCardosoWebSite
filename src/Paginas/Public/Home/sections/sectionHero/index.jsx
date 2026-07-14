import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/src/SplitText";
import CssHero from "./hero.module.css"
import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta"
import imagemBonecoJoaoHome from "../../../../../assets/imagemBonecoJoaoHome.png"
import useLayoutEffectHeroPadrao from "../../../../../hooks/useScrollAnimationHeroPadrao";

function Hero(){
    const el = useRef();
    const containerInfo = useRef(null);
    const imgHero = useRef(null)
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const contBtn = useRef(null);

    useLayoutEffectHeroPadrao(el,titleRef,subTitleRef,imgHero, contBtn, containerInfo)

    return(
        <section className={CssHero.sectionHero} ref={el}>

                <div className={CssHero.containerTextoHero} ref={containerInfo}>
                    <div className={CssHero.containerImagemHero} ref={imgHero}>
                        <img id="personagemAnimadoHero" src={imagemBonecoJoaoHome} alt="Personagem Animado do João com um labtop" />
                    </div>
                    
                    <h1 ref={titleRef}>Eu ajudo negócios a crescer <br/><span>na internet</span></h1>
                    <p ref={subTitleRef}>Desenvolvo sites que conectam sua empresa a mais clientes, de <br/> forma simples e profissional.</p>
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