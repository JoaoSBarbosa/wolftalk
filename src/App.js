// Import do sistema
import React, { useState, useEffect } from "react";
// Import styles
import "./App.css";

// Import de componentes
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

// Import bibliotecas
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

export default () => {
  // Const states
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
    {
      chatId: 2,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
    {
      chatId: 3,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
    {
      chatId: 4,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
    {
      chatId: 5,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
    {
      chatId: 6,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
    {
      chatId: 7,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
    {
      chatId: 8,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
    {
      chatId: 9,
      titulo: "Fulano de Tal",
      image:
        "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <aside className="sidebar ">
        <header>
          <img className="header--avatar" src="avatar.jpg" alt="Avatar user" />

          <div className="header-buttons">
            <div className="header--btn">
              <DonutLargeIcon className="header--icon" />
            </div>
            <div className="header--btn">
              <ChatIcon className="header--icon" />
            </div>
            <div className="header--btn">
              <MoreVertIcon className="header--icon" />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search--input">
            <SearchIcon className="header--icon search--icon" />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            ></input>
          </div>
        </div>

        <div className="chatList">
          {chatList.map((item, key) => (
            <ChatListItem
              key={key}
              active={activeChat.chatId === chatList[key].chatId}
              onClickProps={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </aside>
      <section className="content-area">
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId == undefined && <ChatIntro />}
      </section>
    </div>
  );
};
