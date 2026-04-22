import { Outlet } from "react-router-dom"
import Nav from "../Componentes/Nav"
import Footer from "../Componentes/Footer"
import OffCanvas from "../Componentes/OffCanvasNav/OffCanvas"

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