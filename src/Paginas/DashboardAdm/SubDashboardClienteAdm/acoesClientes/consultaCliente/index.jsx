import { useEffect, useState } from "react"
import { pegarUser } from "../../../../../Utils/pegarUser"
import CssAcao2 from "./consultaCliente.module.css"
import TabelaConsultaCliente from "../../../../../Componentes/TabelaConsultaCliente"

function AcaoConsultaCliente(){
    const [userAdm, setUserAdm] = useState({})
    const [allCliente, setCliente] = useState([])
    useEffect(()=>{
        setUserAdm(pegarUser())
    },[])

    useEffect(()=>{
        async function getAllCliente(){
            try{
                const resposta = await fetch(`http://localhost:3000/auth/users`)

                if (!resposta.ok) {
                    setCliente([]) // ✅ Sem projetos, array vazio
                    return
                }

                const data = await resposta.json()
                setCliente(data)
            } catch(error){
                alert(`erro para pegar os produtos do cliente ${error}`)
            }
        }

        getAllCliente();
    },[])

    return(
        <section>
            <div>
                <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
                <p>Nesta área você pode visualizar, cadastrar e gerenciar todos os clientes do sistema. Utilize os filtros e a busca para encontrar clientes rapidamente e manter as informações sempre organizadas.</p>
            </div>
            
            <div>

            </div>

            <div>
                {console.log(allCliente)}
                <TabelaConsultaCliente
                    clientes={allCliente}
                />
            </div>
        </section>
    )
}

export default AcaoConsultaCliente