import { Link } from "react-router-dom"
import CssBotaoDash from "./botaoDashboard.module.css"
import { Children } from "react"

function BotaoDash({to, child}){
    return (
        <Link to={to} className={CssBotaoDash.botaoDash}>
            {child}
        </Link>
    )
}

export default BotaoDash