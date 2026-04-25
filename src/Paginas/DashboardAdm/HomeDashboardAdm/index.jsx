import { useState, useEffect } from "react"
import CssDashborardAdm from "./dashborardAdm.module.css"

function HomeDashborardAdm(){
    const [userAdm, setUserAdm] = useState({})

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            setUserAdm(user)
        }
    }, [])

    return(
        <section><h1>Bem vindo ADM:{`${userAdm.nomeCompleto}`}</h1></section>
    )
}

export default HomeDashborardAdm