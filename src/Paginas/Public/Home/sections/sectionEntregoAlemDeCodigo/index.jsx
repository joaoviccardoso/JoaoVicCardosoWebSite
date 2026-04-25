import { useRef } from 'react';
import { useScrollAnimationUp } from '../../../../../hooks/useScrollAnimationUp';
import CssAlemDeCodigo from './alemDeCodigo.module.css'
import ContainerTexto from '../../../../../Componentes/ContainerTexto'
import bonecoMostrandoOpcoes from '../../../../../assets/BonecoMostrandoOpcoes.png'

function AlemDeCodigo(){

    const el = useRef(null);
    useScrollAnimationUp(el,["#container-1", "#container-2", "#container-3"])
                    
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