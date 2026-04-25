import { useState, useEffect } from "react"
import CssDashborardUser from "./dashborardUser.module.css"

function HomeDashborardUser(){
    const [userUser, setUserUser] = useState({})
    
        useEffect(() => {
            const user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                setUserUser(user)
            }
        }, [])
    

    return(
        <section><h1>Bem vindo user: {`${userUser.nomeCompleto}`}</h1></section>
    )
}

export default HomeDashborardUser