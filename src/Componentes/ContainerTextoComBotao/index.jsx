import CssContainerComBotao from "./containerTextoComBotao.module.css"

function ContainerComBotao({id, titulo, texto}){
    return(
        <div className={CssContainerComBotao.wrapper} id={id}>
            <div className={CssContainerComBotao.containerTexto}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default ContainerComBotao