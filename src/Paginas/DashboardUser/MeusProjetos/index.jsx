import { useState, useEffect } from "react"
import CssProjetosUser from "./meusProjetosUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"

function MeusProjetosUser(){
    const [userUser, setUserUser] = useState({})
        
    useEffect(() => {
        setUserUser(pegarUser())
    }, [])
    
    return(
        <section>
            <h1>Bem vindo user: {`${userUser.nomeCompleto}`}</h1>
            <p>Aqui você encontra todos os projetos que comprou e também pode acompanhar o status de cada um deles</p>
        </section>
    )
}

export default MeusProjetosUser