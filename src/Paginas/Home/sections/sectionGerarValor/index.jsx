import CssGerarValor from "./gerarValor.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"

function GerarValor(){
    return(
        <section className={CssGerarValor.secaoGerarValor}>
            <div className={CssGerarValor.containerTexto}>
                <h3>Veja Como Posso Gerar Valor para Seu Projeto</h3>
                <p>Conheça meus projetos, meu processo de desenvolvimento e quem está por trás das soluções.</p>
            </div>
            
            <ul className={CssGerarValor.ulLista}>
                <li>
                    <BotaoCta
                        child="Projetos"
                        to="/portfolio"
                    />
                </li>

                <li>
                    <BotaoCta
                        child="Projetos"
                        to="/portfolio"
                    />
                </li>

                <li>
                    <BotaoCta
                        child="Projetos"
                        to="/portfolio"
                    />
                </li>
            </ul>
        </section>
    )
}

export default GerarValor