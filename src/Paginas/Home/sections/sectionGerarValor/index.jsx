import CssGerarValor from "./gerarValor.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"

function GerarValor(){
    return(
        <section className={CssGerarValor.secaoGerarValor}>
            <div className={CssGerarValor.containerTexto}>
                <h3>Veja Como Posso Gerar Valor <br />para Seu Projeto</h3>
                <p>Conheça meus projetos, meu processo de desenvolvimento e quem está <br/> por trás das soluções.</p>
            </div>
            
            <div className={CssGerarValor.btnLista}>
                    <BotaoCta
                        child="Projetos"
                        to="/portfolio"
                    />
                
                    <BotaoCta
                        child="Serviço"
                        to="/Servicos"
                    />
                
                    <BotaoCta
                        child="Sobre Mim"
                        to="/sobreMim"
                    />
            </div>
        </section>
    )
}

export default GerarValor