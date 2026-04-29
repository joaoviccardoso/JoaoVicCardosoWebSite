import { useEffect, useState } from "react"
import { pegarUser } from "../../../Utils/pegarUser"
import CssMensagem from "./mensagem.module.css"

function Mensagens(){
    const [userAdm, setUserAdm] = useState({})
        
    useEffect(() => {
        setUserAdm(pegarUser())
    }, [])

    return(
        <section className={CssMensagem.sectionMensagensAdm}>
            <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
            <p>Nesta área você pode visualizar e gerenciar todas as suas mensagens. Aqui é possível acompanhar conversas, responder clientes e manter a comunicação organizada. Utilize este espaço para verificar novas mensagens e garantir um atendimento rápido e eficiente.</p>
        </section>
    )
}

export default Mensagens