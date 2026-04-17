import { Link } from 'react-router-dom'
import CssBtnLogin from "./botaoLogin.module.css";
import IconeLogin from '../../assets/IconeLogin.svg'

function BtnLogin(){
    return(
        <div className={CssBtnLogin.loginContainer}>
            <span className={CssBtnLogin.iconContainer}>
                <img src={IconeLogin} alt="Logo Login" />
            </span>

            <div className={CssBtnLogin.borderWrapper}>
                <Link to="/login" className={CssBtnLogin.linkLogin}>
                    Fazer login
                </Link>
            </div>
        </div>
    )
}

export default BtnLogin