import CssCardMedio from "./cardBlackMedio.module.css"

function CardBlackMedio({tag, titulo, texto}){

    return(
        <div className={CssCardMedio.wrapper}>
            <div className={CssCardMedio.containerTexto}>
                <span>
                    {tag}
                </span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default CardBlackMedio