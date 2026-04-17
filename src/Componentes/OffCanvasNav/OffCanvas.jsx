import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ListaNav from "../ListaNav"
import CssOffCanva from "./OffCanvas.module.css"
import BtnLogin from "../BotaoLogin"
import logoDev from "../../assets/logoDev.svg"

function OffCanvas(){
    const location = useLocation()

    useEffect(() => {
        const offcanvasElement = document.getElementById('offcanvasExample')

        if (offcanvasElement) {
            const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement)
            
            if (bsOffcanvas) {
                bsOffcanvas.hide()
            }
        }
    }, [location])
    
    return(
        <>
        <div className={`offcanvas offcanvas-start ${CssOffCanva.offcanvas}`} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className={`offcanvas-header ${CssOffCanva.offcanvasHeader}`}>
                <div>
                    <img src={logoDev} alt="Logo da pagina" />
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className={`offcanvas-body ${CssOffCanva.offcanvasBody}`}>
                <div className={CssOffCanva.offcanvasText}>
                    
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