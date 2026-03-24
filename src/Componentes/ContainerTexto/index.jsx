import CssContainerTexto from "./containerTexto.module.css"

function ContainerTexto({titulo, texto}){
    console.log(titulo)

    return(
        <div className={CssContainerTexto.wrapper}>
            <div className={CssContainerTexto.containerTexto}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default ContainerTexto