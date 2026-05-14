import { Link } from "react-router-dom";
import styles from "./tabelaConsultaCliente.module.css"
import { useState } from "react";
import useModalAviso from "../../hooks/useModalAviso";
import { deleteUsuarioPorId } from "../../services/authServices";
import ModalConfirmacaoExclusao from "../ModalDeConfirmacao";
import ModalAviso from "../ModalAviso";

function TabelaConsultaCliente({clientes,  onDeletar}){
  const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
  const [modalAberto, setModalAberto] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [deletando, setDeletando] = useState(false);

  const abrirModal = (projeto) => {
    setClienteSelecionado(projeto); // salva o projeto clicado
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setClienteSelecionado(null);
  };

  const confirmarExclusao = async () => {
      setDeletando(true);
      try {
        //Chama a rota de delete
        await deleteUsuarioPorId(clienteSelecionado._id);
        fecharModal();
        //passa o projeto deletado para o pai remover do useState
        onDeletar(clienteSelecionado._id);
        //passa mensagem para o modal
        abrirAviso("Cliente excluído com sucesso!")
      } catch (error) {
        console.log("Status do erro:", error.message);
        abrirAviso("Erro ao excluir o cliente. Tente novamente.");
      } finally {
        setDeletando(false);
      }
    };

  return (
        <div className={styles.tableWrapper}>
              <table className={styles.projTable}>
                <tbody>
                  {clientes.map((projeto) => (
                    <tr key={projeto._id} className={styles.projRow}>
                     
                      <td className={`${styles.projCell} ${styles.colProjeto} ${styles.colImgCliente}`}>
                        <div className={styles.imgCliente}></div>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colProjeto}`}>
                        <div className={styles.clietLabel}>{projeto.role == "admin" ? "Admin" : "Cliente"}</div>
                        <div className={styles.clietName}>{projeto.nomeCompleto}</div>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colProjeto}`}>
                        <div className={styles.clietLabel}>Email</div>
                        <div className={styles.clietName}>{projeto.email}</div>
                      </td>

                      <td className={`${styles.projCell} ${styles.colProjeto} ${styles.colTelefone}`}>
                        <div className={styles.clietLabel}>Telefone</div>
                        <div className={styles.clietName}>{projeto.telefone}</div>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colAcao} ${styles.colBotoes}`}>
                          <Link to={`/admin/Cliente/ConsultarCliente/Editar/${projeto._id}`} className={styles.botaoLink}> 
                            Ver mais
                          </Link>

                          <button className={styles.botaoExcluir} onClick={() => abrirModal(projeto)}>
                            Excluir
                          </button>
                      </td>
        
                    </tr>
                  ))}
                </tbody>
              </table>

              <ModalConfirmacaoExclusao
                aberto={modalAberto}
                onFechar={fecharModal}
                onConfirmar={confirmarExclusao}
                nomeProduto={clienteSelecionado?.nomeCompleto}
                deletando={deletando}
              />

              <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} // vem do hook
              />
            </div>
    )
}

export default TabelaConsultaCliente