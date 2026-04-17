import { Link } from "react-router-dom"
import CssBotaoLink from "./botaoLink.module.css"

function BotaoLink({child, className, id}){
    return(
        <Link to={`/Portfolio/${id}`} className={`${CssBotaoLink.botaoLink} ${className || ""}`} id={id}> 
            {child}
        </Link>
    )
}

export default BotaoLink