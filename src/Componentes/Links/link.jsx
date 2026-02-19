import { Link } from "react-router-dom"
import CssLink from "./link.module.css"

function LinkParaNavegacao({child, to, className}){
    return(
        <Link to={to} className={`${CssLink.navLink} ${className || ""}`}> 
            {child}
        </Link>
    )
}

export default LinkParaNavegacao