import { useState, useEffect } from "react"
import CssDashborardAdm from "./dashborardAdm.module.css"

import Breadcrumb from "../../../Componentes/Breadcrumb"
import BotaoDash from "../../../Componentes/BotaoDashBoard"
import TabelaProjetos from "../../../Componentes/TabelaProjetos"
import { pegarUser } from "../../../Utils/pegarUser"
import { getAllProdutosPC } from "../../../services/produtosServices"

function HomeDashborardAdm(){
    const [userAdm, setUserAdm] = useState({})
    const [projetosAll, setProjetosAll] = useState([])

    useEffect(() => {
        setUserAdm(pegarUser())
    }, [])

    useEffect(()  => {
        async function fetchData(){
            try{
                const allProdutos = await getAllProdutosPC()
                setProjetosAll(allProdutos)
            } catch (error){
                alert("Erro ao buscar dados:", error);
            }
        }
        
        fetchData();
    }, [])

    return(
        <section className={CssDashborardAdm.homeDashborardAdm}>
            <section className={CssDashborardAdm.sectionAcoes}>
                <div className={CssDashborardAdm.divAcoes}>
                    <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
                    <p>Aqui você pode visualizar um resumo geral das suas informações e acompanhar o status dos seus projetos. Utilize o painel para acessar rapidamente as principais funcionalidades e gerenciar tudo de forma simples e organizada</p>
                    <div className={CssDashborardAdm.divBotoesLinks}>
                        <div className={CssDashborardAdm.botoesLink1}>
                            <BotaoDash
                                child="Clientes"
                                to="/admin/Cliente"
                            />
                            <BotaoDash
                                child="Mensagem"
                                to="/admin/EmDensenvolvimento"
                            />
                            <BotaoDash
                                child="Projetos"
                                to="/admin/Produto"
                            />
                        </div>

                        <div className={CssDashborardAdm.botoesLink2}>
                            <div>
                                <BotaoDash
                                    child="Configuração"
                                    to="/admin/EmDensenvolvimento"
                                />
                                <BotaoDash
                                    child="Sair"
                                    to="/EmDensenvolvimento"
                                />
                            </div>
                            
                            <div className={CssDashborardAdm.divTabelaProjetos}>
                                <TabelaProjetos
                                    projetos={projetosAll}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HomeDashborardAdm