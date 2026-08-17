import { useState, useEffect } from "react"
import CssProjetosUser from "./meusProjetosUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import TabelaProjetos from "../../../Componentes/Tables/TabelaProdutosCliente";
import VamosComecarUmProjeto from "../../../Componentes/VamosComecarUmProjeto";
import InformacaoProjetoCliente from "../../../Componentes/InformacaoProjetoCliente";
import useModalAviso from "../../../hooks/useModalAviso";
import ModalAviso from "../../../Componentes/Modals/ModalAviso";
import MensagemBemVindo from "../../../Componentes/Layouts/MensagemDeBemVindo";

function MeusProjetosUser(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
    const [userUser, setUserUser] = useState({})
    const [produtoUser, setProdutoUser] = useState([])
    const [projetoSelecionado, setProjetoSelecionado] = useState(null)
        
    useEffect(() => {
        setUserUser(pegarUser())
    }, [])

    const token = localStorage.getItem("token")

    useEffect(()=>{

        if (!userUser._id) return;

        async function getProdutosClientes(){
            try{
                const resposta = await fetch(`https://lightslategray-deer-405894.hostingersite.com/produtos/cliente/${userUser._id}`,{
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })

                if (!resposta.ok) {
                    setProdutoUser([]) // ✅ Sem projetos, array vazio
                    return
                }

                const data = await resposta.json()
                setProdutoUser(data)
            } catch(error){
                abrirAviso(`erro para pegar os produtos do cliente ${error}`)
            }
        }
        getProdutosClientes();
    }, [userUser._id])
    
    return(
        <section className={CssProjetosUser.sactionMeusProjetos}>
            <MensagemBemVindo
                titulo={"Bem vindo:"}
                user={userUser.nomeCompleto}
                text={"Aqui você encontra todos os projetos que comprou e também pode acompanhar o status de cada um deles"}
            />

            <div className={CssProjetosUser.filtro}>

            </div>

            <section className={CssProjetosUser.sectionDadosDoProjetoCliente}>
                <div className={CssProjetosUser.tabelaProjetosClientes}>
                    {produtoUser.length == 0 ? <VamosComecarUmProjeto texto={"Vamos começar um projeto?"}/> : <TabelaProjetos projetos={produtoUser} onVerMais={setProjetoSelecionado}/>}
                </div>

                <div className={CssProjetosUser.detalhesProjetos}>
                    {projetoSelecionado ? (
                        <InformacaoProjetoCliente
                            
                        />
                    ) : (
                        <p>Selecione um projeto para ver os detalhes.</p>
                    )}
                </div>
            </section>
            <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} 
            />
        </section>
    )
}

export default MeusProjetosUser