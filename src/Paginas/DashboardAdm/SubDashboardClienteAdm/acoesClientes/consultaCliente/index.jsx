import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import { getAllUsuarios } from "../../../../../services/authServices"
import CssAcao2 from "./consultaCliente.module.css"
import TabelaConsultaCliente from "../../../../../Componentes/TabelaConsultaCliente"
import useModalAviso from "../../../../../hooks/useModalAviso"
import ModalAviso from "../../../../../Componentes/ModalAviso"


function AcaoConsultaCliente(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
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
        async function fetchClientes(){
            try{
                const data = await getAllUsuarios()
                setCliente(data)
            } catch(error){
                abrirAviso(`erro para pegar os produtos do cliente ${error}`)
            }
        }

        fetchClientes();
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

            <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} 
            />
        </section>
    )
}

export default AcaoConsultaCliente