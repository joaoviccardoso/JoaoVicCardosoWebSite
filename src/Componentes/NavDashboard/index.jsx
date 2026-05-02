import CssNavDash from "./navDashboard.module.css"
import LinkComIcone from "../LinkComIcone"
import logEscuro from "../../assets/logoEscuroPequeno.svg"


function NavDash({ acoes }){
    const top    = acoes.filter(a => a.grupo === "top");
    const bottom = acoes.filter(a => a.grupo === "bottom");

    return(
        <nav className={CssNavDash.navDashboard}>
            <div>
                <img src={logEscuro} alt="logo da pagina" />
            </div>

            <ul className={CssNavDash.ulDashboardNav}>
                <li>
                    {top.map((item, i) => (
                        <LinkComIcone
                            key={i}
                            to={item.to}
                            imgLinkLogo={item.icon}
                            child={item.acao}
                        />
                    ))}
                </li>

                <li>
                    {bottom.map((item, i) => (
                        <LinkComIcone
                            key={i}
                            to={item.to}
                            imgLinkLogo={item.icon}
                            child={item.acao}
                        />
                    ))}
                </li>
            </ul>
        </nav>
    )
}

export default NavDash