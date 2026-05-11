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
import MeusDadosUser from "./Paginas/DashboardUser/MeusDadosUser"
import MeusProjetosUser from "./Paginas/DashboardUser/MeusProjetos"
import MensagensUser from "./Paginas/DashboardUser/MensagensUser"
import HomeDashborardAdm from "./Paginas/DashboardAdm/HomeDashboardAdm"
import SubDashAdmCliente from "./Paginas/DashboardAdm/SubDashboardClienteAdm"
import AcaoEditarCliente from "./Paginas/DashboardAdm/SubDashboardClienteAdm/acoesClientes/editarCliente"
import AcaoConsultaCliente from "./Paginas/DashboardAdm/SubDashboardClienteAdm/acoesClientes/consultaCliente"
import SubDashAdmProdutos from "./Paginas/DashboardAdm/SubDashboardProdutosAdm"
import AcaoCadastroProdutoMp from "./Paginas/DashboardAdm/SubDashboardProdutosAdm/acoesProdutos/cadastroMp"
import AcaoConsultaProdutoMp from "./Paginas/DashboardAdm/SubDashboardProdutosAdm/acoesProdutos/consultaMp"
import AcaoCadastrarProdutoPc from "./Paginas/DashboardAdm/SubDashboardProdutosAdm/acoesProdutos/cadastroPc"
import AcaoConsultaPc from "./Paginas/DashboardAdm/SubDashboardProdutosAdm/acoesProdutos/consultaPc"
import Mensagens from "./Paginas/DashboardAdm/Mensagens"
import LogoHome from "./assets/iconeHome.svg"
import logoClientes from "./assets/PeopleFill.svg"
import logoProjetos from "./assets/PersonWorkspace.svg"
import logoMensagem from "./assets/MenuUp.svg"
import logoConfiguracao from "./assets/GearFill.svg"
import logoSair from "./assets/DoorOpenFill.svg"
import PaginaEmDesenvilvimento from "./Paginas/PaginaEmDesenvolvimento"
import "./style/fonteEhCores.css"

const acoesCliente = [
  { acao: "Dashboard", to: "/dashboard", grupo: "top", icon: LogoHome},
  { acao: "Projetos Contratados", to: "/dashboard/ProjetosContratados", grupo: "top", icon: logoProjetos},
  { acao: "Meus dados", to: "/dashboard/MeusDados", grupo: "top", icon: logoClientes},
  { acao: "Mensagens", to: "/dashboard/Mensagens", grupo: "top", icon: logoMensagem},
  { acao: "Sair", to: "/logout", grupo: "bottom", icon: logoSair},
];

const acoesAdm = [
  // grupo: "top"
  { acao: "Dashboard",  to: "/admin",  grupo: "top",    icon: LogoHome   },
  { acao: "Clientes",  to: "/admin/Cliente",  grupo: "top",    icon: logoClientes   },
  { acao: "Produtos",  to: "/admin/Produto",  grupo: "top",    icon: logoProjetos   },
  { acao: "Mensagens", to: "/admin/Mensagem", grupo: "top",    icon: logoMensagem   },

  // grupo: "bottom"
  { acao: "Configuração", to: "/admin/config", grupo: "bottom", icon: logoConfiguracao },
  { acao: "Sair",         to: "/logout",       grupo: "bottom", icon: logoSair         }
]

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
          <Route path="/EmDensenvolvimento" element={<PaginaEmDesenvilvimento/>}/>
        </Route>

        <Route path="/Login" element={<Login/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>

        <Route 
          element={
            <LayoutAdm
              acoes={acoesCliente}
            />
          }
        >
          <Route path="/dashboard" element={<PrivateRoute><HomeDashborardUser /></PrivateRoute>} />
          <Route path="/dashboard/MeusDados" element={<PrivateRoute><MeusDadosUser /></PrivateRoute>} />
          <Route path="/dashboard/ProjetosContratados" element={<PrivateRoute><MeusProjetosUser /></PrivateRoute>} />
          <Route path="/dashboard/Mensagens" element={<PrivateRoute><MensagensUser /></PrivateRoute>} />
        </Route>

        <Route 
          element={
            <LayoutAdm  
              acoes={acoesAdm}
            />
          }>
          <Route path="/admin" element={<PrivateRoute role="admin"><HomeDashborardAdm /></PrivateRoute>} />
          <Route path="/admin/Cliente" element={<PrivateRoute role="admin"><SubDashAdmCliente /></PrivateRoute>} />
          <Route path="/Cadastro" element={<PrivateRoute role="admin"><Cadastro/></PrivateRoute>} />
          <Route path="/admin/Cliente/ConsultarCliente" element={<PrivateRoute role="admin"><AcaoConsultaCliente /></PrivateRoute>} />
          <Route path="/admin/Cliente/ConsultarCliente/Editar/:id" element={<PrivateRoute role="admin"><AcaoEditarCliente /></PrivateRoute>} />
          <Route path="/admin/Produto" element={<PrivateRoute role="admin"><SubDashAdmProdutos/></PrivateRoute>} />
          <Route path="/admin/Produto/CadastrarMP/" element={<PrivateRoute role="admin"><AcaoCadastroProdutoMp/></PrivateRoute>} />
          <Route path="/admin/Produto/ConsultaMP" element={<PrivateRoute role="admin"><AcaoConsultaProdutoMp/></PrivateRoute>} />
          <Route path="/admin/Produto/CadastrarPC" element={<PrivateRoute role="admin"><AcaoCadastrarProdutoPc/></PrivateRoute>} />
          <Route path="/admin/Produto/ConsultaPC" element={<PrivateRoute role="admin"><AcaoConsultaPc/></PrivateRoute>} />
          <Route path="/admin/Produto/ConsultaPC/Editar" element={<PrivateRoute role="admin"><AcaoCadastrarProdutoPc/></PrivateRoute>} />
          <Route path="/admin/Mensagem" element={<PrivateRoute role="admin"><Mensagens/></PrivateRoute>} />
        </Route >
        
    </Routes>
  )
}

export default App
