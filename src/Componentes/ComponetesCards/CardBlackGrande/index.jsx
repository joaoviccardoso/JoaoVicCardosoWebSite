import CssCssBlackGrande from "./cardBlackGrande.module.css"
import BotaoLinkA from "../../Buttons/BotaoLinkA/INDEX.JSX"

function CardBlackGrande({tag, titulo, texto}){

    return(
        <div className={CssCssBlackGrande.wrapper}>
            <div className={CssCssBlackGrande.containerTexto}>
                <span>
                    {tag}
                </span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <BotaoLinkA
                    texto="ver mais"
                    to="https://sebrae.com.br/sites/PortalSebrae/ufs/pe/artigos/descubra-por-que-a-presenca-digital-e-tao-importante,de94ec88a5a58710VgnVCM100000d701210aRCRD"
                />
            </div>
        </div>
    )
}

export default CardBlackGrande