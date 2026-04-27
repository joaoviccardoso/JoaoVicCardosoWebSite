import { useState, useEffect } from "react"
import CssDashborardAdm from "./dashborardAdm.module.css"
import NavDash from "../../../Componentes/NavDashboard"
import Breadcrumb from "../../../Componentes/Breadcrumb"
import BotaoDash from "../../../Componentes/BotaoDashBoard"
import TabelaProjetos from "../../../Componentes/TabelaProjetos"

function HomeDashborardAdm(){
    const [userAdm, setUserAdm] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUserAdm(user)
        }
    }, [])

    return(
        <section className={CssDashborardAdm.homeDashborardAdm}>
            <NavDash/>
            <section className={CssDashborardAdm.sectionAcoes}>
                <Breadcrumb/>
                <div className={CssDashborardAdm.divAcoes}>
                    <h1>Bem vindo, {`${userAdm.nomeCompleto}`}</h1>
                    <p>Aqui você pode visualizar um resumo geral das suas informações e acompanhar o status dos seus projetos. Utilize o painel para acessar rapidamente as principais funcionalidades e gerenciar tudo de forma simples e organizada</p>
                    <div className={CssDashborardAdm.gridBotoesLinks}>
                        <div className={CssDashborardAdm.botoesLink1}>
                            <BotaoDash
                                child="Clientes"
                            />
                            <BotaoDash
                                child="Mensagem"
                            />
                            <BotaoDash
                                child="Projetos"
                            />
                        </div>

                        <div className={CssDashborardAdm.botoesLink2}>
                            <div>
                                <BotaoDash
                                    child="Configuração"
                                />
                                <BotaoDash
                                    child="Sair"
                                />
                            </div>
                            
                            <div className={CssDashborardAdm.divTabelaProjetos}>
                                <TabelaProjetos/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </section>
    )
}

export default HomeDashborardAdm