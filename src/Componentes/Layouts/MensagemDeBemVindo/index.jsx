import styled from "./mensagemBemVindo.module.css";

function MensagemBemVindo({titulo, user , text}){
    return(
        <div className={styled}> 
            <h4>{titulo}, {user}</h4>
            <p>{text}</p>
        </div>
    )
}

export default MensagemBemVindo