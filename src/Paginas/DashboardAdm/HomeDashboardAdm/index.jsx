import { useState, useEffect } from "react"
import CssDashborardAdm from "./dashborardAdm.module.css"
import NavDash from "../../../Componentes/NavDashboard"

function HomeDashborardAdm(){
    const [userAdm, setUserAdm] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUserAdm(user)
        }
    }, [])

    return(
        <section className={CssDashborardAdm.homeDashborardAdm}>
            <NavDash/>
            <h1>Bem vindo ADM:{`${userAdm.nomeCompleto}`}</h1>
        </section>
    )
}

export default HomeDashborardAdm