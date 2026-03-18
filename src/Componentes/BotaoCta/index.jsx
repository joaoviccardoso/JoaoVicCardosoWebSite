import { Link } from "react-router-dom"
import CssBotaoCta from "./botaoCta.module.css"

function BotaoCta({child, to}){
    return(
        <div className={CssBotaoCta.btnSobraBranca}>
            <Link to={to} className={CssBotaoCta.btnCta}>
                {child}
            </Link>
        </div>
    )
}

export default BotaoCta