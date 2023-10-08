import React from "react";
import "./ChatListItem.css";

export default ({ onClickProps, active, data }) => {
  return (
    <div
      className={`chatListItem ${active ? "active" : ""}`}
      onClick={onClickProps}
    >
      <img className="chatListItem--avatar" src={data.image} alt="contato" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">{data.titulo}</div>
          <div className="chatListItem--date">21:46</div>
        </div>

        <div className="chatListItem--line">
          <div className="chatListItem--lastMsg">
            <p>
              Oi! Tudo bem? Estou ansiosa para o nosso encontro amanhã! Você viu
              o novo filme que está em cartaz? Parece incrível! Mal posso
              esperar para compartilhar isso com você!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
