import { Link } from "react-router-dom"
import CssBotaoLink from "./botaoLink.module.css"

function BotaoLink({child, to, className, idBtn}){
    return(
        <Link to={to} className={`${CssBotaoLink.botaoLink} ${className || ""}`} id={idBtn}> 
            {child}
        </Link>
    )
}

export default BotaoLink