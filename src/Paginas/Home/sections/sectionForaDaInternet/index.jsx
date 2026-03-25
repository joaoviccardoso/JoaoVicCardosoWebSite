import CssForaDaInternet from "./foraDaInternet.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"
import personagemComDuvida from '../../../../assets/personagemComDuvida.png'

function ForaDaInternet(){
    return(
        <div className={CssForaDaInternet.containerForaDaInternet}>
            <div className={CssForaDaInternet.containerTexto}>
                <h3>Sua Empresa Não <br/> Existe se Não Aparece <br/> na Internet</h3>
                <p>Nos dias de hoje, 85% dos consumidores pesquisam online antes de fazer uma compra. Se seu negócio não tem uma presença digital profissional, você está perdendo oportunidades todos os dias. Um site não é mais um luxo - é uma necessidade fundamental para qualquer empresa que quer crescer e competir no mercado atual.</p>
                <BotaoCta
                    child="Comece seu projeto hoje"
                    to=""
                />
            </div>
            <img src={personagemComDuvida} alt="personagem com cara de duvida" />
        </div>
    )
}

export default ForaDaInternet