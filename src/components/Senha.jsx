import "./Senha.css";
import React, { useState } from "react";

function Senha() {
  const [normal, setNormal] = useState(0);
  const [preferencial, setPreferencial] = useState(0);
  const [filaNormal, setFilaNormal] = useState([]);
  const [filaPref, setFilaPref] = useState([]);
  const [chamada, setChamada] = useState("");

  // Gera uma nova senha normal e adiciona na fila
  const gerarNormal = () => {
    const novaSenha = `N-${String(normal + 1).padStart(3, "0")}`;
    setFilaNormal([...filaNormal, novaSenha]);
    setNormal(normal + 1);
  };

  // Gera uma nova senha preferencial e adiciona na fila
  const gerarPreferencial = () => {
    const novaSenha = `P-${String(preferencial + 1).padStart(3, "0")}`;
    setFilaPref([...filaPref, novaSenha]);
    setPreferencial(preferencial + 1);
  };

  // Chama a próxima senha, preferencial primeiro
  const chamar = () => {
    if (filaPref.length > 0) {
      setChamada(filaPref[0]);
      setFilaPref(filaPref.slice(1));
    } else if (filaNormal.length > 0) {
      setChamada(filaNormal[0]);
      setFilaNormal(filaNormal.slice(1));
    } else {
      setChamada("Sem senhas na fila");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Farmácia - Senhas</h1>
      </header>

      <div className="botoes">
        <button
          onClick={gerarNormal}
          className="btn-normal"
          aria-label="Gerar senha normal"
        >
          Senha Normal
          <span className="badge">{filaNormal.length}</span>
        </button>

        <button
          onClick={gerarPreferencial}
          className="btn-preferencial"
          aria-label="Gerar senha preferencial"
        >
          Senha Preferencial
          <span className="badge">{filaPref.length}</span>
        </button>

        <button
          onClick={chamar}
          className="btn-chamar"
          aria-label="Chamar próxima senha"
        >
          Chamar Senha
        </button>
      </div>

      <div
        className={`display ${
          chamada === "Sem senhas na fila" ? "sem-fila" : ""
        }`}
      >
        {chamada === "" ? "Nenhuma senha chamada" : `👉 ${chamada}`}
      </div>
    </div>
  );
}

export default Senha;
