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
                        to="/"
                    />
                    <LinkParaNavegacao
                        child="Serviços"
                        to="Servicos"
                    />
                    <LinkParaNavegacao
                        child="Sobre mim"
                        to="SobreMim"
                    />
                    <LinkParaNavegacao
                        child="Portfólio"
                        to="Portfolio"
                    />
                    <LinkParaNavegacao
                        child="Contado"
                        to="Contato"
                    />
                </ul>
            </nav>
    )
}

export default Nav