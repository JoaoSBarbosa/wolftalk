import React from "react";
import "./ChatListItem.css";

export default () => {
  return (
    <div className="chatListItem">
      <img
        className="chatListItem--avatar"
        src="https://uploaddeimagens.com.br/images/004/631/055/full/avatar2.jpg?1696726173"
        alt="contato"
      />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatListItem--name">Maria</div>
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
