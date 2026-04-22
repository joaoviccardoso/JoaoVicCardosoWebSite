import CssLogin from "./login.module.css"
import BemVindo from "../../Componentes/MensagemBemVindo"

function TelaLogin(){
    return(
        <section>
            <BemVindo
                titulo="Bem-vindo de volta"
                texto="Faça login para continuar e aproveitar todos os recursos disponíveis na plataforma."
            />
            <section>

            </section>
        </section>
    )
}

export default TelaLogin