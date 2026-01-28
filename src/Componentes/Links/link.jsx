import { Link } from "react-router-dom"
import CssLink from "./link.module.css"

function LinkParaNavegacao({child, to}){
    return(
        <Link to={to} className={CssLink.navLink}> 
            {child}
        </Link>
    )
}

export default LinkParaNavegacao