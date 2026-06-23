import CssCardVertical from "./cardVertical.module.css"

function CardVertical({tag, titulo, texto}){

    return(
        <div className={CssCardVertical.wrapper}>
            <div className={CssCardVertical.containerTexto}>
                <span>
                    {tag}
                </span>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default CardVertical