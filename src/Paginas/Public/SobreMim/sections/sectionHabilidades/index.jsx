import CssHabilidades from "./habilidades.module.css"
import MinhasHabilidades from "../../../../../Componentes/ComponetesCards/MinhasHabilidades";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgHtml from "../../../../../assets/html.svg"
import imgCss from "../../../../../assets/css.svg"
import imgJs from "../../../../../assets/js.svg"
import imgReact from "../../../../../assets/react.svg"
import imgNode from "../../../../../assets/node.svg"
import imgUiUx from "../../../../../assets/ui-ux.svg"
import imgBootstrap from "../../../../../assets/bootstrap.svg"
import imgFigma from "../../../../../assets/figma.svg"
import imgGitHub from "../../../../../assets/github.svg"

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
                    y: () => -(el.current.scrollWidth * 0.5), 
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
        <section className={CssHabilidades.secaoHabilidades} ref={containerPai}>
            <div ref={el} className={CssHabilidades.wrapper}>
        
                <ul className={CssHabilidades.ulListaHabilidades}>

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

                    <li className={CssHabilidades.divs4}>
                        <MinhasHabilidades
                            img={imgReact}
                            alt="Imagem da tecnologia React"
                        />
                    </li>

                    <li className={CssHabilidades.divs5}>
                        <MinhasHabilidades
                            img={imgNode}
                            alt="Imagem da tecnologia node"
                        />
                    </li>

                    <li className={CssHabilidades.divs6}>
                        <MinhasHabilidades
                            img={imgUiUx}
                            alt="Imagem da tecnologia UI e UX"
                        />
                    </li>

                    <li className={CssHabilidades.divs7}>
                        <MinhasHabilidades
                            img={imgBootstrap}
                            alt="Imagem da tecnologia Bootstrap"
                        />
                    </li>

                    <li className={CssHabilidades.divs8}>
                        <MinhasHabilidades
                            img={imgFigma}
                            alt="Imagem da tecnologia Figma"
                        />
                    </li>

                    <li className={CssHabilidades.divs9}>
                        <MinhasHabilidades
                            img={imgGitHub}
                            alt="Imagem da tecnologia GitHub"
                        />
                    </li>
                </ul>
            </div>
            
        </section>
    )
}

export default SecaoHabilidades