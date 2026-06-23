import { useRef } from 'react';
import CssComoTranformoIdeia from "./comoTranformoIdeia.module.css"
import CardBlackMedio from '../../../../../Componentes/ComponetesCards/CardBlackMedio';
import CardVerde from '../../../../../Componentes/ComponetesCards/CardVerde';
import { useScrollAnimationLeftAndRight } from '../../../../../hooks/useScrollAnimationLeftAndRight';

function ConstruindoExperiencias(){

    const el = useRef();

    useScrollAnimationLeftAndRight(el, ["#item1TrasnformoIdeias","#item2TrasnformoIdeias", "#item3TrasnformoIdeias"])

    return(
        <section className={CssComoTranformoIdeia.secaoComoTransformoIdeias}>
            <div className={CssComoTranformoIdeia.containerTituloDaSecao}>
                <h3>Construindo Experiências <br/>Digitais que Geram Resultados</h3>
                <p>Meu trabalho vai além da programação. É um processo <br/>estratégico que combina os três pilares</p>
            </div>

            <ul className={CssComoTranformoIdeia.ulLista} ref={el}>
                <li className={`${CssComoTranformoIdeia.Lista1}`} id='item1TrasnformoIdeias'>
                    <CardBlackMedio
                        tag={"Construindo Experiências"}
                        titulo={"Manutenção de Código"}
                        texto={"Otimizo e melhoro projetos existentes, deixando seu site mais rápido, estável e fácil de manter."}
                    />
                </li>

                <li className={`${CssComoTranformoIdeia.Lista2}`} id='item2TrasnformoIdeias'>
                    <CardBlackMedio
                        tag={"Construindo Experiências"}
                        titulo={"Desenvolvimento Web"}
                        texto={"Crio landing pages e sistemas web com design responsivo e alta performance para fortalecer sua presença online."}
                    />
                </li>

                <li className={`${CssComoTranformoIdeia.Lista3}`} id='item3TrasnformoIdeias'>
                    <CardVerde
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