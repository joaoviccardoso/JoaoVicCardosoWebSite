import { Link } from "react-router-dom";
import styles from "./tabelaConsultaCliente.module.css"

function TabelaConsultaCliente({clientes}){
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
        
                      <td className={`${styles.projCell} ${styles.colAcao}`}>
                          <Link to={`/admin/Cliente/ConsultarCliente/Editar/${projeto._id}`} className={styles.botaoLink}> 
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

export default TabelaConsultaCliente