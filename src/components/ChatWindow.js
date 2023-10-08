import React, { useState } from "react";
import "./ChatWindow.css";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import EmojiPicker from "emoji-picker-react";
export default () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const handleEmojiClick = () => {};

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };
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

      <section
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "450px" : "0px" }}
      >
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </section>

      <section className="chatWindow--footer">
        <div className="chatWindow--pre">
          {emojiOpen && (
            <div className="chatWindow--btn" onClick={handleCloseEmoji}>
              <CloseIcon className="chaticon" />
            </div>
          )}

          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <EmojiEmotionsIcon
              className="chaticon"
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
          {/* {!emojiOpen && (
            <div className="chatWindow--btn" onClick={handleOpenEmoji}>
              <EmojiEmotionsIcon className="chaticon" />
            </div>
          )} */}
        </div>

        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
          />
        </div>

        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon className="chaticon" />
          </div>
        </div>
      </section>
    </div>
  );
};
