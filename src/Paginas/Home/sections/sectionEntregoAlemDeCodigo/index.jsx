import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CssAlemDeCodigo from './alemDeCodigo.module.css'
import ContainerTexto from '../../../../Componentes/ContainerTexto'
import bonecoMostrandoOpcoes from '../../../../assets/BonecoMostrandoOpcoes.png'

function AlemDeCodigo(){

    const el = useRef();
    const tl = useRef();

    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        const isMobile = window.innerWidth <= 480;

         const ctx = gsap.context(() => {
                    tl.current = gsap.timeline({
                        scrollTrigger:{
                            trigger: el.current,
                            scrub: 2,
                            markers: true,
                            start: "top 70%",
                            end: "bottom 50%"
                        }
                    })
                    .fromTo("#container-1",{
                        opacity:0,
                        x: isMobile ? 0 : 200,
                        y: isMobile ? 80 : 0,
                    }, {
                        opacity:1,
                        x:0,
                        y:0,
                    }, 0)
                    .fromTo("#container-2",{
                        opacity:0,
                        x: isMobile ? 0 : 200,
                        y: isMobile ? 80 : 0,
                    }, {
                        opacity:1,
                        x:0,
                        y:0,
                    }, 1)
                    .fromTo("#container-3",{
                        opacity:0,
                        x: isMobile ? 0 : 200,
                        y: isMobile ? 80 : 0,
                    }, {
                        opacity:1,
                        x:0,
                        y:0,
                    }, 2)
                }, el)
        
                return () => ctx.revert();
        }, [])
                    
    return(
        <section className={CssAlemDeCodigo.secaoAlemDeCodigo}>
            <div className={CssAlemDeCodigo.containerTexto}>
                <h3>O que eu entrego além de código?</h3>
                <p>Você não está apenas contratando um desenvolvedor. Está garantindo:</p>
            </div>

            <div className={CssAlemDeCodigo.containerOqueEuEntrego}>
                <img src={bonecoMostrandoOpcoes} alt="imagem de um personagem mostrandando com a mao oque eu ofereço" />
                <ul className={CssAlemDeCodigo.ulLista} ref={el}>
                    <li id='container-1'>
                        <ContainerTexto
                            titulo="Atendimento próximo e humano"
                            texto="Mais do que entregar sites, ofereço uma parceria verdadeira, ouvindo suas necessidades e transformando ideias em soluções digitais claras e eficientes."
                        />
                    </li>
                    <li id='container-2'>
                        <ContainerTexto
                            titulo="Foco em quem quer crescer"
                            texto="Desenvolvimento de sites pensado para pequenos e médios negócios, ajudando sua marca a conquistar espaço online com simplicidade e impacto."
                        />
                    </li>
                    <li id='container-3'>
                        <ContainerTexto
                            titulo="Investimento que cabe no bolso"
                            texto="Serviços acessíveis para você começar a construir presença digital sem precisar gastar muito — qualidade e profissionalismo ao seu alcance."
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AlemDeCodigo