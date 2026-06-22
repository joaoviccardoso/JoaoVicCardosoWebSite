import { Link, useNavigate } from 'react-router-dom'
import CssBtnLogin from "./botaoLogin.module.css";
import IconeLogin from '../../../assets/IconeLogin.svg'
import { estaLogado, getRoleDoToken } from '../../../services/authServices';
import { useEffect, useState } from 'react';


// Mapa de role → rota do dashboard
const ROTAS_POR_ROLE = {
    admin: "/admin",
    user:  "/Dashboard",
    // adicione outros roles aqui
}

function BtnLogin(){
    const navigate = useNavigate()
    const [islogado, setIsLogado] = useState("")

    useEffect(()=>{
        function isLogadoLegendaBtn(){
            if(estaLogado()){
                setIsLogado("Meu painel")
            }else{
                setIsLogado("Fazer login")
            }
        }

        isLogadoLegendaBtn()
    }, [])

    function handleClickLogin() {
        if (estaLogado()) {
            const role = getRoleDoToken()
            const rota = ROTAS_POR_ROLE[role] ?? "/Dashboard"
            navigate(rota)
        } else {
            navigate("/Login")
        }
    }

    return(
        <div className={CssBtnLogin.loginContainer}>
            <span className={CssBtnLogin.iconContainer}>
                <img src={IconeLogin} alt="Logo Login" />
            </span>

            <div className={CssBtnLogin.borderWrapper}>
                {/* botão em vez de Link para ter controle no clique */}
                <button
                    onClick={handleClickLogin}
                    className={CssBtnLogin.linkLogin}
                >
                    {islogado}
                </button>
            </div>
        </div>
    )
}

export default BtnLogin