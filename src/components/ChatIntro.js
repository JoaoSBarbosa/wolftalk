import React from "react";
import "./ChatIntro.css";

export default () => {
  return (
    <div className="chatIntro">
      <img
        className="chatIntro--img"
        src="fique_conectado.png"
        alt="fique conectado"
      />
      <h1>Fique Conectado com Facilidade</h1>
      <h2>
        O WolfTalkchat mantém seu celular sincronizado para sua comodidade.
        Conecte-se a uma rede Wi-Fi e aproveite ao máximo sem se preocupar com
        os dados.
      </h2>
    </div>
  );
};
