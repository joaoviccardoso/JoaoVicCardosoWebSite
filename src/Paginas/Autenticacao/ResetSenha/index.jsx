import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Input from "../../../Componentes/Input";
import BotaoAction from "../../../Componentes/BotaoAction";
import useModalAviso from "../../../hooks/useModalAviso";
import ModalAviso from "../../../Componentes/ModalAviso";
const BASE_URL = import.meta.env.VITE_API_URL

function ResetSenha() {
    const { token } = useParams();
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

        try {
            const res = await fetch(`${BASE_URL}/auth/resetPassword/${token}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ novaSenha: form.novaSenha }),
            });

            const data = await res.json();

            if (!res.ok) {
                setErro(data.message || "Link inválido ou expirado.");
                return;
            }

            abrirAviso("Senha redefinida com sucesso! Faça login novamente.");
            setTimeout(() => navigate("/Login"), 2000);
        } catch {
            setErro("Erro de conexão. Tente novamente.");
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <Input label="Nova senha" type="password" name="novaSenha" value={form.novaSenha} onChange={handleChange} />
                <Input label="Confirmar nova senha" type="password" name="confirmarSenha" value={form.confirmarSenha} onChange={handleChange} />
                {erro && <p>{erro}</p>}
                <BotaoAction child="Redefinir senha" type="submit" />
            </form>
            <ModalAviso aberto={avisoAberto} onFechar={fecharAviso} mensagem={mensagemAviso} />
        </section>
    );
}

export default ResetSenha;