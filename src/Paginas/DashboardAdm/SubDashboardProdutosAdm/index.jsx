import { useEffect, useState } from "react"
import { pegarUser } from "../../../Utils/pegarUser"
import CssSubDashAdmProdutos from "./subDashAdmProdutos.module.css"
import BotaoDash from "../../../Componentes/Buttons/BotaoDashBoard"
import MensagemBemVindo from "../../../Componentes/Layouts/MensagemDeBemVindo"

function SubDashAdmProdutos(){
    const [userAdm, setUserAdm] = useState({})
        
    useEffect(() => {
        setUserAdm(pegarUser())
    }, [])

    return(
        <>
            <MensagemBemVindo
                titulo={"Bem vindo"}
                user={userAdm.nomeCompleto}
                text={"Esse dashboard mostra tudo relacionado a projetos."}
            />
            <section className={CssSubDashAdmProdutos.sectionProdutosAdm}>
                <div>
                    <BotaoDash
                        child="Consultar P.C"
                        to="/admin/Produto/ConsultaPC"
                    />
                    <BotaoDash
                        child="Cadastrar P.C"
                        to="/admin/Produto/CadastrarPC"
                    />
                    <BotaoDash
                        child="Consultar M.P"
                        to="/admin/Produto/ConsultarMP"
                    />
                    <BotaoDash
                        child="Cadastrar M.P"
                        to="/admin/Produto/CadastrarMP"
                    />
                </div>
            </section>
        </>
        
    )
}

export default SubDashAdmProdutos