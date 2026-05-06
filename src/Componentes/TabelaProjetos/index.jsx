import styles from "./tabelaProjetos.module.css"

/*const projetos = [
  { id: "001", nome: "Doceria #001", status: "dev",       statusLabel: "Em Desenvolvimento" },
  { id: "002", nome: "Doceria #002", status: "concluido", statusLabel: "Concluído"           },
  { id: "003", nome: "Doceria #003", status: "dev",       statusLabel: "Em Desenvolvimento" },
  { id: "004", nome: "Doceria #004", status: "espera",    statusLabel: "Aguardando"          },
  { id: "005", nome: "Doceria #005", status: "pausado",   statusLabel: "Pausado"             },
];*/


function TabelaProjetos({projetos}){
    function verMais(nome) {
        // Substitua pela sua lógica: abrir modal, navegar para rota, etc.
        alert("Ver mais: " + nome);
    }

    return (
        <div className={styles.tableWrapper}>
              <table className={styles.projTable}>
                <tbody>
                  {projetos.map((projeto) => (
                    <tr key={projeto._id} className={styles.projRow}>
        
                      <td className={`${styles.projCell} ${styles.colProjeto}`}>
                        <div className={styles.projLabel}>Projeto</div>
                        <div className={styles.projName}>{projeto.nomeProjeto}</div>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colStatus}`}>
                        <div className={styles.projLabel}>Status</div>
                        <span className={`${styles.statusBadge} ${styles[projeto.statusCor]}`}>
                          {projeto.status}
                        </span>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colAcao}`}>
                          <button
                            className={styles.verMaisBtn}
                            onClick={() => verMais(projeto.nomeProjeto)}
                          >
                            ver mais
                          </button>
                      </td>
        
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    )
}

export default TabelaProjetos