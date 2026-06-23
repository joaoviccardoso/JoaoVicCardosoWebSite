import { useState, useEffect } from "react"
import CssProjetosUser from "./meusProjetosUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import TabelaProjetos from "../../../Componentes/Tables/TabelaProdutosCliente";
import useModalAviso from "../../../hooks/useModalAviso";
import ModalAviso from "../../../Componentes/Modals/ModalAviso";

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
            <div>
                <h1>Bem vindo user: {`${userUser.nomeCompleto}`}</h1>
                <p>Aqui você encontra todos os projetos que comprou e também pode acompanhar o status de cada um deles</p>
            </div>
            
            <div className={CssProjetosUser.filtro}>

            </div>

            <section className={CssProjetosUser.sectionDadosDoProjetoCliente}>
                <div className={CssProjetosUser.tabelaProjetosClientes}>
                    {produtoUser.length == 0 ? "Vamos começar um projeto?" : <TabelaProjetos projetos={produtoUser} onVerMais={setProjetoSelecionado}/>}
                </div>

                <div className={CssProjetosUser.detalhesProjetos}>
                    {projetoSelecionado ? (
                        <>
                            <h2>{projetoSelecionado.nomeProjeto}</h2>

                            <p className={CssProjetosUser.paragrafo}><strong>Status:</strong> {projetoSelecionado.status}</p>

                            <p className={CssProjetosUser.paragrafoData}><strong>Data de entrega:</strong> {new Date(projetoSelecionado.dateEntrega).toLocaleDateString("pt-BR")}</p>

                            <p className={CssProjetosUser.paragrafo}><strong>Observação:</strong> {projetoSelecionado.obser}</p>

                            <p className={CssProjetosUser.paragrafo}>
                                <strong>Contrato:</strong>{" "}
                                <a href={projetoSelecionado.linkContrato} target="_blank" rel="noreferrer">
                                    Acessar contrato
                                </a>
                            </p>

                            <p className={CssProjetosUser.paragrafo}>
                                <strong>Demo:</strong>{" "}
                                <a href={projetoSelecionado.linkDemo} target="_blank" rel="noreferrer">
                                    Ver demo
                                </a>
                            </p>
                        </>
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