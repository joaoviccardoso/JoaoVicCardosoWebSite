import { Link } from "react-router-dom"
import CssImgLink from "./imgLink.module.css"

function ImgLink({to, srcImg}){
    return(
        <Link
            to={to}
            className={CssImgLink.navLink}
        >
            <img src={srcImg} className={CssImgLink.img} alt="link com imagem" />
        </Link>
    )
}

export default ImgLink