import CssLayoutAdm from "./layoutAdm.module.css"
import { Outlet } from "react-router-dom"
import Breadcrumb from "../Componentes/Breadcrumb"
import NavDash from "../Componentes/NavDashboard"

function LayoutAdm() {
    return (
        <section className={CssLayoutAdm.sectionLatoutAdm}>
            <nav>
                <Breadcrumb/>
            </nav>

            <aside>
                <NavDash/>
            </aside>

            <main>
                <Outlet />
            </main>
        </section>
    )
}

export default LayoutAdm