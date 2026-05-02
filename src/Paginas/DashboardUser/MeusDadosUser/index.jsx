import { useState, useEffect } from "react"
import CssMeusDados from "./meusDadosUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"

function MeusDadosUser(){
    const [userUser, setUserUser] = useState({})
        
    useEffect(() => {
        setUserUser(pegarUser())
    }, [])
    return(
        <section>
            <h1>Bem vindo user: {`${userUser.nomeCompleto}`}</h1>
            <p>Aqui você pode visualizar e atualizar suas informações pessoais. Mantenha seus dados sempre corretos para garantir uma melhor experiência e facilitar o contato quando necessário.</p>
        </section>
    )
}

export default MeusDadosUser