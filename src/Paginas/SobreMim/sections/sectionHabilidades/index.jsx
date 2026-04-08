import CssHabilidades from "./habilidades.module.css"
import MinhasHabilidades from "../../../../Componentes/MinhasHabilidades";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgHtml from "../../../../assets/html.svg"
import imgCss from "../../../../assets/css.svg"
import imgJs from "../../../../assets/js.svg"
import imgReact from "../../../../assets/react.svg"
import imgNode from "../../../../assets/node.svg"
import imgUiUx from "../../../../assets/ui-ux.svg"
import imgBootstrap from "../../../../assets/bootstrap.svg"
import imgFigma from "../../../../assets/figma.svg"
import imgGitHub from "../../../../assets/github.svg"
import logoDev from '../../../../assets/logoDev.svg';

function SecaoHabilidades(){
    const containerPai = useRef(null)
    const el = useRef(null);

    useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx;

    const images = el.current.querySelectorAll("img");
    let loaded = 0;

    images.forEach((img) => {
        if (img.complete) {
            loaded++;
        } else {
            img.onload = check;
        }
    });

    function check() {
        loaded++;
        if (loaded === images.length) initAnimation();
    }

    if (loaded === images.length) initAnimation();

    function initAnimation() {
        ctx = gsap.context(() => {

            gsap.to(el.current, {
                x: () => -(el.current.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: containerPai.current,
                    pin: true,
                    start: "top top",
                    end: () => `+=${el.current.scrollWidth}`, 
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            });
        });

        ScrollTrigger.refresh();
    }

    return () => {
        if (ctx) ctx.revert();
    };

}, []);
        
    

    return(
        <section className={CssHabilidades.secaoHabilidades} ref={containerPai} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '55%' ,backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat' }}>
            <div>   
                <h3>Habilidades Técnicas</h3>
                <p>Aqui estão as tecnologias que uso para transformar ideias em projetos reais.</p>
            </div>
            
            <ul className={CssHabilidades.ulListaHabilidades} ref={el}>
                <li className={CssHabilidades.divs1}>
                    <MinhasHabilidades
                        img={imgHtml}
                        alt="Imagem da tecnologia HTML"
                    />
                </li>

                <li className={CssHabilidades.divs2}>
                    <MinhasHabilidades
                        img={imgCss}
                        alt="Imagem da tecnologia CSS"
                    />
                </li>

                <li className={CssHabilidades.divs3}>
                    <MinhasHabilidades
                        img={imgJs}
                        alt="Imagem da tecnologia JS"
                    />
                </li>

                <li className={CssHabilidades.divs1}>
                    <MinhasHabilidades
                        img={imgReact}
                        alt="Imagem da tecnologia React"
                    />
                </li>

                <li className={CssHabilidades.divs2}>
                    <MinhasHabilidades
                        img={imgNode}
                        alt="Imagem da tecnologia node"
                    />
                </li>

                <li className={CssHabilidades.divs3}>
                    <MinhasHabilidades
                        img={imgUiUx}
                        alt="Imagem da tecnologia UI e UX"
                    />
                </li>

                <li className={CssHabilidades.divs1}>
                    <MinhasHabilidades
                        img={imgBootstrap}
                        alt="Imagem da tecnologia Bootstrap"
                    />
                </li>

                <li className={CssHabilidades.divs2}>
                    <MinhasHabilidades
                        img={imgFigma}
                        alt="Imagem da tecnologia Figma"
                    />
                </li>

                <li className={CssHabilidades.divs3}>
                    <MinhasHabilidades
                        img={imgGitHub}
                        alt="Imagem da tecnologia GitHub"
                    />
                </li>
            </ul>
        </section>
    )
}

export default SecaoHabilidades