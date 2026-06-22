import CssCardProdutos from "./cardProdutos.module.css"
import BotaoLink from "../Buttons/BotaoLink"

function CardProduto ({imgUrl, titulo, descricao, idBtn}){
    return(
        <div className={CssCardProdutos.containerCardProdutos}>
            <img src={imgUrl} alt="Projetos" />
            <div className={CssCardProdutos.overlay}></div>
            <h3 className={CssCardProdutos.tituloPreview}>{titulo}</h3>
            <div className={CssCardProdutos.containerTextoEhSaber}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <BotaoLink
                    child="Saber mais"
                    id={idBtn}
                />
            </div>
        </div>
    )
}

export default CardProduto