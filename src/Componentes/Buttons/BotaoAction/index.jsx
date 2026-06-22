import CssBotaoAction from "./botaoAction.module.css"

function BotaoAction({id, child, type, onClick, loading = false, disabled = false}){

    return(
        <button
            className={CssBotaoAction.btnAction}
            id={id}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? <span className={CssBotaoAction.spinner} /> : child}
        </button>
    )
}

export default BotaoAction