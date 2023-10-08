import React, { useState, useEffect } from "react";
import "./App.css";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

export default () => {
  const [chatList, setChatList] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
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
            <ChatListItem key={key} />
          ))}
        </div>
      </aside>
      <section className="content-area">
        <ChatIntro />
      </section>
    </div>
  );
};
