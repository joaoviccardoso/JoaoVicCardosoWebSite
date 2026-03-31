import CssBotaoAction from "./botaoAction.module.css"

function BotaoAction({id, child}){
    return(
        <button className={CssBotaoAction.btnAction} id={id}>
            {child}
        </button>
    )
}

export default BotaoAction