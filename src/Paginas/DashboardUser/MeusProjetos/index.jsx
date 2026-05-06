import { useState, useEffect } from "react"
import CssProjetosUser from "./meusProjetosUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import TabelaProjetos from "../../../Componentes/TabelaProjetos"

function MeusProjetosUser(){
    const [userUser, setUserUser] = useState({})
    const [produtoUser, setProdutoUser] = useState([])
    const [projetoSelecionado, setProjetoSelecionado] = useState(null)
        
    useEffect(() => {
        setUserUser(pegarUser())
    }, [])

    useEffect(()=>{

        if (!userUser._id) return;

        async function getProdutosClientes(){
            try{
                const resposta = await fetch(`http://localhost:3000/produtos/cliente/${userUser._id}`)

                if (!resposta.ok) {
                    setProdutoUser([]) // ✅ Sem projetos, array vazio
                    return
                }

                const data = await resposta.json()
                setProdutoUser(data)
            } catch(error){
                alert(`erro para pegar os produtos do cliente ${error}`)
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
                    <TabelaProjetos
                        projetos={produtoUser}
                        onVerMais={setProjetoSelecionado}
                    />
                </div>

                <div className={CssProjetosUser.detalhesProjetos}>
                    {projetoSelecionado ? (
                        <>
                            <h2>{projetoSelecionado.nomeProjeto}</h2>

                            <p><strong>Status:</strong> {projetoSelecionado.status}</p>

                            <p><strong>Data de entrega:</strong> {new Date(projetoSelecionado.dateEntrega).toLocaleDateString("pt-BR")}</p>

                            <p><strong>Observação:</strong> {projetoSelecionado.obser}</p>

                            <p>
                                <strong>Contrato:</strong>{" "}
                                <a href={projetoSelecionado.linkContrato} target="_blank" rel="noreferrer">
                                    Acessar contrato
                                </a>
                            </p>

                            <p>
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
            
        </section>
    )
}

export default MeusProjetosUser