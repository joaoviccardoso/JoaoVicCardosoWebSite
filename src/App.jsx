import styled from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"

function App() {
  const FundoPagina = styled.div`
    background: linear-gradient(#121212, #232323);
    width: 100%;
    height: 100vh;
  `

  return (
    <FundoPagina>
      <EstilosGlobais/>
    </FundoPagina>
  )
}

export default App
