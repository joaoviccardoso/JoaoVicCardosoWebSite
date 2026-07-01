import CssCssBlackGrande from "./cardBlackGrande.module.css"
import BotaoLinkA from "../../Buttons/BotaoLinkA/index.jsx"
import { forwardRef } from "react";

const CardBlackGrande = forwardRef(function CardBlackGrande(props, ref) {
    return (
        <div className={CssCssBlackGrande.wrapper} ref={ref}>
            <div className={CssCssBlackGrande.containerTexto}>
                <span>
                    {props.tag}
                </span>
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
                <BotaoLinkA
                    texto="ver mais"
                    to="https://sebrae.com.br/sites/PortalSebrae/ufs/pe/artigos/descubra-por-que-a-presenca-digital-e-tao-importante,de94ec88a5a58710VgnVCM100000d701210aRCRD"
                />
            </div>
        </div>
    );
});


export default CardBlackGrande