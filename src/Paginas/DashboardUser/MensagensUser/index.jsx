import { useState, useEffect } from "react"
import CssMensagens from "./mensagensUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"

function MensagensUser(){
    const [userUser, setUserUser] = useState({})
        
    useEffect(() => {
        setUserUser(pegarUser())
    }, [])
    
    return(
        <section>
            <h1>Bem vindo user: {`${userUser.nomeCompleto}`}</h1>
            <p>Precisa de ajuda? Nossa equipe está pronta para atender você. Envie sua dúvida, problema ou sugestão e responderemos o mais rápido possível.</p>
        </section>
    )
}

export default MensagensUser