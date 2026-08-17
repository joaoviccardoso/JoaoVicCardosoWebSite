import { useState, useEffect } from "react"
import CssDashborardUser from "./dashborardUser.module.css"
import { pegarUser } from "../../../Utils/pegarUser"
import BotaoDash from "../../../Componentes/Buttons/BotaoDashBoard"
import TabelaProjetos from "../../../Componentes/Tables/TabelaProjetos"
import { logout } from "../../../services/authServices"
import { useNavigate } from "react-router-dom"
import ModalConfirmacaoExclusao from "../../../Componentes/Modals/ModalDeConfirmacao"
import MensagemBemVindo from "../../../Componentes/Layouts/MensagemDeBemVindo"

function HomeDashborardUser(){
    const navigate = useNavigate() 
    const [modalAberto, setModalAberto] = useState(false);
    const [userUser, setUserUser] = useState({})
    
    useEffect(() => {
        setUserUser(pegarUser())
    }, [])
    
    function handleSair(navigateFn) {
        logout()            // apaga o token
        navigateFn("/")      // manda para a home (ou /Login)
    }

    const abrirModal = () => {
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };

    const confirmarSaida = async () => {
        try {
            fecharModal();
            handleSair(navigate)
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <section className={CssDashborardUser.sectionDashboardUser}>
            <MensagemBemVindo
                titulo={"Bem vindo:"}
                user={userUser.nomeCompleto}
                text={"Aqui você pode visualizar um resumo geral das suas informações e acompanhar o status dos seus projetos. Utilize o painel para acessar rapidamente as principais funcionalidades e gerenciar tudo de forma simples e organizada"}
            />
            
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
                        to="/dashboard/EmDensenvolvimento"
                    />
                </div>

                <div className={CssDashborardUser.divContainerBotaoEhTabela}> 
                    <div className={CssDashborardUser.divBotaoAcoes2}>
                        <button className={CssDashborardUser.btnSair} onClick={() => abrirModal() }>
                            <BotaoDash
                                child="Sair"
                            />
                        </button>
                    </div>
                </div>
                
            </section>
            <ModalConfirmacaoExclusao
                aberto={modalAberto}
                onFechar={fecharModal}
                onConfirmar={confirmarSaida}
                tituloHeader="Sair"
                textoMain="Tem certeza que deseja sair"
                botaoDeConfirmacao="Sim, sair"
            />
        </section>
    )
}

export default HomeDashborardUser