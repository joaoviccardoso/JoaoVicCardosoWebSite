import { useEffect, useState } from "react"
import CssSubDashAdm from "./subDashAdm.module.css"
import { pegarUser } from "../../../Utils/pegarUser"

function SubDashAdmCliente(){
    const [userAdm, setUserAdm] = useState({})
    
        useEffect(() => {
            setUserAdm(pegarUser())
        }, [])
    return(
        <section className={CssSubDashAdm}>
            <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
            <p>Esse dashboard mostra tudo relacionado a Clientes.</p>
        </section>
    )
}

export default SubDashAdmCliente