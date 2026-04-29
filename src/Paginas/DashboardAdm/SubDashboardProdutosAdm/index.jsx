import { useEffect, useState } from "react"
import { pegarUser } from "../../../Utils/pegarUser"
import CssSubDashAdmProdutos from "./subDashAdmProdutos.module.css"
import BotaoDash from "../../../Componentes/BotaoDashBoard"

function SubDashAdmProdutos(){
    const [userAdm, setUserAdm] = useState({})
        
    useEffect(() => {
        setUserAdm(pegarUser())
    }, [])

    return(
        <section className={CssSubDashAdmProdutos.sectionProdutosAdm}>
            <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
            <p>Esse dashboard mostra tudo relacionado a projetos.</p>
            <div>
                <BotaoDash
                    child="Produto Clientes"
                    to="/admin/DashBoardProduto/ProdutoClientes"
                />
                <BotaoDash
                    child="Produto MP"
                    to="/admin/DashBoardProduto/ProdutoMP"
                />
                <BotaoDash
                    child="Cadastrar MP"
                    to="/admin/DashBoardProduto/CadastrarMP"
                />
            </div>
        </section>
    )
}

export default SubDashAdmProdutos