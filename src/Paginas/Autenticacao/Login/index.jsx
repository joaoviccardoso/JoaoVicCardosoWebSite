import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { validarFormularioLogin } from "../../../Utils/validarLogin";
import { jwtDecode } from "jwt-decode";
import CssLogin from "./login.module.css"
import BemVindo from "../../../Componentes/MensagemBemVindo"
import ImgLink from "../../../Componentes/imgLink"
import Input from "../../../Componentes/Input"
import BotaoAction from "../../../Componentes/BotaoAction"
import RadioGroup from "../../../Componentes/RadioInput"
import LinkParaNavegacao from "../../../Componentes/Links/link"
import useModalAviso from "../../../hooks/useModalAviso";
import ModalAviso from "../../../Componentes/ModalAviso";
const BASE_URL = import.meta.env.VITE_API_URL


function TelaLogin(){
    const navigate = useNavigate();
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();

    const [erroDeLogin, setErroDeLogin] = useState("")

    const [form, setForm] = useState({
        email: "",
        senha: ""
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

        //chama uma funcao para validar os dados do form
        const erroNoForm = validarFormularioLogin(form)
        
        if (erroNoForm) {
            setErroDeLogin(erroNoForm);
            return;
        }

        try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });

        const data = await response.json();

        if (!response.ok) {

            // CASO ESPECIAL: email não verificado
            if (data.message.includes("Verifique seu email")) {
                abrirAviso("Você ainda não verificou seu email. Verifique sua caixa de entrada 📧");
                return;
            }

            abrirAviso(data.message);
            return;
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        const decoded = jwtDecode(data.token);
        if (decoded.role === "admin") {
            navigate("/admin");
        } else {
            navigate("/dashboard");
        }

    } catch {
        abrirAviso("Erro de conexão. Tente novamente.");
    }
    }

    return(
        <section className={CssLogin.sectionLogin}>
            <BemVindo
                titulo="Bem-vindo de volta"
                texto="Faça login para continuar e aproveitar todos os recursos disponíveis na plataforma."
            />
            <section className={CssLogin.containerFormularioLogin}>
                <form onSubmit={handleSubmitLogin} className={CssLogin.formLogin}>
                    <div className={CssLogin.containerTexto}>
                        <h3>Bem-vindo de volta</h3>
                        <p>Faça login para continuar e aproveitar todos os recursos disponíveis na plataforma.</p>
                    </div>

                    <div className={CssLogin}>
                        <Input
                            label="E-mail"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChangeLogin}
                            className={`${erroDeLogin ? "inputErro" : ""}`}
                            placeholder="E-mail"
                        />

                        <Input
                            label="Senha"
                            type="password"
                            name="senha"
                            value={form.senha}
                            onChange={handleChangeLogin}
                            className={`${erroDeLogin ? "inputErro" : ""}`}
                            placeholder="Senha"
                        />
                        {erroDeLogin && <p className={CssLogin.erro}>{erroDeLogin}</p>}
                    </div>
                    
                    <div className={CssLogin.containerEsqueceuAhSenha}>
                        <LinkParaNavegacao
                            to="/Cadastro"
                            child="Não tenho conta"
                            className="linkLogin"
                        />

                        <LinkParaNavegacao
                            to="/EmDensenvolvimento"
                            child="Esqueceu sua senha"
                            className=".linkLogin"
                        />
                    </div>

                    <BotaoAction
                        child="Fazer Login"
                        type="submit"
                    />
                </form>
            </section>
            <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} 
            />
        </section>
    )
}

export default TelaLogin