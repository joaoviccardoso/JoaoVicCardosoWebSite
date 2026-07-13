import { useRef, useState } from 'react';
import CssAlemDeCodigo from './alemDeCodigo.module.css'
import CardVertical from '../../../../../Componentes/ComponetesCards/CardVertical';
import { useScrollAnimationUp2 } from '../../../../../hooks/useScrollAnimationUp2';
import { useScrollAnimationUpAlemDeCodigo } from '../../../../../hooks/useScrollAnimationPaginaAlemDeCodigo';

function AlemDeCodigo(){
    const [aberto, setAberto] = useState(false);
    const cont1 = useRef(null)
    const cont2 = useRef(null)
    const cont3 = useRef(null)
    const el = useRef(null);

    useScrollAnimationUpAlemDeCodigo(el, [cont1, cont2, cont3])

    function toggleCards() {
        setAberto(prev => !prev);
    }       

    return(
        <section className={CssAlemDeCodigo.secaoAlemDeCodigo}>
            <div className={CssAlemDeCodigo.containerTexto}>
                <h3>O que eu entrego além de código?</h3>
            </div>

            <div className={CssAlemDeCodigo.containerOqueEuEntrego}>
                <ul className={`${CssAlemDeCodigo.ulLista} ${aberto ? CssAlemDeCodigo.ativo : ''}`} ref={el} onClick={toggleCards}>
                    <li id='container-1'>
                        <div className={CssAlemDeCodigo.animWrapper} ref={cont1}>
                            <CardVertical
                                tag={"Como Transformo Ideia"}
                                titulo={"Investimento que cabe no bolso"}
                                texto={"Serviços acessíveis para você ter presença digital com qualidade."}
                            />
                        </div>
                    </li>
                    <li id='container-2'>
                        <div className={CssAlemDeCodigo.animWrapper} ref={cont2}>
                            <CardVertical
                                tag={"Como Transformo Ideia"}
                                titulo={"Foco em quem quer crescer"}
                                texto={"Sites para pequenos e médios negócios, com simplicidade e impacto."}
                            />
                        </div>
                    </li>
                    <li id='container-3'>
                        <div className={CssAlemDeCodigo.animWrapper} ref={cont3}>
                            <CardVertical
                                tag={"Como Transformo Ideia"}
                                titulo={"Atendimento próximo"}
                                texto={"Crio landing pages e sistemas web com design responsivo e alta performance para fortalecer sua presença online"}
                            />
                        </div>
                    </li>
                </ul>
            </div>

            <div className={CssAlemDeCodigo.containerTexto}>
                <p>Clique nos cards para saber mais.</p>
                <p>Você não está apenas contratando apenas um desenvolvedor.</p>
            </div>
        </section>
    )
}

export default AlemDeCodigo