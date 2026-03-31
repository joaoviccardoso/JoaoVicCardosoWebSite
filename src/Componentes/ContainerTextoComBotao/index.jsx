import CssContainerComBotao from "./containerTextoComBotao.module.css"
import BotaoAction from "../BotaoAction"

function ContainerComBotao({id, titulo, texto ,child, idBtn}){
    return(
        <div className={CssContainerComBotao.wrapper} id={id}>
            <div className={CssContainerComBotao.containerTexto}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <BotaoAction
                    child={child}
                    id={idBtn}
                />
            </div>
        </div>
    )
}

export default ContainerComBotao