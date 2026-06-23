import CssBotaoLinkA from "./botaoLinkA.module.css"

function BotaoLinkA({texto, to}){
    return(
        <a href={to} target="blank" className={CssBotaoLinkA.botaoLinkA}>
            {texto}
        </a>
    )
}

export default BotaoLinkA