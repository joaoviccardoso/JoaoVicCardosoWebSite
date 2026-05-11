import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import TabelaConsultaProjetosPC from "../../../../../Componentes/TabelaProdutosPc";
import CssAcaoProduto4 from "./consultaProdutoPc.module.css"
import { getAllProdutosPC } from "../../../../../services/produtosServices";


function AcaoConsultaPc(){
    const [userAdm, setUserAdm] = useState({});
    const [allProjetosPC, setProjetosPc] = useState([])

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
                const allProdutos = await getAllProdutosPC()
                console.log(allProdutos)
                setProjetosPc(allProdutos)
            } catch (error){
                alert("Erro ao buscar dados:", error);
            }
        }
        
        fetchData();
    }, [])

    return(
        <section>
            <div className={CssAcaoProduto4.divTextoEhTitulo}>
                <h1>Bem vindo, {`${userAdm.role}`}</h1>
                <p>Nesta área você pode visualizar, cadastrar e gerenciar todos os clientes do sistema. Utilize os filtros e a busca para encontrar clientes rapidamente e manter as informações sempre organizadas.</p>
            </div>

            <div>

            </div>

            <div className={CssAcaoProduto4.divTabelaConsutaProduto}>
                <TabelaConsultaProjetosPC
                    produtos={allProjetosPC}
                />
            </div>
        </section>
    )
}

export default AcaoConsultaPc