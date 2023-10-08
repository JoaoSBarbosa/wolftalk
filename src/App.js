import React from "react";
import "./App.css";

export default () => {
  return (
    <div className="app-window">
      <aside className="sidebar ">
        <header>
          <div>
            <img
              className="header--avatar"
              src="https://uploaddeimagens.com.br/images/004/631/029/full/avatar.jpg?1696723039"
              alt=""
            />
          </div>
          <div className="header-buttons">btn</div>
        </header>
        <div className="search">...</div>
        <div className="chatList">...</div>
      </aside>
      <section className="content-area">Área de conteúdo</section>
    </div>
  );
};
