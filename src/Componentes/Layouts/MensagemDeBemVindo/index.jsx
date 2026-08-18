import styled from "./mensagemBemVindo.module.css";

function MensagemBemVindo({titulo, user , text}){
    return(
        <div className={styled.containerMensagens}> 
            <h4>{titulo}, {user}</h4>
            <p className={styled.p}>{text}</p>
        </div>
    )
}

export default MensagemBemVindo