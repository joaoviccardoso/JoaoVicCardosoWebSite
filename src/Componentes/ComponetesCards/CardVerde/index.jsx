import CssCardVerde from "./cardVerde.module.css"

function CardVerde({ref, tag, titulo, texto,}){

    return(
        <div className={CssCardVerde.wrapper} ref={ref}>
            <div className={CssCardVerde.cardVerde}>
                <span>
                    {tag}
                </span>
                <h4>{titulo}</h4>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default CardVerde