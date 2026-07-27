import { Outlet } from "react-router-dom"
import Nav from "../Componentes/Layouts/Nav"
import Footer from "../Componentes/Layouts/Footer"
import OffCanvas from "../Componentes/Layouts/OffCanvasNav/OffCanvas"

function Layout() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>

      <OffCanvas />

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout