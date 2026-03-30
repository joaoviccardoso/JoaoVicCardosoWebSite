import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoDev from '../../../../assets/logoDev.svg';
import ContainerTexto from '../../../../Componentes/ContainerTexto';
import CssComoTranformoIdeia from "./comoTranformoIdeia.module.css"

function ComoTranformoIdeia(){

    const el = useRef();
    const tl = useRef();

    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger)

        const isMobile = window.innerWidth <= 480;

        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                scrollTrigger:{
                    trigger: `.${CssComoTranformoIdeia.modalItens}`,
                    scrub: 2,
                    start: "top 62%",
                    end: "bottom 20%"
                }
            })
            .fromTo(`.${CssComoTranformoIdeia.Lista1}`,{
                opacity:0,
                x: isMobile ? -100 : -300,
                y: isMobile ? 0 : 0,
            }, {
                opacity:1,
                x:0,
                y:0,
            })
            .fromTo(`.${CssComoTranformoIdeia.Lista2}`,{
                opacity:0,
                x: isMobile ? 100 : 300,
                y: isMobile ? 0 : 0,
            }, {
                opacity:1,
                x:0,
                y:0
            })
            .fromTo(`.${CssComoTranformoIdeia.Lista3}`,{
                opacity:0,
                x: isMobile ? -100 : -300,
                y: isMobile ? 0 : 0,
            }, {
                opacity:1,
                x:0,
                y:0
            })
        }, el)

        return () => ctx.revert();
    }, [])

    return(
        <section className={CssComoTranformoIdeia.secaoComoTransformoIdeias}>
            <div className={CssComoTranformoIdeia.containerTituloDaSecao}>
                <h3>Como Transformo Ideias em <br/>Resultados Digitais</h3>
                <p>Meu trabalho vai além da programação. É um processo estratégico <br/>que combina três pilares:</p>
            </div>

            <ul className={CssComoTranformoIdeia.ulLista} ref={el} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '90%' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <li className={`${CssComoTranformoIdeia.Lista1} ${CssComoTranformoIdeia.modalItens}`}>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>

                <li className={`${CssComoTranformoIdeia.Lista2} ${CssComoTranformoIdeia.modalItens}`}>
                    <ContainerTexto
                        titulo="Design UX/UI"
                        texto="Desenvolvo interfaces intuitivas e atraentes no Figma que encantam seus usuários. Design não é apenas sobre aparência - é sobre criar experiências que convertem e fidelizam seus clientes."                
                    />
                </li>

                <li className={`${CssComoTranformoIdeia.Lista3} ${CssComoTranformoIdeia.modalItens}`}>
                    <ContainerTexto
                        titulo="Manutenção de Código"
                        texto="Realizo correções, otimizações e melhorias em projetos existentes, garantindo que o código esteja limpo, atualizado e com o melhor desempenho possível. Deixo seu site mais estável, rápido e fácil de manter, sem comprometer o design ou as funcionalidades originais."                
                    />
                </li>
            </ul>
        </section>
    )
}

export default ComoTranformoIdeia