import { useRef } from 'react';
import CssForaDaInternet from "./foraDaInternet.module.css"
import BotaoCta from "../../../../../Componentes/BotaoCta"
import personagemComDuvida from '../../../../../assets/personagemComDuvida.png'
import { useScrollAnimation } from '../../../../../hooks/useScrollAnimation';

function ForaDaInternet(){
    const el = useRef();
    
    useScrollAnimation(el, ["#tituloSecaoForaDaInternet", "#textoSecaoForaDaInternet", "#BotaoCtaForaDaInternet"])

    return(
        <div className={CssForaDaInternet.containerForaDaInternet}>
            <div className={CssForaDaInternet.containerTexto} ref={el}>
                <h3 id='tituloSecaoForaDaInternet'>Sua Empresa Não <br/> Existe se Não Aparece <br/> na Internet</h3>
                <p id='textoSecaoForaDaInternet'>Nos dias de hoje, 85% dos consumidores pesquisam online antes de fazer uma compra. Se seu negócio não tem uma presença digital profissional, você está perdendo oportunidades todos os dias. Um site não é mais um luxo - é uma necessidade fundamental para qualquer empresa que quer crescer e competir no mercado atual.</p>
                <BotaoCta
                    child="Comece seu projeto hoje"
                    to="https://sebrae.com.br/sites/PortalSebrae/ufs/pe/artigos/descubra-por-que-a-presenca-digital-e-tao-importante,de94ec88a5a58710VgnVCM100000d701210aRCRD"
                    id="BotaoCtaForaDaInternet"
                />
            </div>
            <img src={personagemComDuvida} alt="personagem com cara de duvida" />
        </div>
    )
}

export default ForaDaInternet