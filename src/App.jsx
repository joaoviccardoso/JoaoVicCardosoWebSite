import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/layout"
import Home from "./Paginas/Home"
import Contato from "./Paginas/Contato"
import Servicos from "./Paginas/Servicos"
import SobreMim from "./Paginas/SobreMim"
import Portfolio from "./Paginas/portfolio"
import Login from "./Paginas/Login"
import Cadastro from "./Paginas/Cadastro"
import PaginaDetalheDosProjetos from "./Paginas/DetalheProjeto"
import "./style/fonteEhCores.css"

function App() {

  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contato" element={<Contato/>}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/Portfolio/:id" element={<PaginaDetalheDosProjetos/>}/>
          <Route path="/Servicos" element={<Servicos/>}/>
          <Route path="/SobreMim" element={<SobreMim/>}/>
        </Route>

        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
    </Routes>
  )
}

export default App
