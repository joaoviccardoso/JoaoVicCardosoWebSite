import logoDev from '../../../../assets/logoDev.svg';
import ContainerTexto from '../../../../Componentes/ContainerTexto';
import CssComoTranformoIdeia from "./comoTranformoIdeia.module.css"

function ComoTranformoIdeia(){
    return(
        <section className={CssComoTranformoIdeia.secaoComoTransformoIdeias} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '500px' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className={CssComoTranformoIdeia}>
                <h3>Como Transformo Ideias em Resultados Digitais</h3>
                <p>Meu trabalho vai além da programação. É um processo estratégico que combina três pilares:</p>
            </div>

            <ul>
                <li>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>

                <li>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>

                <li>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>

                <li>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>
            </ul>
        </section>
    )
}

export default ComoTranformoIdeia