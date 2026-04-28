import CssBotaoAction from "./botaoAction.module.css"

function BotaoAction({id, child, type, onClick}){

    return(
        <button className={CssBotaoAction.btnAction} id={id} type={type} onClick={onClick}>
            {child}
        </button>
    )
}

export default BotaoAction