import CssCardVerde from "./cardVerde.module.css"

function CardVerde({tag, titulo, texto}){

    return(
        <div className={CssCardVerde.wrapper}>
            <div className={CssCardVerde.cardVerde}>
                <span>
                    {tag}
                </span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default CardVerde