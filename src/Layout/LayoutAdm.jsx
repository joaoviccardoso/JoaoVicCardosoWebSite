import CssLayoutAdm from "./layoutAdm.module.css"
import { Outlet } from "react-router-dom"
import Breadcrumb from "../Componentes/Breadcrumb"
import NavDash from "../Componentes/NavDashboard"
import { useLimparOffCanvas } from "../hooks/useLimparOffCanvas"

function LayoutAdm({acoes}) {
    useLimparOffCanvas()
    return (
        <section className={CssLayoutAdm.sectionLatoutAdm}>
            <nav>
                <Breadcrumb/>
            </nav>

            <aside>
                <NavDash
                    acoes={acoes}
                />
            </aside>

            <main>
                <Outlet />
            </main>
        </section>
    )
}

export default LayoutAdm