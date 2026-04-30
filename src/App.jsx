import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/layout"
import LayoutAdm from "./Layout/LayoutAdm"
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
import SubDashAdmCliente from "./Paginas/DashboardAdm/SubDashboardClienteAdm"
import AcaoCadastraCliente from "./Paginas/DashboardAdm/SubDashboardClienteAdm/acoesClientes/cadastraCliente"
import AcaoConsultaCliente from "./Paginas/DashboardAdm/SubDashboardClienteAdm/acoesClientes/consultaCliente"
import SubDashAdmProdutos from "./Paginas/DashboardAdm/SubDashboardProdutosAdm"
import AcaoCadastroProdutoMp from "./Paginas/DashboardAdm/SubDashboardProdutosAdm/acoesProdutos/cadastroMp"
import AcaoConsultaProdutoMp from "./Paginas/DashboardAdm/SubDashboardProdutosAdm/acoesProdutos/consultaMp"
import AcaoCadastrarProdutoPc from "./Paginas/DashboardAdm/SubDashboardProdutosAdm/acoesProdutos/cadastroPc"
import AcaoConsultaPc from "./Paginas/DashboardAdm/SubDashboardProdutosAdm/acoesProdutos/consultaPc"
import Mensagens from "./Paginas/DashboardAdm/Mensagens"
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

        <Route element={<LayoutAdm/>}>
          <Route path="/dashboard" element={<PrivateRoute><HomeDashborardUser /></PrivateRoute>} />
        </Route>

        <Route element={<LayoutAdm/>}>
          <Route path="/admin" element={<PrivateRoute role="admin"><HomeDashborardAdm /></PrivateRoute>} />
          <Route path="/admin/Cliente" element={<PrivateRoute role="admin"><SubDashAdmCliente /></PrivateRoute>} />
          <Route path="/admin/Cliente/CadastrarCliente" element={<PrivateRoute role="admin"><AcaoCadastraCliente /></PrivateRoute>} />
          <Route path="/admin/Cliente/ConsultarCliente" element={<PrivateRoute role="admin"><AcaoConsultaCliente /></PrivateRoute>} />
          <Route path="/admin/Produto" element={<PrivateRoute role="admin"><SubDashAdmProdutos/></PrivateRoute>} />
          <Route path="/admin/Produto/CadastrarMP" element={<PrivateRoute role="admin"><AcaoCadastroProdutoMp/></PrivateRoute>} />
          <Route path="/admin/Produto/ConsultaMP" element={<PrivateRoute role="admin"><AcaoConsultaProdutoMp/></PrivateRoute>} />
          <Route path="/admin/Produto/CadastrarPC" element={<PrivateRoute role="admin"><AcaoCadastrarProdutoPc/></PrivateRoute>} />
          <Route path="/admin/Produto/ConsultaPC" element={<PrivateRoute role="admin"><AcaoConsultaPc/></PrivateRoute>} />
          <Route path="/admin/Mensagem" element={<PrivateRoute role="admin"><Mensagens/></PrivateRoute>} />
        </Route >
        
    </Routes>
  )
}

export default App
