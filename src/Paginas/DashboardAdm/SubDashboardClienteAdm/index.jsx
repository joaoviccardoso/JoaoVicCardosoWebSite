import { useEffect, useState } from "react"
import CssSubDashAdm from "./subDashAdm.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import BotaoDash from "../../../Componentes/Buttons/BotaoDashBoard"
import MensagemBemVindo from "../../../Componentes/Layouts/MensagemDeBemVindo"


function SubDashAdmCliente(){
    const [userAdm, setUserAdm] = useState({})
    
    useEffect(() => {
        setUserAdm(pegarUser())
    }, [])

    return(
        <>
            <MensagemBemVindo
                titulo={"Bem vindo"}
                user={userAdm.nomeCompleto}
                text={"Esse dashboard mostra tudo relacionado a Clientes."}
            />
            <section className={CssSubDashAdm.sectionFuncoesClientes}>
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
        </>
        
    )
}

export default SubDashAdmCliente