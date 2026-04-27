import { Link } from "react-router-dom"
import CssLinkIcone from "./linkComIcone.module.css"

function LinkComIcone({imgLinkLogo, to, className, child}){
    return(
        <div className={CssLinkIcone.linkComIconeDiv}>
            <img src={imgLinkLogo} alt="" />
            <Link to={to} className={`${CssLinkIcone.navLink} ${className || ""}`}>
                {child}
            </Link>
        </div>
        
    )
}

export default LinkComIcone