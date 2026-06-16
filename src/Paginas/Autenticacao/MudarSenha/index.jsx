import { useState } from "react";
import CssTelaMudarSenha from "./mudarSenha.module.css"
import useModalAviso from "../../../hooks/useModalAviso";
import ModalAviso from "../../../Componentes/ModalAviso";
import Input from "../../../Componentes/Input";
import BotaoAction from "../../../Componentes/BotaoAction";
const BASE_URL = import.meta.env.VITE_API_URL

function MudarSenha(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
    const [erroDeLogin, setErroDeLogin] = useState("")
    const [form, setForm] = useState({
        email: "",
    });

    //muda o status dos input
    function handleChangeLogin(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
        ...prev,
        [name]: value
        }));
    }

     //envia o formulario para o backend
    async function handleSubmitLogin(e) {
        e.preventDefault();
        setErroDeLogin("");
        try {
            const res = await fetch(`${BASE_URL}/auth/requestPassword`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: form.email }),
            });

            const data = await res.json();

            if (!res.ok) {
                setErroDeLogin(data.message || "Erro ao solicitar redefinição.");
                return;
            }

            abrirAviso("Se o e-mail existir, enviamos um link de redefinição. Verifique sua caixa de entrada 📧");
    } catch {
            setErroDeLogin("Erro de conexão. Tente novamente.");
    }
    }

    return(
        <section>
            <form onSubmit={handleSubmitLogin} className={CssTelaMudarSenha.formLogin}>

                    <div className={CssTelaMudarSenha}>
                        <Input
                            label="E-mail"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChangeLogin}
                            className={`${erroDeLogin ? "inputErro" : ""}`}
                            placeholder="E-mail"
                        />
                        {erroDeLogin && <p className={CssTelaMudarSenha.erro}>{erroDeLogin}</p>}
                    </div>

                    <BotaoAction
                        child="Fazer Login"
                        type="submit"
                    />
                </form>
            <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} 
            />
        </section>
    )
}

export default MudarSenha