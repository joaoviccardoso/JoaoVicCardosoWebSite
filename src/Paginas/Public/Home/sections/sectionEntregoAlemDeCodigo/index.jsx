import { useRef } from 'react';
//import { useScrollAnimationUp } from '../../../../../hooks/useScrollAnimationUp';
import CssAlemDeCodigo from './alemDeCodigo.module.css'
import ContainerTexto from '../../../../../Componentes/ContainerTexto'
import CardVertical from '../../../../../Componentes/ComponetesCards/CardVertical';

function AlemDeCodigo(){

    const el = useRef(null);
    //useScrollAnimationUp(el,["#container-1", "#container-2", "#container-3"])
                    
    return(
        <section className={CssAlemDeCodigo.secaoAlemDeCodigo}>
            <div className={CssAlemDeCodigo.containerTexto}>
                <h3>O que eu entrego além de código?</h3>
            </div>

            <div className={CssAlemDeCodigo.containerOqueEuEntrego}>
                <ul className={CssAlemDeCodigo.ulLista} ref={el}>
                    <li id='container-1'>
                        <CardVertical
                            tag={"Como Transformo Ideia"}
                            titulo={"Investimento que cabe no bolso"}
                            texto={"Serviços acessíveis para você ter presença digital com qualidade."}
                        />
                    </li>
                    <li id='container-2'>
                        <CardVertical
                            tag={"Como Transformo Ideia"}
                            titulo={"Foco em quem quer crescer"}
                            texto={"Sites para pequenos e médios negócios, com simplicidade e impacto."}
                        />
                    </li>
                    <li id='container-3'>
                        <CardVertical
                            tag={"Como Transformo Ideia"}
                            titulo={"Atendimento próximo e humano"}
                            texto={"Crio landing pages e sistemas web com design responsivo e alta performance para fortalecer sua presença online"}
                        />
                    </li>
                </ul>
            </div>

            <div className={CssAlemDeCodigo.containerTexto}>
                <p>Você não está apenas contratando um desenvolvedor</p>
            </div>
        </section>
    )
}

export default AlemDeCodigo