import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CssVerificacao from "./verificacao.module.css"

const BASE_URL = import.meta.env.VITE_API_URL

function VerificarEmail() {
  const { id, token } = useParams();
  const navigate = useNavigate();

  const [mensagem, setMensagem] = useState("Verificando...");
  const [icone, setIcone] = useState("")
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function verificar() {
      try {
        const res = await fetch(`${BASE_URL}/auth/${id}/verify/${token}`);
        const data = await res.json();

        if (!res.ok) {
          setErro(true);
          setIcone("/images/botao-x.png")
          setMensagem(data.message || "Link inválido");
          return;
        }

        setIcone("/images/verificado.png")
        setMensagem("Email verificado com sucesso!");

        // Redireciona após 3s
        setTimeout(() => {
          navigate("/login");
        }, [30000]); //lembrar de colocar  5 seg.

      } catch {
        setErro(true);
        setMensagem("Erro ao verificar email");
      }
    }

    verificar();
  }, [id, token, navigate]);

  return (
    <div className={CssVerificacao.divVerificacao} style={{ textAlign: "center", marginTop: "100px" }}>
      <img src={icone} alt="icone de verificação"/>
      <h2>{mensagem}</h2>
      {erro && <p>Tente novamente ou solicite outro link.</p>}
    </div>
  );
}

export default VerificarEmail;