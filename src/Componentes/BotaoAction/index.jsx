import CssBotaoAction from "./botaoAction.module.css"

function BotaoAction({id, child, type}){
    return(
        <button className={CssBotaoAction.btnAction} id={id} type={type}>
            {child}
        </button>
    )
}

export default BotaoAction