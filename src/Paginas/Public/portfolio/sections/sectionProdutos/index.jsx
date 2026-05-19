import { useState } from "react"
import CardProduto from "../../../../../Componentes/CardProdutos"
import CssProduto from "./produtos.module.css"
import LinkParaNavegacao from "../../../../../Componentes/Links/link"
import menuCelular from "../../../../../assets/menuCelular.svg"

const produtos = [
  {
    id: 1,
    titulo: "JVcode />",
    descricao: "Portfólio profissional desenvolvido com React + Vite para apresentar serviços, projetos e facilitar o contato com clientes. Possui área exclusiva com autenticação e dashboards para cliente e administrador.",
    motivo: "Criado para centralizar meus projetos e demonstrar minhas habilidades como desenvolvedor front-end e UI Designer, além de gerar oportunidades com clientes reais.",
    tecnologias: ["React", "Vite", "Styled Components", "MongoDB", "JavaScript", "HTML5", "CSS3"],
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
  tecnologias: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "AOS (Animate On Scroll)"],
  funcionalidades: [
    "Design moderno e totalmente responsivo",
    "Seção de apresentação da história da escola",
    "Exibição das turmas (adulto, kids e projetos sociais)",
    "Carrossel interativo com imagens das aulas",
    "Integração com Google Maps para localização"
  ],
  imagens: [
    "/images/homeCapoeira.png",
    "/images/NossaHistoria.png",
    "/images/turmas.png",
    "/images/carrocel.png",
    "/images/maps.png"
  ]
},

  {
    id: 3,
    titulo: "Cálculo Rápido",
    descricao: "Aplicação web desenvolvida para facilitar cálculos do dia a dia, incluindo cálculos matemáticos, financeiros, trabalhistas e acadêmicos com explicação passo a passo.",
    motivo: "Projeto criado para praticar lógica de programação, POO e organização de código, além de oferecer uma ferramenta útil para usuários realizarem cálculos rapidamente.",
    tecnologias: ["JavaScript", "HTML5", "CSS3",],
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
  },

  

];


function Produtos(){
    const [produto] = useState(produtos);

    /*useEffect(() => {
        async function buscarDados() {
            try {
                const res = await fetch("http://localhost:3001/produtos");
                const data = await res.json();
                setProduto(data);
            } catch (erro) {
                console.log(erro);
            }
        }

        buscarDados();
    }, []);*/

   
    return(
        <section className={CssProduto.secaoProdutos}>
            <div className={CssProduto.filtroProdutos}>
                <span>
                    <LinkParaNavegacao
                        child="Todos"
                    />

                    <LinkParaNavegacao
                        child="UI/UX"
                    />

                    <LinkParaNavegacao
                        child="Projetos"
                    />
                </span>
                <button className="btn d-sm-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <img src={menuCelular} alt="menu para celular" />
                </button>
            </div>

            <ul className={CssProduto.listaProdutos}>
                {produto.map(p => (
                    
                    <li key={p.id}>
                        <CardProduto
                            titulo={p.titulo}
                            descricao={p.descricao}
                            imgUrl={p.imagens[0]}
                            idBtn={p.id}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Produtos