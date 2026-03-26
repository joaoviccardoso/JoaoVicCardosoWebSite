import logoDev from '../../../../assets/logoDev.svg';
import ContainerTexto from '../../../../Componentes/ContainerTexto';
import CssComoTranformoIdeia from "./comoTranformoIdeia.module.css"

function ComoTranformoIdeia(){
    return(
        <section className={CssComoTranformoIdeia.secaoComoTransformoIdeias}>
            <div className={CssComoTranformoIdeia.containerTituloDaSecao}>
                <h3>Como Transformo Ideias em <br/>Resultados Digitais</h3>
                <p>Meu trabalho vai além da programação. É um processo estratégico <br/>que combina três pilares:</p>
            </div>

            <ul className={CssComoTranformoIdeia.ulLista} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '90%' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <li className={CssComoTranformoIdeia.Lista1}>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>

                <li className={CssComoTranformoIdeia.Lista2}>
                    <ContainerTexto
                        titulo="Design UX/UI"
                        texto="Desenvolvo interfaces intuitivas e atraentes no Figma que encantam seus usuários. Design não é apenas sobre aparência - é sobre criar experiências que convertem e fidelizam seus clientes."                
                    />
                </li>

                <li className={CssComoTranformoIdeia.Lista3}>
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