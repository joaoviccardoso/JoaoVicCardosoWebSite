import { useEffect, useState } from "react"
import CssSubDashAdm from "./subDashAdm.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import BotaoDash from "../../../Componentes/BotaoDashBoard"

function SubDashAdmCliente(){
    const [userAdm, setUserAdm] = useState({})
    
    useEffect(() => {
        setUserAdm(pegarUser())
    }, [])

    return(
        <section className={CssSubDashAdm.sectionFuncoesClientes}>
            <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
            <p>Esse dashboard mostra tudo relacionado a Clientes.</p>
            <div>
                <BotaoDash
                    child="Consultar Clientes"
                    to="/admin/Cliente/ConsultarCliente"
                />
                <BotaoDash
                    child="Cadastrar Clientes"
                    to="/Cadastro"
                />
            </div>
        </section>
    )
}

export default SubDashAdmCliente