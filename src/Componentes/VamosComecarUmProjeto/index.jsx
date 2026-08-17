import styled from "./vamosComecar.module.css";
import BotaoCta from "../Buttons/BotaoCta";

function VamosComecarUmProjeto({texto}){
    return(
        <section className={styled.containerVamosComecar}>
            <h4>{texto}</h4>
            <BotaoCta
                to={"/Contato"}
                child={"Vamos começar?"}
            />
        </section>
    )
}

export default VamosComecarUmProjeto