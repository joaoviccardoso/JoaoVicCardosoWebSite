import { useParams } from "react-router-dom";
//import { useEffect,useState } from "react";
import CssDetalhe from "./detalhesDoProjeto.module.css"
import SecaoHeroDetalhes from "./sections/sectionHeroDetalhes";
import SecaoMotivacao from "./sections/sectionMotivacao";
import SecaoFuncionalidade from "./sections/sectionFuncionalidades";

const produtos = [
  {
    id: 1,
    titulo: "JVcode />",
    descricao: "Portfólio profissional desenvolvido com React + Vite para apresentar serviços, projetos e facilitar o contato com clientes. Possui área exclusiva com autenticação e dashboards para cliente e administrador.",
    motivo: "Criado para centralizar meus projetos e demonstrar minhas habilidades como desenvolvedor front-end e UI Designer, além de gerar oportunidades com clientes reais.",
    tecnologias: ["React", "CSS", "JavaScript"],
    funcionalidades: [
      "Sistema de cadastro e login com autenticação",
      "Dashboard do cliente para acompanhar projetos",
      "Dashboard administrativo para gerenciamento",
      "Exibição de projetos com detalhes",
      "Seções de serviços, sobre mim e contato",
    ],
    imagens: [
      "/images/Login.png",
      "/images/dashboardCliente.png",
      "/images/dasaboardAdm.png",
      "/images/exibicaoDeProjetos.png",
      "/images/paginas.png"
    ]
  },

  {
    id: 2,
    titulo: "Art Vida Capoeira",
    descricao: "Landing page desenvolvida para a escola Art Vida Capoeira, com foco em apresentar a história, aulas e facilitar o contato com novos alunos. O site transmite tradição, cultura e profissionalismo, sendo totalmente responsivo e otimizado para SEO.",
    motivo: "Criado para ajudar a escola a ter presença digital, atrair novos alunos e valorizar a cultura da capoeira na cidade de Conchal-SP.",
    tecnologias: ["Html", "CSS", "JavaScript"],
    funcionalidades: [
      {
        titulo: "Funcionalidade 1",
        descricao : "Design moderno e totalmente responsivo"
      },
      {
        titulo: "Funcionalidade 2",
        descricao : "Seção de apresentação da história da escola"
      },
      {
        titulo: "Funcionalidade 3",
        descricao : "Dashboard administrativo para gerenciamento"
      },
      {
        titulo: "Funcionalidade 4",
        descricao : "Carrossel interativo com imagens das aulas"
      },
      {
        titulo: "Funcionalidade 5",
        descricao : "Integração com Google Maps para localização"
      },
    ],
    imagens: "/images/homeArtVida.png",
  },

  {
    id: 3,
    titulo: "Cálculo Rápido",
    descricao: "Aplicação web desenvolvida para facilitar cálculos do dia a dia, incluindo cálculos matemáticos, financeiros, trabalhistas e acadêmicos com explicação passo a passo.",
    motivo: "Projeto criado para praticar lógica de programação, POO e organização de código, além de oferecer uma ferramenta útil para usuários realizarem cálculos rapidamente.",
    tecnologias: ["JavaScript", "Html", "CSS",],
    funcionalidades: [
        "Interface moderna e intuitiva",
        "Realização de diversos tipos de cálculos",
        "Histórico de cálculos salvo no navegador",
        "Explicação passo a passo dos cálculos"
    ],
    imagens: [
      "/images/homeCalculorapido.png",
      "/images/calculos.png",
      "/images/historico.png",
      "/images/comoFazer.png",
    ]
  },

  {
    id: 4,
    titulo: "Pokédex Interativa",
    descricao: "Aplicação web que consome a API PokéAPI para exibir informações detalhadas dos Pokémon, incluindo sistema de equipe e cadeia evolutiva.",
    motivo: "Projeto desenvolvido para praticar consumo de API, manipulação do DOM e lógica com JavaScript.",
    tecnologias: ["JavaScript", "Html", "CSS"],
    funcionalidades: [
      "Consumo de API para buscar dados dos Pokémon",
      "Exibição de cadeia evolutiva",
      "Sistema de criação de equipe com limite de 6 Pokémon"
    ],
    imagens: [
      "/images/PokemonsHome.png",
      "/images/cadeiaEvolutiva.png",
      "/images/equipePokemon.png"
    ]
  }
]


function PaginaDetalheDosProjetos(){
    const { id } = useParams();

    // Busca o produto pelo id da URL
    const produto = produtos.find(p => p.id === Number(id));
    
    if (!produto) {
        return <p>Projeto não encontrado.</p>;
    }
    /*useEffect(() => {
        async function buscarDados() {
            try {
                const res = await fetch(`http://localhost:3001/produtos/${id}`);
                const data = await res.json();
                setProduto(data);
            } catch (erro) {
                console.error(erro);
            }
        }
    
        buscarDados();
    }, [id]);*/

    if (!produto) {
        return <p>Carregando...</p>;
    }

    return (
        <section className={CssDetalhe}>
            <SecaoHeroDetalhes
                titulo={produto.titulo}
                descricao={produto.descricao}
                tecnologias={produto.tecnologias}
            />
            <div className={CssDetalhe.divVerdeMotivacao}>
                <SecaoMotivacao
                    textoMotivacao={produto.motivo}
                />
            </div>
            <SecaoFuncionalidade
                funcionalidades={produto.funcionalidades}
                tecnologias={produto.tecnologias}
            />
        </section>
    )
    
}

export default PaginaDetalheDosProjetos