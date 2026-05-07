import { useEffect, useState } from "react"
import CssAcao2 from "./consultaCliente.module.css"
import TabelaConsultaCliente from "../../../../../Componentes/TabelaConsultaCliente"
import { jwtDecode } from "jwt-decode"

function AcaoConsultaCliente(){
    const [userAdm, setUserAdm] = useState({})
    const [allCliente, setCliente] = useState([])

    useEffect(() => {
            const token = localStorage.getItem("token");
            if (!token) return;
            
            // pega só o necessário do token
            const decoded = jwtDecode(token);
            setUserAdm(decoded); // decoded tem { id, role }
        }, []);

    useEffect(()=>{
        async function getAllCliente(){
            const token = localStorage.getItem("token");
            try{
                const resposta = await fetch(`http://localhost:3000/auth/users`,{
                    method: "GET",
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}` // envia o token
                    },
                })
                
                if (!resposta.ok) {
                    setCliente([]) // Sem projetos, array vazio
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
        <section className={CssAcao2.sectionConsultarCliente}>
            <div className={CssAcao2.divTextoEhTitulo}>
                <h1>Bem vindo, {`${userAdm.role}`}</h1>
                <p>Nesta área você pode visualizar, cadastrar e gerenciar todos os clientes do sistema. Utilize os filtros e a busca para encontrar clientes rapidamente e manter as informações sempre organizadas.</p>
            </div>
            
            <div className={CssAcao2.divFiltroCliente}>

            </div>

            <div className={CssAcao2.divTabelaClientes}>
                <TabelaConsultaCliente
                    clientes={allCliente}
                />
            </div>
        </section>
    )
}

export default AcaoConsultaCliente