import { useState } from "react";
import CssCadastro from "./cadastro.module.css"
import BemVindo from "../../../Componentes/MensagemBemVindo"
import Input from "../../../Componentes/Input";
import ImgLink from "../../../Componentes/imgLink";
import BotaoAction from "../../../Componentes/BotaoAction";
import { validarFormularioCadastro } from "../../../Utils/validarCadastro.js";
import ModalAviso from "../../../Componentes/ModalAviso/index.jsx";
import useModalAviso from "../../../hooks/useModalAviso.js";
const BASE_URL = import.meta.env.VITE_API_URL

function TelaCadastro(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
    const [carregando, setCarregando] = useState(false)
    const [erroDeCadastro, setErroDeCadastro] = useState("")

    const [form, setForm] = useState({
        primeiroNome: "",
        email:"",
        senha: "",
        confirmarSenha:"",
        telefone:""
    });
    
    //constrola a as alteração nos input e salva no useState form
    function handleChangeLogin(e) {
        const { name, value } = e.target;
    
            setForm((prev) => ({
            ...prev,
            [name]: value
            }));
        }
    
        //envia o formulario para o backend fazer o cadastro do usuario
        async function handleSubmitLogin(e) {
        e.preventDefault();
        setErroDeCadastro("")

        const erroForm = validarFormularioCadastro(form)
        if (erroForm) {
            setErroDeCadastro(erroForm);
            return;
        }

        setCarregando(true);
        try {                                          // ✅ adicionado try/catch
            const response = await fetch(`${BASE_URL}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nomeCompleto: form.primeiroNome,
                    email: form.email,
                    senha: form.senha,
                    telefone: form.telefone
                })
            });

            const data = await response.json();

            if (!response.ok) {
                abrirAviso(data.message);
                return;
            }

            // ✅ usa a mensagem do backend: "Usuário criado! Verifique seu email."
            abrirAviso(data.message);

            setForm({
                primeiroNome: "",
                email: "",
                senha: "",
                confirmarSenha: "",
                telefone: ""
            });

        } catch {
            abrirAviso("Erro de conexão. Tente novamente.");   // ✅ erro de rede
        }   finally {
            setCarregando(false);
        }
    }

    return(
        <section className={CssCadastro.secaoTelaCadastro}>
            <BemVindo
                titulo="Bem-vindo à nossa plataforma"
                texto="Crie sua conta e tenha acesso a ferramentas pensadas para facilitar sua rotina e organizar tudo em um só lugar."
            />
            <section className={CssCadastro.secaoFormularioCadastro}>
                <form onSubmit={handleSubmitLogin} className={CssCadastro.formCadastro}>
                    <h3>Crie sua conta pessoal</h3>
                    <p>Será enviado (solicitado) uma confirmação do cadastro por e-mail.</p>

                    <div className={CssCadastro.divContainerConta}>
                        <Input
                            label="Primeiro Nome Completo"
                            type="text"
                            name="primeiroNome"
                            value={form.primeiroNome}
                            onChange={handleChangeLogin}
                            className={`${erroDeCadastro ? "inputErro" : ""}`}
                            placeholder="Primeiro Nome"
                        />

                        <Input
                            label="E-mail"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChangeLogin}
                            className={`${erroDeCadastro ? "inputErro" : ""}`}
                            placeholder="E-mail"
                        />

                        <Input
                            label="Senha"
                            type="password"
                            name="senha"
                            value={form.senha}
                            onChange={handleChangeLogin}
                            className={`${erroDeCadastro ? "inputErro" : ""}`}
                            placeholder="Senha"
                        />

                        <Input
                            label="Confirmar Senha"
                            type="password"
                            name="confirmarSenha"
                            value={form.confirmarSenha}
                            onChange={handleChangeLogin}
                            className={`${erroDeCadastro ? "inputErro" : ""}`}
                            placeholder="Confirmar Senha"
                        />

                        <Input
                            label="Telefone"
                            type="tel"
                            name="telefone"
                            value={form.telefone}
                            onChange={handleChangeLogin}
                            className={`${erroDeCadastro ? "inputErro" : ""}`}
                            placeholder="Telefone"
                        />
                    </div>

                    <div className={CssCadastro.divContainerInputNumero}>

                        {erroDeCadastro && <p className={CssCadastro.erro}>{erroDeCadastro}</p>}
                        
                        <BotaoAction
                            child="Fazer Cadastro"
                            type="submit"
                            loading={carregando}
                            disabled={carregando}
                        />
                    </div>
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

export default TelaCadastro