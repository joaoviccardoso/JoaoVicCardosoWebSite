import NavCss from './nav.module.css' 
import ListaNav from '../ListaNav'
import Image from '../../ImgLogo'
import logo from "../../../assets/logoDev.svg"
import menuCelular from '../../../assets/menuCelular.svg'
import BtnLogin from '../../Buttons/BotaoLogin'

function Nav(){
    return(
        <nav className={`navbar navbar-expand-lg  container-fluid ${NavCss.nav}`}>
                <div>
                    <Image
                        href="https://www.jvcode.tech/"
                        src={logo}
                        alt="Logo da pagina"
                        width={90}
                        height={80}
                        loading="lazy"
                    />
                </div>

                <button className="btn d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <img src={menuCelular} alt="menu para celular" />
                </button>

                <ul className={NavCss.ul}>
                    <ListaNav
                        className="navLinkHome"
                    />
                </ul> 
        </nav>
    )
}

export default Nav
