import CssBreadcrumb from "./breadcrumb.module.css"
import ImgLink from "../imgLink"
import imgVoltar from "../../assets/voltarPagina.svg"

function Breadcrumb(){
    return(
        <nav aria-label="breadcrumb" className={CssBreadcrumb.breadcrumbNav}>
            <ImgLink
                srcImg={imgVoltar}
                to="/"
            />
            <ol className={CssBreadcrumb.breadcrumb}>
                <li className={CssBreadcrumb.breadcrumbItem}>Home</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb