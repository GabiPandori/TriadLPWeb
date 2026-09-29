import { useState } from "react";
import styles from "./eventos.module.css";

const eventosMock = [
  { idEvento: 1, tema: "Imersão Método Evo", data: "30/04/2025", descricao: "Uma experiência intensa de autoconhecimento em grupo." },
  { idEvento: 2, tema: "Desperte Seu Poder", data: "20/05/2024", descricao: "Workshop para despertar seu potencial máximo." },
  { idEvento: 3, tema: "Mentalidade de Cura", data: "04/08/2025", descricao: "Processo terapêutico de grupo para trabalhar traumas." },
  { idEvento: 4, tema: "O Poder da Ação", data: "31/03/2025", descricao: "Aprenda a transformar decisões em resultados concretos." },
];

function Eventos({ onNavegar }) {
  const [aberto, setAberto] = useState(null);

  function toggleEvento(id) {
    setAberto(aberto === id ? null : id);
  }

  return (
    <div className={styles["eventos-tela"]}>
      <button className={styles["eventos-voltar"]} onClick={() => onNavegar("home")}>← voltar</button>
      <h2 className={styles["eventos-titulo"]}>Eventos</h2>
      {eventosMock.map((ev) => (
        <div key={ev.idEvento} className={styles["evento-card"]} onClick={() => toggleEvento(ev.idEvento)}>
          <div className={styles["evento-header"]}>
            <span>{ev.tema} — {ev.data}</span>
            <span className={`${styles["evento-seta"]} ${aberto === ev.idEvento ? styles["aberto"] : ""}`}>⌄</span>
          </div>
          {aberto === ev.idEvento && (
            <p className={styles["evento-descricao"]}>{ev.descricao}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Eventos;
