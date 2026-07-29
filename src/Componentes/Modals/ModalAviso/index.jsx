import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import CssModal from "./modalAviso.module.css";

function ModalAviso({ aberto, onFechar, mensagem }) {
  const [visivel, setVisivel] = useState(false);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    if (aberto) {
      setMontado(true);                          // monta no DOM
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisivel(true)); // pequeno delay para o CSS pegar
      });
    } else {
      setVisivel(false);                         // dispara animação de saída
      const timer = setTimeout(() => setMontado(false), 300); // desmonta após a animação
      return () => clearTimeout(timer);
    }
  }, [aberto]);

  if (!montado) return null;

  return createPortal(
    <>
      <div
        className={`modal fade show ${CssModal.modal} ${visivel ? CssModal.modalVisivel : CssModal.modalSaindo}`}
        style={{ display: "block" }}
        tabIndex="-1"
      >
        <div className={`modal-dialog modal-dialog-centered ${CssModal.dialog}`}>
          <div className={`modal-content ${CssModal.modalContent} ${visivel ? CssModal.contentVisivel : CssModal.contentSaindo}`}>

            <div className={`modal-header ${CssModal.modalHeader}`}>
              <h4 className={`modal-title ${CssModal.modalTitle}`}>Aviso</h4>
              <button type="button" className={`btn-close ${CssModal.btnClose}`} onClick={onFechar} />
            </div>

            <div className={`modal-body ${CssModal.modalBody}`}>
              <p>{mensagem}</p>
            </div>

            <div className={`modal-footer ${CssModal.modalFooter}`}>
              <button className={`btn ${CssModal.botaoOk}`} onClick={onFechar}>
                OK
              </button>
            </div>

          </div>
        </div>
      </div>

      <div
        className={`modal-backdrop ${CssModal.backdrop} ${visivel ? CssModal.backdropVisivel : CssModal.backdropSaindo}`}
        onClick={onFechar}
      />
    </>,
    document.body
  );
}

export default ModalAviso;