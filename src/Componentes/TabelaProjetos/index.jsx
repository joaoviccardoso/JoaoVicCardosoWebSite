import { Link } from "react-router-dom"
import styles from "./tabelaProjetos.module.css"

function TabelaProjetos({projetos}){
    
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
                        <Link to={`/admin/Produto/ConsultaPC/Editar/${projeto._id}`} className={styles.verMaisBtn}> 
                          Ver mais
                        </Link>
                      </td>
        
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    )
}

export default TabelaProjetos