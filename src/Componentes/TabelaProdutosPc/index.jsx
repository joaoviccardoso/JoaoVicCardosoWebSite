import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./tabelaConsultaProdutosPc.module.css"
import { deleteProdutoPorId } from "../../services/produtosServices";

import ModalAviso from "../ModalAviso";
import useModalAviso from "../../hooks/useModalAviso";
import ModalConfirmacaoExclusao from "../ModalDeConfirmacao";


function TabelaConsultaProjetosPC({produtos, onDeletar}){
  const { avisoAberto, mensagemAviso, abrirAviso, fecharAviso } = useModalAviso();
  const [modalAberto, setModalAberto] = useState(false);
  const [deletando, setDeletando] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const abrirModal = (projeto) => {
    setProjetoSelecionado(projeto); // 👈 salva o projeto clicado
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };

  const confirmarExclusao = async () => {
    setDeletando(true);
    try {
      //Chama a rota de delete
      await deleteProdutoPorId(projetoSelecionado._id);
      fecharModal();
      //passa o projeto deletado para o pai remover do useState
      onDeletar(projetoSelecionado._id);
      //passa mensagem para o modal
      abrirAviso("Produto excluído com sucesso!")
    } catch (error) {
      abrirAviso("Erro ao excluir o produto. Tente novamente.");
    } finally {
      setDeletando(false);
    }
  };

    return (
        <div className={styles.tableWrapper}>
              <table className={styles.projTable}>
                <tbody>
                  {produtos.map((projeto) => (
                    <tr key={projeto._id} className={styles.projRow}>

                      <td className={`${styles.projCell} ${styles.colProjeto} ${styles.colImgCliente}`}>
                        <div className={styles.imgCliente}></div>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colProjeto}`}>
                        <div className={styles.clietLabel}>Projeto</div>
                        <div className={styles.clietName}>{projeto.nomeProjeto}</div>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colProjeto}`}>
                        <div className={styles.clietLabel}>Cliente</div>
                        <div className={styles.clietName}>{projeto.cliente?.nomeCompleto ?? "Sem Cliente"}</div>
                      </td>

                        <td className={`${styles.projCell} ${styles.colStatus}`}>
                            <div className={styles.projLabel}>Status</div>
                            <span className={`${styles.statusBadge} ${styles[projeto.statusCor]}`}>
                                {projeto.status}
                            </span>
                        </td>
        
                      <td className={`${styles.projCell} ${styles.colAcao} ${styles.colBotoes}`}>
                          <Link to={`/admin/Produto/ConsultaPC/Editar/${projeto._id}`} className={styles.botaoLink}> 
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
                nomeProduto={projetoSelecionado?.nomeProjeto}
                deletando={deletando}
              />

              <ModalAviso
                aberto={avisoAberto}
                onFechar={fecharAviso}
                mensagem={mensagemAviso} // 👈 vem do hook
              />
            </div>
    )
}

export default TabelaConsultaProjetosPC