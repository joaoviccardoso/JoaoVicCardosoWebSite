import styles from "./tabelaProjetos.module.css"

const projetos = [
  { id: "001", nome: "Doceria #001", status: "dev",       statusLabel: "Em Desenvolvimento" },
  { id: "002", nome: "Doceria #002", status: "concluido", statusLabel: "Concluído"           },
  { id: "003", nome: "Doceria #003", status: "dev",       statusLabel: "Em Desenvolvimento" },
  { id: "004", nome: "Doceria #004", status: "espera",    statusLabel: "Aguardando"          },
  { id: "005", nome: "Doceria #005", status: "pausado",   statusLabel: "Pausado"             },
];

const statusClass = {
  dev:       styles.statusDev,
  concluido: styles.statusConcluido,
  espera:    styles.statusEspera,
  pausado:   styles.statusPausado,
};

function TabelaProjetos(){
    function verMais(nome) {
        // Substitua pela sua lógica: abrir modal, navegar para rota, etc.
        alert("Ver mais: " + nome);
    }

    return (
        <div className={styles.tableWrapper}>
              <table className={styles.projTable}>
                <tbody>
                  {projetos.map((projeto) => (
                    <tr key={projeto.id} className={styles.projRow}>
        
                      <td className={`${styles.projCell} ${styles.colProjeto}`}>
                        <div className={styles.projLabel}>Projeto</div>
                        <div className={styles.projName}>{projeto.nome}</div>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colStatus}`}>
                        <div className={styles.projLabel}>Status</div>
                        <span className={`${styles.statusBadge} ${statusClass[projeto.status]}`}>
                          {projeto.statusLabel}
                        </span>
                      </td>
        
                      <td className={`${styles.projCell} ${styles.colAcao}`}>
                          <button
                            className={styles.verMaisBtn}
                            onClick={() => verMais(projeto.nome)}
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