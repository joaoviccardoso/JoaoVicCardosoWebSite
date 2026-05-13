import { Link, useNavigate } from "react-router-dom"
import CssLinkIcone from "./linkComIcone.module.css"

function LinkComIcone({imgLinkLogo, to, className, child, onClick}){
    const navigate = useNavigate()

    function handleClick(e) {
        if (onClick) {
            e.preventDefault()
            onClick(navigate)    
        }
    }

    return(
        <div className={CssLinkIcone.linkComIconeDiv}>
            <img src={imgLinkLogo} alt="icone" />
            <Link 
                to={to} 
                className={`${CssLinkIcone.navLink} ${className || ""}`}
                onClick={onClick ? handleClick : undefined}
            >
                {child}
            </Link>
        </div>
        
    )
}

export default LinkComIcone