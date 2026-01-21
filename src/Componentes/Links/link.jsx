import { Link } from "react-router-dom"

function LinkParaNavegacao({child, to, className}){
    return(
        <Link to={to} className={className}> 
            {child}
        </Link>
    )
}

export default LinkParaNavegacao