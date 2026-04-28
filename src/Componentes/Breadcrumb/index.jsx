import CssBreadcrumb from "./breadcrumb.module.css"
import ImgLink from "../imgLink"
import imgVoltar from "../../assets/voltarPagina.svg"
import menuCelular from '../../assets/menuCelular.svg'

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

            <button className="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <img src={menuCelular} alt="menu para celular" />
            </button>
        </nav>
    )
}

export default Breadcrumb