/* global SpeechRecognition, webkitSpeechRecognition */

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
  let recognition = null;

  if ("SpeechRecognition" in window) {
    recognition = new SpeechRecognition();
  } else if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
  } else {
    console.log(
      "O seu navegador não oferece suporte ao Reconhecimento de Fala."
    );
  }
  //  States
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [listening, setListening] = useState(false);
  //  Funções
  const handleEmojiClick = (emojiObject) => {
    setInputText((prevInputText) => {
      return prevInputText !== ""
        ? prevInputText + emojiObject.emoji
        : emojiObject.emoji;
    });
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleVoicTextClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };

      recognition.onresult = (event) => {
        setInputText(event.results[0][0].transcript);
      };

      recognition.start();
    }
  };

  const handleSendClick = () => {};
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
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Digite uma mensagem"
          />
        </div>

        <div className="chatWindow--pos">
          {inputText === "" && (
            <div className="chatWindow--btn" onClick={handleVoicTextClick}>
              <KeyboardVoiceIcon
                className="chaticon"
                style={{ color: listening ? "#126ece" : "#919191" }}
              />
            </div>
          )}

          {inputText !== "" && (
            <div className="chatWindow--btn" onClick={handleSendClick}>
              <SendIcon className="chaticon" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
