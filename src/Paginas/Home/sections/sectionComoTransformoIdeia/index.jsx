import logoDev from '../../../../assets/logoDev.svg';
import ContainerTexto from '../../../../Componentes/ContainerTexto';
import CssComoTranformoIdeia from "./comoTranformoIdeia.module.css"

function ComoTranformoIdeia(){
    return(
        <section className={CssComoTranformoIdeia.secaoComoTransformoIdeias} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '90%' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className={CssComoTranformoIdeia.containerTituloDaSecao}>
                <h3>Como Transformo Ideias em <br/>Resultados Digitais</h3>
                <p>Meu trabalho vai além da programação. É um processo estratégico <br/>que combina três pilares:</p>
            </div>

            <ul className={CssComoTranformoIdeia.ulLista}>
                <li className={CssComoTranformoIdeia.Lista1}>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>

                <li className={CssComoTranformoIdeia.Lista2}>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>

                <li className={CssComoTranformoIdeia.Lista3}>
                    <ContainerTexto
                        titulo="Desenvolvimento Web"
                        texto="Crio landing pages impactantes e sistemas web robustos, combinando tecnologia de ponta com designs responsivos que funcionam perfeitamente em todos os dispositivos. Sua presença online com performance excepcional."                
                    />
                </li>

                <li className={CssComoTranformoIdeia.Lista4}>
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