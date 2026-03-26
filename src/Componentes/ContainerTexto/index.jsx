import CssContainerTexto from "./containerTexto.module.css"

function ContainerTexto({titulo, texto, id}){

    return(
        <div className={CssContainerTexto.wrapper} id={id}>
            <div className={CssContainerTexto.containerTexto}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default ContainerTexto