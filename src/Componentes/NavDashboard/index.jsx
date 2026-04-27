import CssNavDash from "./navDashboard.module.css"
import LinkComIcone from "../LinkComIcone"
import logEscuro from "../../assets/logoEscuroPequeno.svg"
import logoClientes from "../../assets/PeopleFill.svg"
import logoProjetos from "../../assets/PersonWorkspace.svg"
import logoMensagem from "../../assets/MenuUp.svg"
import logoConfiguracao from "../../assets/GearFill.svg"
import logoSair from "../../assets/DoorOpenFill.svg"

function NavDash(){
    return(
        <nav className={CssNavDash.navDashboard}>
            <div>
                <img src={logEscuro} alt="logo da pagina" />
            </div>

            <ul className={CssNavDash.ulDashboardNav}>
                <li>
                    <LinkComIcone
                        imgLinkLogo={logoClientes}
                        child="Clientes"
                    />
                    <LinkComIcone
                        imgLinkLogo={logoProjetos}
                        child="Projetos"
                    />
                    <LinkComIcone
                        imgLinkLogo={logoMensagem}
                        child="Mensagens"
                    />
                </li>

                <li>
                    <LinkComIcone
                        imgLinkLogo={logoConfiguracao}
                        child="Configuração"
                    />

                    <LinkComIcone
                        imgLinkLogo={logoSair}
                        child="Sair"
                    />
                </li>
            </ul>
        </nav>
    )
}

export default NavDash