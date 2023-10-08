import React, { useState } from "react";
import "./NewChat.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default ({ user, chatlist, show, setShow }) => {
  const [contactList, setContactList] = useState([
    {
      id: 123,
      avatar:
        "https://uploaddeimagens.com.br/images/004/631/174/full/avatar0.jpg?1696765805",
      name: "Ellie",
    },
    {
      id: 12345,
      avatar:
        "https://uploaddeimagens.com.br/images/004/631/055/full/avatar2.jpg?1696726173",
      name: "Maria",
    },
    {
      id: 123456,
      avatar:
        "https://uploaddeimagens.com.br/images/004/631/175/full/kraton.jpg?1696765999",
      name: "Kratos",
    },
    {
      id: 12345,
      avatar:
        "https://uploaddeimagens.com.br/images/004/631/055/full/avatar2.jpg?1696726173",
      name: "Maria",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="newChat" style={{ left: show ? "0" : "-415px" }}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backbutton">
          <ArrowBackIosIcon className="backbutton" />
        </div>
        <div className="newChat--headtitle">Nova conversa</div>
      </div>

      {/* Lista de contatos */}
      <div className="newChat--list">
        {contactList.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img
              className="newChat--itemavatar"
              src={item.avatar}
              alt={item.nome}
            />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
