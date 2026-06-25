import CssCardVerde from "./cardVerde.module.css"

function CardVerde({ref, tag, titulo, texto,}){

    return(
        <div className={CssCardVerde.wrapper} ref={ref}>
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