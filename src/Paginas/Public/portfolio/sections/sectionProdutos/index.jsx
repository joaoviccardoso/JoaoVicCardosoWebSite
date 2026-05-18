import { useState } from "react"
import CardProduto from "../../../../../Componentes/CardProdutos"
import CssProduto from "./produtos.module.css"
import LinkParaNavegacao from "../../../../../Componentes/Links/link"
import menuCelular from "../../../../../assets/menuCelular.svg"

const produtos = [
  {
    id: 1,
    titulo: "JVcode />",
    descricao: "O DevTrack é uma aplicação web desenvolvida para apresentar meus projetos, habilidades e soluções digitais. Além de funcionar como portfólio, a plataforma oferece uma área exclusiva para clientes, com dashboard interativo que permite acompanhar o andamento de seus projetos em tempo real.",
    motivo: "Este projeto foi criado com o objetivo de centralizar meus trabalhos e demonstrar, na prática, minhas habilidades como desenvolvedor.",
    tecnologias: ["React", "GSAP", "Bootstrap"],
    funcionalidades: [
      "Visualização de projetos desenvolvidos com detalhes e imagens",
      "Dashboard do cliente para acompanhamento do status dos projetos",
      "Interface interativa com animações modernas utilizando GSAP"
    ],
    imagens: [
      "/images/TelaHomeMeuProjeto.png",
      "/images/TelaDashBoardAdm.png",
      "/images/TelaDeCadastros.png"
    ]
  },
  {
    id: 2,
    titulo: "DoceGest />",
    descricao: "O DoceGest é uma aplicação web desenvolvida para gerenciar pedidos e produtos de uma doceria. A plataforma permite visualizar o cardápio, registrar pedidos e facilitar a comunicação com clientes via WhatsApp.",
    motivo: "Este projeto foi criado com o objetivo de ajudar pequenas docerias a organizarem seus pedidos e produtos de forma simples e eficiente.",
    tecnologias: ["Html", "CSS", "JavaScript"],
    funcionalidades: [
      "Visualização de produtos com imagens, preços e descrições",
      "Realização de pedidos com envio direto para o WhatsApp",
      "Interface simples e responsiva para mobile e desktop"
    ],
    imagens: [
      "/images/TelaHomeDoceria.png",
      "/images/TelaDashBoardDoceria.png",
      "/images/TelaPedidosDoceria.png"
    ]
  },
  {
    id: 3,
    titulo: "Capoeira Art Vida",
    descricao: "O Capoeira Art Vida é uma aplicação web desenvolvida para apresentar o trabalho do Professor Carlos, destacando aulas, eventos e a filosofia da capoeira. O site funciona como uma vitrine digital, permitindo que novos alunos conheçam o projeto e entrem em contato بسهولة.",
    motivo: "Este projeto foi criado com o objetivo de fortalecer a presença online do Capoeira Art Vida, facilitar o contato com novos alunos e divulgar a cultura da capoeira.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    funcionalidades: [
        "Apresentação institucional do projeto e do professor Carlos",
        "Seção de aulas com horários e informações",
        "Galeria de imagens dos treinos e eventos",
        "Formulário de contato integrado para novos alunos",
        "Layout responsivo para celular, tablet e desktop"
    ],
    imagens: [
        "/images/inicioArtVidaSite.png",
        "/images/aulasArtVida.png",
        "/images/mapsArtVida.png"
    ]
    }
]


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