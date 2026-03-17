import { Link } from 'react-router-dom'
import NavCss from './nav.module.css' 
import ListaNav from '../ListaNav'

function Nav(){
    return(
        <nav className={`navbar navbar-expand-lg  container-fluid ${NavCss.nav}`}>
                <div>
                    <img src="src/assets/logoDev.svg" alt="Logo da pagina" />
                </div>

                <button className="btn d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                     <img src="src/assets/menuCelular.svg" alt="menu para celular" />
                </button>

                <ul className={NavCss.ul}>
                    <ListaNav
                        className="navLinkHome"
                    />
                </ul>

                <div className={NavCss.loginContainer}>
                    <span className={NavCss.iconContainer}>
                        <img src="src/assets/IconeLogin.svg" alt="Logo Login" />
                    </span>

                    <div className={NavCss.borderWrapper}>
                        <Link to="/login" className={NavCss.linkLogin}>
                            Fazer login
                        </Link>
                    </div>
                </div>
        </nav>
    )
}

export default Nav
