import { useState } from "react";
import BotaoEmergencia from "../../componentes/botaoEmergencia/botaoEmergencia";
import styles from "./diario.module.css";

function Diario({ onNavegar }) {
  const [data, setData] = useState(new Date().toISOString().slice(0, 10));
  const [texto, setTexto] = useState("");

  function handleSalvar() {
    if (!texto) {
      alert("Escreva algo antes de salvar!");
      return;
    }
    alert("Relato salvo com sucesso!");
    setTexto("");
  }

  return (
    <div className={styles["diario-tela"]}>
      <button className={styles["diario-voltar"]} onClick={() => onNavegar("home")}>← voltar</button>
      <h2 className={styles["diario-titulo"]}>Diário</h2>
      <input
        className={styles["diario-data"]}
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <div className={styles["diario-card"]}>
        <textarea
          className={styles["diario-textarea"]}
          placeholder="Escreva sobre o seu dia..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>
      <button className={styles["diario-salvar"]} onClick={handleSalvar}>salvar</button>
      <BotaoEmergencia />
    </div>
  );
}

export default Diario;
