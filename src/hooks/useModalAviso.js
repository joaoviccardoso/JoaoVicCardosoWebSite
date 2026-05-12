import { useState } from "react";

function useModalAviso() {
  const [avisoAberto, setAvisoAberto] = useState(false);
  const [mensagemAviso, setMensagemAviso] = useState("");

  const abrirAviso = (mensagem) => {
    setMensagemAviso(mensagem);
    setAvisoAberto(true);
  };

  const fecharAviso = () => {
    setAvisoAberto(false);
    setMensagemAviso("");
  };

  return { avisoAberto, mensagemAviso, abrirAviso, fecharAviso };
}

export default useModalAviso;