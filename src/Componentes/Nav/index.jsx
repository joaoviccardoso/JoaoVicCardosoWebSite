import NavCss from './nav.module.css' 
import LinkParaNavegacao from '../Links/link'
import ListaNav from '../ListaNav'

function Nav(){
    return(
            <nav className={NavCss.nav}>
                <div>
                    <img src="src/assets/logoDev.svg" alt="Logo da pagina" />
                </div>

                <ul className={NavCss.ul}>
                    <ListaNav
                        className="navLinkHome"
                    />
                </ul>
            </nav>
    )
}

export default Nav