import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CssResetSenha from "./resetSenha.module.css"
import Input from "../../../Componentes/Input";
import BotaoAction from "../../../Componentes/Buttons/BotaoAction";
import useModalAviso from "../../../hooks/useModalAviso";
import ModalAviso from "../../../Componentes/ModalAviso";
import { validarSenha } from "../../../Utils/validacoes";
const BASE_URL = import.meta.env.VITE_API_URL

function ResetSenha() {
    const { token } = useParams();
    const [carregando, setCarregando] = useState(false)
    const navigate = useNavigate();
    const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
    const [erro, setErro] = useState("");
    const [form, setForm] = useState({ novaSenha: "", confirmarSenha: "" });

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErro("");

        if (form.novaSenha !== form.confirmarSenha) {
            setErro("As senhas não coincidem.");
            return;
        }

        const validarNovaSenha = validarSenha(form.novaSenha)
        if(validarNovaSenha){
            setErro(validarNovaSenha)
            return;
        }

        setCarregando(true);
        try {
            const res = await fetch(`${BASE_URL}/auth/resetPassword/${token}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ novaSenha: form.novaSenha }),
            });

            const data = await res.json();

            if (!res.ok) {
                abrirAviso(data.message || "Link inválido ou expirado.");
                return;
            }

            abrirAviso("Senha redefinida com sucesso! Faça login novamente.");
            setTimeout(() => navigate("/Login"), 2000);
        } catch {
            abrirAviso("Erro de conexão. Tente novamente.");
        }finally {
            setCarregando(false);
        }
    }

    return (
        <section className={CssResetSenha.sectionResetSenha}>
            <form onSubmit={handleSubmit} className={CssResetSenha.formResetSenha}>
                <img src="/images/esqueceuSenha.png" alt="imagem ilustrativa de um cadeado" />
                <h2>Alterar senha</h2>
                <p>Sua senha deve ter pelo menos 8 caracteres e incluir uma letra maiúscula, um número e um caractere especial.</p>
                <div>
                    <Input label="Nova senha" type="password" name="novaSenha" value={form.novaSenha} onChange={handleChange} />
                    <Input label="Confirmar nova senha" type="password" name="confirmarSenha" value={form.confirmarSenha} onChange={handleChange} />
                </div>
                {erro && <p>{erro}</p>}
                <BotaoAction 
                    child="Redefinir senha" 
                    type="submit" 
                    loading={carregando}
                    disabled={carregando}
                />
            </form>
            <ModalAviso aberto={avisoAberto} onFechar={fecharAviso} mensagem={mensagemAviso} />
        </section>
    );
}

export default ResetSenha;