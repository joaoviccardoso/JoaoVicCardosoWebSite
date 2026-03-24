import CssAlemDeCodigo from './alemDeCodigo.module.css'
import ContainerTexto from '../../../../Componentes/ContainerTexto'

function AlemDeCodigo(){
    return(
        <section className={CssAlemDeCodigo.secaoAlemDeCodigo}>
            <div className={CssAlemDeCodigo.containerTexto}>
                <h3>O que eu entrego além de código?</h3>
                <p>Você não está apenas contratando um desenvolvedor. Está garantindo:</p>
            </div>

            <div className={CssAlemDeCodigo.containerOqueEuEntrego}>
                <img src="./src\assets\BonecoMostrandoOpcoes.png" alt="" />
                <ul className={CssAlemDeCodigo.ulLista}>
                    <li>
                        <ContainerTexto
                            titulo="Atendimento próximo e humano"
                            texto="Mais do que entregar sites, ofereço uma parceria verdadeira, ouvindo suas necessidades e transformando ideias em soluções digitais claras e eficientes."
                        />
                    </li>
                    <li>
                        <ContainerTexto
                            titulo="Foco em quem quer crescer"
                            texto="Desenvolvimento de sites pensado para pequenos e médios negócios, ajudando sua marca a conquistar espaço online com simplicidade e impacto."
                        />
                    </li>
                    <li>
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