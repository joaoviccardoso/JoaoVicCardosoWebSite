import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/src/SplitText";
import img from "../../../../../assets/iconePaginaWeb.svg"
import CssHeroServico from "./heroServico.module.css"
import BotaoCta from "../../../../../Componentes/Buttons/BotaoCta"
import useLayoutEffectHeroPadrao from "../../../../../hooks/useScrollAnimationHeroPadrao";


function HeroServico(){
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const divBotao = useRef(null);
    const imgHeroServico = useRef(null);
    const divHero = useRef(null);
    const el = useRef(null);

    useLayoutEffectHeroPadrao(el,titleRef,textRef,imgHeroServico,divBotao, el)

    return(
        <section className={CssHeroServico.secaoHeroServico} ref={el}>
            <div className={CssHeroServico.containerTexto} ref={divHero}>
                <h1 ref={titleRef}>Sites e Sistemas Pensados <br/> <span>para Resultado</span></h1>
                <p ref={textRef}>Crio landing pages estratégicas e sistemas web sob medida para transformar ideias em soluções reais e gerar resultados.</p>
                <div className={CssHeroServico.containerBtnCtaHero} ref={divBotao}>
                    <div className={CssHeroServico.containerBtn2}>
                        <BotaoCta
                            child="Comece seu projeto hoje"
                            to="/Contato"
                        />
                    </div>
                </div>
            </div>

            <img src={img} className={CssHeroServico.img} ref={imgHeroServico} alt="imagem ilustrativa de uma pagina web" />
        </section>
    )
}

export default HeroServico