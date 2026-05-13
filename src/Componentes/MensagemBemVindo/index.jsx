import CssBemVindo from "./bemVindo.module.css"
import ImgLink from "../imgLink"
import imgPaginaEmConstrucao from "../../assets/PaginaEmConstrucao.svg"

function BemVindo({titulo, texto}){
    return(
        <section className={CssBemVindo.sectionBemVindo}>
            <div>
                <div>
                    <h1>{titulo}</h1>
                    <p>{texto}</p>
                    <img src={imgPaginaEmConstrucao} alt="imagem de pessoas construindo uma pagina web" />
                </div>
            </div>
        </section>
    )
}

export default BemVindo