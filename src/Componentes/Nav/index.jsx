import NavCss from './nav.module.css' 
import LinkParaNavegacao from '../Links/link'

function Nav(){
    return(
            <nav className={NavCss.nav}>
                <div>
                    <img src="src/assets/logoDev.svg" alt="Logo da pagina" />
                </div>

                <ul className={NavCss.ul}>
                    <LinkParaNavegacao
                        child="Home"
                        className={NavCss.navLink}
                    />
                    <LinkParaNavegacao
                        child="Serviços"
                        className={NavCss.navLink}
                    />
                    <LinkParaNavegacao
                        child="Sobre mim"
                        className={NavCss.navLink}
                    />
                    <LinkParaNavegacao
                        child="Portfólio"
                        className={NavCss.navLink}
                    />
                    <LinkParaNavegacao
                        child="Contado"
                        className={NavCss.navLink}
                    />
                </ul>
            </nav>
    )
}

export default Nav