import { useRef } from 'react';
import CssComoTranformoIdeia from "./comoTranformoIdeia.module.css"
import CardBlackMedio from '../../../../../Componentes/ComponetesCards/CardBlackMedio';
import CardVerde from '../../../../../Componentes/ComponetesCards/CardVerde';
import { useScrollAnimationLeftAndRight } from '../../../../../hooks/useScrollAnimationLeftAndRight';
import { useScrollAnimationUp2 } from '../../../../../hooks/useScrollAnimationUp2';

//certo
function ConstruindoExperiencias(){
    const el = useRef(null)
    const containerDeAnimacao3 = useRef(null)
    const containerDeAnimacao4 = useRef(null)
    const containerDeAnimacao5 = useRef(null)

    useScrollAnimationLeftAndRight(el, [containerDeAnimacao3, containerDeAnimacao4])
    useScrollAnimationUp2(el, [containerDeAnimacao5])

    return(
        <section className={CssComoTranformoIdeia.secaoComoTransformoIdeias} ref={el}>
            <div className={CssComoTranformoIdeia.containerTituloDaSecao}>
                <h3>Construindo Experiências <br/>que Geram Resultados</h3>
                <p>Meu trabalho vai além da programação. É um processo <br/>estratégico que combina os três pilares</p>
            </div>

            <ul className={CssComoTranformoIdeia.ulLista} >
                <li className={`${CssComoTranformoIdeia.Lista1}`} id='item1TrasnformoIdeias'>
                    <CardBlackMedio
                        ref={containerDeAnimacao3}
                        tag={"Construindo Experiências"}
                        titulo={"Manutenção de Código"}
                        texto={"Otimizo e melhoro projetos existentes, deixando seu site mais rápido, estável e fácil de manter."}
                    />
                </li>

                <li className={`${CssComoTranformoIdeia.Lista2}`} id='item2TrasnformoIdeias'>
                    <CardBlackMedio
                        ref={containerDeAnimacao4}
                        tag={"Construindo Experiências"}
                        titulo={"Design UX/UI"}
                        texto={"Desenvolvo interfaces no Figma que encantam e convertem, focadas na melhor experiência do usuário."}
                    />
                </li>

                <li className={`${CssComoTranformoIdeia.Lista3}`} id='item3TrasnformoIdeias'>
                    <CardVerde
                        ref={containerDeAnimacao5}
                        tag={"Construindo Experiências"}
                        titulo={"Desenvolvimento Web"}
                        texto={"Crio landing pages e sistemas web com design responsivo e alta performance para fortalecer sua presença online."}
                    />
                </li>
            </ul>
        </section>
    )
}

export default ConstruindoExperiencias