import CssBemVindo from "./bemVindo.module.css"
import imgPaginaEmConstrucao from "../../assets/PaginaEmConstrucao.svg"
import imgLogoEscuro from "../../assets/logoEscuroPequeno.svg"

function BemVindo({titulo, texto}){
    return(
        <section className={CssBemVindo.sectionBemVindo}>
            <img src={imgLogoEscuro} alt="Logo da marca em formado escuro" />
            <div>
                <h1>{titulo}</h1>
                <p>{texto}</p>
                <img src={imgPaginaEmConstrucao} alt="imagem de pessoas construindo uma pagina web" />
            </div>
        </section>
    )
}

export default BemVindo