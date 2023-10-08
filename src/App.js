// Import do sistema
import React, { useState, useEffect } from "react";
// Import styles
import "./App.css";

// Import de componentes
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";

// Import bibliotecas
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Login from "./components/login";

export default () => {
  // Const states

  const [user, setUser] = useState({
    id: 1234,
    avatar:
      "https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039",
    name: "João Barbosa",
  });
  const [chatList, setChatList] = useState([
    {
      chatId: 1,
      titulo: "Ellie",
      image:
        "https://uploaddeimagens.com.br/images/004/631/174/full/avatar0.jpg?1696765805",
    },
    {
      chatId: 2,
      titulo: "Maria",
      image:
        "https://uploaddeimagens.com.br/images/004/631/055/full/avatar2.jpg?1696726173",
    },
    {
      chatId: 3,
      titulo: "Kratos",
      image:
        "https://uploaddeimagens.com.br/images/004/631/175/full/kraton.jpg?1696765999",
    },
    {
      chatId: 4,
      titulo: "Fernando",
      image:
        "https://uploaddeimagens.com.br/images/004/631/164/full/avatar4.jpg?1696765281",
    },
    {
      chatId: 5,
      titulo: "Welliane",
      image:
        "https://uploaddeimagens.com.br/images/004/631/165/full/avatar5.jpg?1696765305",
    },
    {
      chatId: 6,
      titulo: "Lucas",
      image:
        "https://uploaddeimagens.com.br/images/004/631/169/full/avatar6.jpg?1696765528",
    },
    {
      chatId: 7,
      titulo: "Jesica",
      image:
        "https://uploaddeimagens.com.br/images/004/631/170/full/avatar7.jpg?1696765559",
    },
    {
      chatId: 8,
      titulo: "Juan",
      image:
        "https://uploaddeimagens.com.br/images/004/631/171/full/avatar8.jpg?1696765579",
    },
    {
      chatId: 9,
      titulo: "Gabi",
      image:
        "https://uploaddeimagens.com.br/images/004/631/172/full/avatar9.jpg?1696765595",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});

  const [showNewChat, setShowNewChat] = useState(false);

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  const handleLoginData = async (infoUser) => {
    let newUser = {
      id: infoUser.uid,
      name: infoUser.displayName,
      avatar: infoUser.photoURL,
    };
  };
  if (user === null) {
    return <Login />;
  }
  return (
    <div className="app-window">
      <aside className="sidebar ">
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="Avatar user" />

          <div className="header-buttons">
            <div className="header--btn">
              <DonutLargeIcon className="header--icon" />
            </div>
            <div onClick={handleNewChat} className="header--btn">
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
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClickProps={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </aside>
      <section className="content-area">
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat.chatId == undefined && <ChatIntro />}
      </section>
    </div>
  );
};
