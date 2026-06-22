import { useState } from "react";
import CssTelaMudarSenha from "./mudarSenha.module.css"
import useModalAviso from "../../../hooks/useModalAviso";
import ModalAviso from "../../../Componentes/ModalAviso";
import Input from "../../../Componentes/Input";
import BotaoAction from "../../../Componentes/Buttons/BotaoAction";
import { validarEmailMudarSenha } from "../../../Utils/validarLogin";
const BASE_URL = import.meta.env.VITE_API_URL

function MudarSenha(){
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
    const [erroDeLogin, setErroDeLogin] = useState("")
    const [carregando, setCarregando] = useState(false)
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

        //valida o email
        const erroNoForm = validarEmailMudarSenha(form)
        if (erroNoForm) {
            setErroDeLogin(erroNoForm);
            return;
        }

        setCarregando(true);
        try {
            const res = await fetch(`${BASE_URL}/auth/requestPassword`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: form.email }),
            });

            const data = await res.json();

            if (!res.ok) {
                abrirAviso(data.message || "Erro ao solicitar redefinição.");
                return;
            }

            abrirAviso("Se o e-mail existir, enviamos um link de redefinição. Verifique sua caixa de entrada 📧");
            } catch {
                abrirAviso("Erro de conexão. Tente novamente.");
            } finally {
                setCarregando(false);
            }
    }

    return(
        <section className={CssTelaMudarSenha.sectionContainerMudarSenha}> 
            <form onSubmit={handleSubmitLogin} className={CssTelaMudarSenha.formLogin}>
                <img src="/images/esqueceuSenha.png" alt="imagem ilustrativa de um cadeado" />
                <h2>Esqueceu sua senha?</h2>
                <p>Não se preocupe! Informe seu e-mail e enviaremos um link para você criar uma nova senha com segurança.</p>
                <div className={CssTelaMudarSenha.divInput}>
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
                    child="Enviar Email"
                    type="submit"
                    loading={carregando}
                    disabled={carregando}
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