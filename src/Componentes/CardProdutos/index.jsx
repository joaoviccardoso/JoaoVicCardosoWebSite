import  CssCardProdutos from "./cardProdutos.module.css"
import BotaoAction from "../BotaoAction"
function CardProduto ({imgUrl, titulo, descricao,idBtn}){
    return(
        <div className={CssCardProdutos.containerCardProdutos}>
            <img src={imgUrl} alt="Projetos" />
            <div className={CssCardProdutos.containerTextoEhSaber}>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <BotaoAction
                    child="Saber mais"
                    id={idBtn}
                />
            </div>
        </div>
    )
}

export default CardProduto