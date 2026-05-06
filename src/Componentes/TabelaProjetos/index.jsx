import styles from "./tabelaProjetos.module.css"

function TabelaProjetos({projetos, onVerMais}){
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
                            onClick={() => onVerMais(projeto)}
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