import ListaNav from "../ListaNav"
import CssOffCanva from "./OffCanvas.module.css"

function OffCanvas(){
    return(
        <>
        <div className={`offcanvas offcanvas-start ${CssOffCanva.offcanvas}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className={`offcanvas-header ${CssOffCanva.offcanvasHeader}`}>
                <div>
                    <img src="src/assets/logoDev.svg" alt="Logo da pagina" />
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className={`offcanvas-body ${CssOffCanva.offcanvasBody}`}>
                <div className={CssOffCanva.offcanvasText}>
                    Some text as placeholder. In real life you can have the elements you have chosen.
                </div>

                <div className={`dropdown mt-3 ${CssOffCanva.dropdown}`}>
                    <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
                        <li className={CssOffCanva.navIitem}>
                            <ListaNav
                                className="navLinkHome"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default OffCanvas