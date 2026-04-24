import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { validarEmail, validarSenha } from "../../Utils/validacoes";
import CssLogin from "./login.module.css"
import BemVindo from "../../Componentes/MensagemBemVindo"
import ImgLink from "../../Componentes/imgLink"
import Input from "../../Componentes/Input"
import BotaoAction from "../../Componentes/BotaoAction"
import RadioGroup from "../../Componentes/RadioInput"
import LinkParaNavegacao from "../../Componentes/Links/link"
import voltarPagina from "../../assets/voltarPagina.svg"

function TelaLogin(){
    const navigate = useNavigate();

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

    function validarFormularioLogin(){
        if (!validarEmail(form.email)) {
            setErroDeLogin("E-mail inválido");
            return false;
        }

        if (!validarSenha(form.senha)) {
            setErroDeLogin("A senha deve ter pelo menos 3 caracteres");
            return false;
        }

        return true
    }

    //envia o formulario para o backend
    async function handleSubmitLogin(e) {
        e.preventDefault();
        setErroDeLogin("");

        const isValid = validarFormularioLogin();

        if (!isValid) return;

        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        const data = await response.json();

        if(!response.ok){
            setErroDeLogin(data.message)
            return
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        if(data.user.role === "admin"){
            navigate("/admin")
        } else {
            navigate("/dashboard");
        }
    }

    return(
        <section className={CssLogin.sectionLogin}>
            <BemVindo
                titulo="Bem-vindo de volta"
                texto="Faça login para continuar e aproveitar todos os recursos disponíveis na plataforma."
            />
            <section className={CssLogin.containerFormularioLogin}>
                <ImgLink
                    to="/"
                    srcImg={voltarPagina}
                />
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
                            to="/"
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
        </section>
    )
}

export default TelaLogin