import { createPortal } from "react-dom";
import CssModalConfirmacao from "./modalConfirmacao.module.css";

function ModalConfirmacaoExclusao({ aberto, onFechar, onConfirmar, nomeProduto, deletando, tituloHeader, textoMain, botaoDeConfirmacao}) {
 
  if (!aberto) return null;

  return createPortal(
    <>
      <div className={`modal fade show ${CssModalConfirmacao.modal}`} style={{ display: "block" }} tabIndex="-1">
        <div className={`modal-dialog modal-dialog-centered ${CssModalConfirmacao.modalDialog}`}>
          <div className={`modal-content ${CssModalConfirmacao.modalContent}`}>

            <div className={`modal-header ${CssModalConfirmacao.modalHeader}`}>
              <h5 className={`modal-title ${CssModalConfirmacao.modalTitle}`}>{tituloHeader}</h5>
              <button type="button" className={`btn-close ${CssModalConfirmacao.btnClose}`} onClick={onFechar} />
            </div>

            <div className={`modal-body ${CssModalConfirmacao.modalBody}`}>
              <p>{textoMain} <strong>{nomeProduto}</strong>?</p>
            </div>

            <div className={`modal-footer ${CssModalConfirmacao.modalFooter}`}>
              <button
                className={`btn ${CssModalConfirmacao.botaoCancelar}`}
                onClick={onFechar}
                disabled={deletando}
              >
                Cancelar
              </button>
              <button
                className={`btn ${CssModalConfirmacao.botaoExcluir}`}
                onClick={onConfirmar}
                disabled={deletando}
              >
                {deletando ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                    Excluindo...
                  </>
                ) : (
                  `${botaoDeConfirmacao}`
                )}
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className={`modal-backdrop fade show ${CssModalConfirmacao.backdrop}`} onClick={onFechar} />
    </>,
    document.body
  );
}

export default ModalConfirmacaoExclusao;