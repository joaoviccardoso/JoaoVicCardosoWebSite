import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL

function VerificarEmail() {
  const { id, token } = useParams();
  const navigate = useNavigate();

  const [mensagem, setMensagem] = useState("Verificando...");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function verificar() {
      try {
        const res = await fetch(`${BASE_URL}/auth/${id}/verify/${token}`);
        const data = await res.json();

        if (!res.ok) {
          setErro(true);
          setMensagem(data.message || "Link inválido");
          return;
        }

        setMensagem("Email verificado com sucesso!");

        // Redireciona após 3s
        setTimeout(() => {
          navigate("/login");
        }, 3000);

      } catch {
        setErro(true);
        setMensagem("Erro ao verificar email");
      }
    }

    verificar();
  }, [id, token, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>{mensagem}</h2>
      {erro && <p>Tente novamente ou solicite outro link.</p>}
    </div>
  );
}

export default VerificarEmail;