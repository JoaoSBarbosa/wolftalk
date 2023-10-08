import React from "react";
import "./ChatWindow.css";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
export default () => {
  return (
    <div className="chatWindow">
      <section className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--headeravatar"
            src="https://uploaddeimagens.com.br/images/004/631/174/full/avatar0.jpg?1696765805"
            alt="avatar da conversa"
          />
          <div className="chatWindow--headername">Ellie The last</div>
        </div>
        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon className="chaticon" />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon className="chaticon" />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon className="chaticon" />
          </div>
        </div>
      </section>
      <section className="chatWindow--body"></section>
      <section className="chatWindow--footer"></section>
    </div>
  );
};
