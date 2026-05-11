import { Link } from "react-router-dom";
import styles from "./tabelaConsultaProdutosPc.module.css"

function TabelaConsultaProjetosPC({produtos}){
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
        
                      <td className={`${styles.projCell} ${styles.colAcao}`}>
                        {console.log(projeto._id)}
                          <Link to={`/admin/Produto/ConsultaPC/Editar/${projeto._id}`} className={styles.botaoLink}> 
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

export default TabelaConsultaProjetosPC