import CssProntoParaComecar from "./prontoParaComecar.module.css"
import BotaoCta from "../../../../Componentes/BotaoCta"

function ProntoParaComecar(){
    return(
        <section className={CssProntoParaComecar}>
            <div className={CssProntoParaComecar.containerTexto}>
                <h3>Pronto para transformar suas ideias em realidade?</h3>
                <p>Seja para um projeto, uma parceria ou só trocar uma ideia, será um prazer conversar com você.</p>
                <BotaoCta
                    child="Comece seu projeto hoje"
                    to="Contato"
                />
            </div>
            <img src="src\assets\iconePaginaWeb.svg" alt="imagem ilustrativa de uma pagina web" />
        </section>
    )
}

export default ProntoParaComecar