import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/layout"
import Home from "./Paginas/Public/Home"
import Contato from "./Paginas/Public/Contato"
import Servicos from "./Paginas/Public/Servicos"
import SobreMim from "./Paginas/Public/SobreMim"
import Portfolio from "./Paginas/Public/portfolio"
import Login from "./Paginas/Autenticacao/Login"
import Cadastro from "./Paginas/Autenticacao/Cadastro"
import PaginaDetalheDosProjetos from "./Paginas/Public/DetalheProjeto"
import PrivateRoute from "./routes/PrivateRoute"
import HomeDashborardUser from "./Paginas/DashboardUser/HomeDashboardUser"
import HomeDashborardAdm from "./Paginas/DashboardAdm/HomeDashboardAdm"
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

        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <HomeDashborardUser />
            </PrivateRoute>
          } 
        />

        {/* 🔐 DASHBOARD ADMIN */}
        <Route 
          path="/admin" 
          element={
            <PrivateRoute role="admin">
              <HomeDashborardAdm />
            </PrivateRoute>
          } 
        />
    </Routes>
  )
}

export default App
