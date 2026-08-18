import { useEffect, useState } from "react";
import TabelaConsultaProjetosPC from "../../../../../Componentes/Tables/TabelaProdutosPc";
import CssAcaoProduto4 from "./consultaProdutoPc.module.css"
import { getAllProdutosPC } from "../../../../../services/produtosServices";
import { pegarUser } from "../../../../../Utils/pegarUser";
import MensagemBemVindo from "../../../../../Componentes/Layouts/MensagemDeBemVindo";

function AcaoConsultaPc(){
    const [userAdm, setUserAdm] = useState({});
    const [allProjetosPC, setProjetosPc] = useState([])

    const handleDeletar = (id) => {
        setProjetosPc(prev => prev.filter(p => p._id !== id));
    };

    useEffect(() => {
        setUserAdm(pegarUser())
    }, [])

    useEffect(()  => {
        async function fetchData(){
            try{
                const allProdutos = await getAllProdutosPC()
                setProjetosPc(allProdutos)
            } catch (error){
                alert("Erro ao buscar dados:", error);
            }
        }
        
        fetchData();
    }, [])

    return(
        <section>
            <MensagemBemVindo
                titulo={"Bem vindo"}
                user={userAdm.nomeCompleto}
                text={"Nesta área você pode visualizar, cadastrar e gerenciar todos os clientes do sistema. Utilize os filtros e a busca para encontrar clientes rapidamente e manter as informações sempre organizadas."}
            />

            <div>

            </div>

            <div className={CssAcaoProduto4.divTabelaConsutaProduto}>
                <TabelaConsultaProjetosPC
                    produtos={allProjetosPC}
                    onDeletar={handleDeletar}
                />
            </div>
        </section>
    )
}

export default AcaoConsultaPc