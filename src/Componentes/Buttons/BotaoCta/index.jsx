import { Link } from "react-router-dom"
import CssBotaoCta from "./botaoCta.module.css"

function BotaoCta({child, to, id}){
    return(
        <div className={CssBotaoCta.btnSobraBranca} id={id}>
            <Link to={to} className={CssBotaoCta.btnCta}>
                {child}
            </Link>
        </div>
    )
}

export default BotaoCta