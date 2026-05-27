import { useEffect, useState } from "react";
import CssAcaoProduto2 from "./consultaProdutoMp.module.css"
import { jwtDecode } from "jwt-decode";
import { getAllProdutosMP } from "../../../../../services/produtoMp";
import TabelaConsultaProjetosPC from "../../../../../Componentes/TabelaProdutosPc";
import TabelaConsultaProjetosMP from "../../../../../Componentes/TabelaProdutosMP";

function AcaoConsultaProdutoMp(){
    const [userAdm, setUserAdm] = useState({});
    const [allProjetosMP, setProjetosMP] = useState([])

    const handleDeletar = (id) => {
        setProjetosMP(prev => prev.filter(p => p._id !== id));
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;
                    
            // pega só o necessário do token
        const decoded = jwtDecode(token);
        setUserAdm(decoded); // decoded tem { id, role }
    }, []);

    useEffect(()  => {
            async function fetchData(){
                try{
                    const allProdutos = await getAllProdutosMP()
                    setProjetosMP(allProdutos)
                } catch (error){
                    alert("Erro ao buscar dados:", error);
                }
            }
            
            fetchData();
        }, [])

    return(
        <section>
            <div className={CssAcaoProduto2.divTextoEhTitulo}>
                <h1>Bem vindo, {`${userAdm.role}`}</h1>
                <p>Nesta área você pode visualizar, cadastrar e gerenciar todos os clientes do sistema. Utilize os filtros e a busca para encontrar clientes rapidamente e manter as informações sempre organizadas.</p>
            </div>

            <div>

            </div>

            <div className={CssAcaoProduto2.divTabelaConsutaProduto}>
                <TabelaConsultaProjetosMP
                    produtos={allProjetosMP}
                    onDeletar={handleDeletar}
                />
            </div>
        </section>
    )
}

export default AcaoConsultaProdutoMp