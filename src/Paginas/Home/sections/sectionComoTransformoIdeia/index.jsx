import logoDev from '../../../../assets/logoDev.svg';
import CssComoTranformoIdeia from "./comoTranformoIdeia.module.css"

function ComoTranformoIdeia(){
    return(
        <section className={CssComoTranformoIdeia.secaoComoTransformoIdeias} style={{backgroundImage: `url(${logoDev})`,backgroundSize: '500px' ,backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className={CssComoTranformoIdeia}>
                <h3>Como Transformo Ideias em Resultados Digitais</h3>
                <p>Meu trabalho vai além da programação. É um processo estratégico que combina três pilares:</p>
            </div>

            <ul>
                <li>criar card que vai vir aqui</li>
                <li>criar card que vai vir aqui</li>
                <li>criar card que vai vir aqui</li>
                <li>criar card que vai vir aqui</li>
            </ul>
        </section>
    )
}

export default ComoTranformoIdeia