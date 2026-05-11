import { useState, useEffect } from "react"
import CssDashborardUser from "./dashborardUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import BotaoDash from "../../../Componentes/BotaoDashBoard"
import TabelaProjetos from "../../../Componentes/TabelaProjetos"

function HomeDashborardUser(){
    const [userUser, setUserUser] = useState({})
    
    useEffect(() => {
        setUserUser(pegarUser())
    }, [])
    

    return(
        <section className={CssDashborardUser.sectionDashboardUser}>
            <div>
                <h1>Bem vindo user: {`${userUser.nomeCompleto}`}</h1>
                <p>Aqui você pode visualizar um resumo geral das suas informações e acompanhar o status dos seus projetos. Utilize o painel para acessar rapidamente as principais funcionalidades e gerenciar tudo de forma simples e organizada</p>
            </div>
            
            <section className={CssDashborardUser.sectionAcoesUser}>
                <div className={CssDashborardUser.divBotaoAcoes1}>
                    <BotaoDash
                        child="Projetos Contratados"
                        to="/dashboard/ProjetosContratados"
                    />
                    <BotaoDash
                        child="Meus dados"
                        to="/dashboard/MeusDados"
                    />
                    <BotaoDash
                        child="Mensagens"
                        to="/dashboard/Mensagens"
                    />
                </div>

                <div className={CssDashborardUser.divContainerBotaoEhTabela}> 
                    <div className={CssDashborardUser.divBotaoAcoes2}>
                        <BotaoDash
                            child="Sair"
                            to="/EmDensenvolvimento"
                        />
                    </div>
                </div>
                
            </section>
        </section>
    )
}

export default HomeDashborardUser