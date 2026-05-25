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
                    to="/admin/Produto/ConsultaPC"
                />
                <BotaoDash
                    child="Cadastrar P.C"
                    to="/admin/Produto/CadastrarPC"
                />
                <BotaoDash
                    child="Consultar M.P"
                    to="/admin/Produto/EmDensenvolvimento"
                />
                <BotaoDash
                    child="Cadastrar M.P"
                    to="/admin/Produto/CadastrarMP"
                />
            </div>
        </section>
    )
}

export default SubDashAdmProdutos