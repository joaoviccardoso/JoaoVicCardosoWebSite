import { Route, Routes } from "react-router-dom"
import Nav from "./Componentes/Nav"
import Home from "./Paginas/Home"
import Contato from "./Paginas/Contato"
import Servicos from "./Paginas/Servicos"
import SobreMim from "./Paginas/SobreMim"
import Portfolio from "./Paginas/portfolio"
import "./style/fonteEhCores.css"
import Footer from "./Componentes/Footer"

function App() {

  return (
    <>
      <header>
        <Nav/>
      </header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contato" element={<Contato/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Servicos" element={<Servicos/>}/>
        <Route path="/SobreMim" element={<SobreMim/>}/>
      </Routes>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App
