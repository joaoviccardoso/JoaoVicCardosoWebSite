import { useState, useRef, useEffect } from "react"
import CssFuncio from "./funcionalidades.module.css"
import CardFuncionalidade from "../../../../../Componentes/CardFuncionalidade"

function useVisiveisPorTela() {
    const obterVisiveis = () => {
        if (typeof window === "undefined") return 3
        if (window.innerWidth <= 560) return 1
        if (window.innerWidth <= 880) return 2
        return 3
    }

    const [visiveis, setVisiveis] = useState(obterVisiveis)

    useEffect(() => {
        const handler = () => setVisiveis(obterVisiveis())
        window.addEventListener("resize", handler)
        return () => window.removeEventListener("resize", handler)
    }, [])

    return visiveis
}

function SecaoFuncionalidade({ funcionalidade, imagens }) {
    const [indiceAtivo, setIndiceAtivo] = useState(0)
    const arrastando = useRef(false)
    const inicioArrasto = useRef(0)
    const visiveis = useVisiveisPorTela()

    const total = funcionalidade?.length ?? 0
    const maxIndice = Math.max(0, total - visiveis)

    const irPara = (index) => {
        const novoIndice = Math.min(Math.max(index, 0), maxIndice)
        setIndiceAtivo(novoIndice)
    }

    // Ao redimensionar, garante que indiceAtivo não fique fora dos limites
    useEffect(() => {
        setIndiceAtivo((prev) => Math.min(prev, maxIndice))
    }, [maxIndice])

    const proximo = () => irPara(indiceAtivo + 1)
    const anterior = () => irPara(indiceAtivo - 1)

    const aoIniciarArrasto = (e) => {
        arrastando.current = true
        inicioArrasto.current = e.touches ? e.touches[0].clientX : e.clientX
    }

    const aoFinalizarArrasto = (e) => {
        if (!arrastando.current) return
        arrastando.current = false
        const fimX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
        const delta = inicioArrasto.current - fimX
        if (delta > 60) proximo()
        else if (delta < -60) anterior()
    }

    const BotaoAnterior = ({ className }) => (
        <button
            className={`${CssFuncio.botaoNav} ${className ?? ""}`}
            onClick={anterior}
            disabled={indiceAtivo === 0}
            aria-label="Cards anteriores"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
            </svg>
        </button>
    )

    const BotaoProximo = ({ className }) => (
        <button
            className={`${CssFuncio.botaoNav} ${className ?? ""}`}
            onClick={proximo}
            disabled={indiceAtivo >= maxIndice}
            aria-label="Próximos cards"
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
            </svg>
        </button>
    )

    if (!funcionalidade?.length) return null

    return (
        <section className={CssFuncio.secaoFuncionalidade}>

            <div className={CssFuncio.cabecalho}>
                <div className={CssFuncio.cabecalhoTexto}>
                    <h3 className={CssFuncio.titulo}>Funcionalidades Principais</h3>
                    <p className={CssFuncio.descricao}>
                        Explore as funcionalidades desenvolvidas para tornar a experiência mais fluida e eficiente.
                        Cada detalhe foi pensado para facilitar o uso e entregar valor de forma simples e intuitiva.
                    </p>
                </div>

                {/* Botões visíveis apenas no mobile */}
                <div className={CssFuncio.botoesNavMobile}>
                    <BotaoAnterior />
                    <BotaoProximo />
                </div>
            </div>

            {/* Carrossel — botões laterais visíveis apenas no desktop */}
            <div className={CssFuncio.carrosselWrapper}>
                <BotaoAnterior className={CssFuncio.botaoNavLateral} />

                <div
                    className={CssFuncio.viewport}
                    onMouseDown={aoIniciarArrasto}
                    onMouseUp={aoFinalizarArrasto}
                    onTouchStart={aoIniciarArrasto}
                    onTouchEnd={aoFinalizarArrasto}
                >
                    <ul
                        className={CssFuncio.trilha}
                        style={{
                            transform: `translateX(calc(-${indiceAtivo} * (100% / ${visiveis})))`,
                        }}
                    >
                        {funcionalidade.map((texto, index) => (
                            <li
                                key={index}
                                className={CssFuncio.item}
                                style={{ flex: `0 0 calc(100% / ${visiveis})` }}
                            >
                                <CardFuncionalidade
                                    titulo={`Funcionalidade ${index + 1}`}
                                    descricao={texto}
                                    imgUrl={imagens[index]}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <BotaoProximo className={CssFuncio.botaoNavLateral} />
            </div>

            <div className={CssFuncio.indicadores}>
                {Array.from({ length: maxIndice + 1 }).map((_, i) => (
                    <button
                        key={i}
                        className={`${CssFuncio.indicador} ${i === indiceAtivo ? CssFuncio.indicadorAtivo : ""}`}
                        onClick={() => irPara(i)}
                        aria-label={`Ir para página ${i + 1}`}
                    />
                ))}
            </div>

        </section>
    )
}

export default SecaoFuncionalidade