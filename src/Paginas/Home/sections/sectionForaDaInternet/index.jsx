import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CssForaDaInternet from "./foraDaInternet.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"
import personagemComDuvida from '../../../../assets/personagemComDuvida.png'

function ForaDaInternet(){
    const el = useRef();
    const tl = useRef();

    useLayoutEffect(()=> {
        gsap.registerPlugin(ScrollTrigger)
        const isMobile = window.innerWidth <= 480;

        const ctx = gsap.context(()=>{
            tl.current = gsap.timeline({
                scrollTrigger:{
                    trigger: el.current,
                    scrub: 2,
                    start: "top 90%",
                    end: "bottom 70%"
                }
            })
            .fromTo("#tituloSecaoForaDaInternet",{
                opacity:0,
                x: isMobile ? -100 : -160,
                y: isMobile ? 0 : 0,
            }, {
                opacity:1,
                x:0,
                y:0
            })
            .fromTo("#textoSecaoForaDaInternet",{
                opacity:0,
                x: isMobile ? -100 : -160,
                y: isMobile ? 0 : 0,
            }, {
                opacity:1,
                x:0,
                y:0
            })
            .fromTo("#BotaoCtaForaDaInternet",{
                opacity:0,
                x: isMobile ? -100 : -160,
                y: isMobile ? 0 : 0,
            }, {
                opacity:1,
                x:0,
                y:0
            });
        },el)

        return () => ctx.revert();
    },[])
    return(
        <div className={CssForaDaInternet.containerForaDaInternet}>
            <div className={CssForaDaInternet.containerTexto} ref={el}>
                <h3 id='tituloSecaoForaDaInternet'>Sua Empresa Não <br/> Existe se Não Aparece <br/> na Internet</h3>
                <p id='textoSecaoForaDaInternet'>Nos dias de hoje, 85% dos consumidores pesquisam online antes de fazer uma compra. Se seu negócio não tem uma presença digital profissional, você está perdendo oportunidades todos os dias. Um site não é mais um luxo - é uma necessidade fundamental para qualquer empresa que quer crescer e competir no mercado atual.</p>
                <BotaoCta
                    child="Comece seu projeto hoje"
                    to=""
                    id="BotaoCtaForaDaInternet"
                />
            </div>
            <img src={personagemComDuvida} alt="personagem com cara de duvida" />
        </div>
    )
}

export default ForaDaInternet