import React from "react";
import "./App.css";

import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

export default () => {
  return (
    <div className="app-window">
      <aside className="sidebar ">
        <header>
          <img
            className="header--avatar"
            src="https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039"
            alt=""
          />

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
        <div className="chatList">...</div>
      </aside>
      <section className="content-area">Área de conteúdo</section>
    </div>
  );
};
