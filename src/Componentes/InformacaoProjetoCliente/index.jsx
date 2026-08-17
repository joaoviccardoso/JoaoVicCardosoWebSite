import styled from "./informacaoProjetoCliente.module.css";

function InformacaoProjetoCliente({nomeProjeto, status, dateEntrega ,obser, linkContrato, linkDemo}){
    return(
        <section className={styled}>
            <h2>{nomeProjeto}</h2>
            
            <p className={styled.paragrafo}><strong>Status:</strong> {status}</p>
            
            <p className={styled.paragrafoData}><strong>Data de entrega:</strong> {new Date(dateEntrega).toLocaleDateString("pt-BR")}</p>
            
            <p className={styled.paragrafo}><strong>Observação:</strong> {obser}</p>
            
            <p className={styled.paragrafo}>
                <strong>Contrato:</strong>{" "}
                <a href={linkContrato} target="_blank" rel="noreferrer">
                        Acessar contrato
                </a>
            </p>
            
            <p className={styled.paragrafo}>
                <strong>Demo:</strong>{" "}
                <a href={linkDemo} target="_blank" rel="noreferrer">
                    Ver demo
                </a>
            </p>
        </section>
    )
}

export default InformacaoProjetoCliente