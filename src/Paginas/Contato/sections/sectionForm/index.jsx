import CssForm from "./form.module.css"
import { useState } from "react";

function Formulario(){
    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
        assunto: ""
    });

    return(
        <form onSubmit={""}>

        </form>
    )
}

export default Formulario