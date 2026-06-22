import CssCardFunci from "./cardFuncionalidade.module.css"
import BotaoLink from "../Buttons/BotaoLink"

function CardFuncionalidade ({imgUrl, titulo, descricao}){
    return(
        <div className={CssCardFunci.containerCardProdutos}>
            <img src={imgUrl} className={CssCardFunci.img} alt="Projetos" />
            <div className={CssCardFunci.containerTextoEhSaber}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default CardFuncionalidade