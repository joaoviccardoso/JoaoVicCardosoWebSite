import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import ListaNav from "../ListaNav"
import CssOffCanva from "./OffCanvas.module.css"
import BtnLogin from "../../Buttons/BotaoLogin"
import logoDev from "../../../assets/logoDev.svg"

function OffCanvas(){
    const location = useLocation()

    useEffect(() => {
        const offcanvasElement = document.getElementById('offcanvasExample')

        if (!offcanvasElement) return

        const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement)

        if (!bsOffcanvas) return

        // Aguarda o offcanvas fechar completamente antes de limpar o backdrop
        const handleHidden = () => {
            document.querySelectorAll('.offcanvas-backdrop').forEach(el => el.remove())
            document.body.classList.remove('modal-open', 'offcanvas-open')
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }

        offcanvasElement.addEventListener('hidden.bs.offcanvas', handleHidden)
        bsOffcanvas.hide()

        return () => {
            offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleHidden)
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