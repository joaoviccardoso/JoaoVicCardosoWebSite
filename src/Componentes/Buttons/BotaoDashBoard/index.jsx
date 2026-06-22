import { Link, useNavigate } from "react-router-dom"
import CssBotaoDash from "./botaoDashboard.module.css"
import { Children } from "react"

function BotaoDash({ to, child, onClick}){
    const navigate = useNavigate()

    function handleClick(e) {
        if (onClick) {
            e.preventDefault()
            onClick(navigate)    
        }
    }

    return (
        <Link
            to={to}
            className={CssBotaoDash.botaoDash}
            onClick={onClick ? handleClick : undefined}
        >
            {child}
        </Link>
    )
}

export default BotaoDash