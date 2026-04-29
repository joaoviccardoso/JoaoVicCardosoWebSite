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
                    child="Consultar P.C"
                    to="/admin/DashBoardProduto/ConsultaPC"
                />
                <BotaoDash
                    child="Cadastrar P.C"
                    to="/admin/DashBoardProduto/CadastrarPC"
                />
                <BotaoDash
                    child="Consultar M.P"
                    to="/admin/DashBoardProduto/ConsultaMP"
                />
                <BotaoDash
                    child="Cadastrar M.P"
                    to="/admin/DashBoardProduto/CadastrarMP"
                />
            </div>
        </section>
    )
}

export default SubDashAdmProdutos