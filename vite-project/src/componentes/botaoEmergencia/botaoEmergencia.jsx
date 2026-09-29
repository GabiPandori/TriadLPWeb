import styles from "./botaoEmergencia.module.css";

function BotaoEmergencia() {
  function handleEmergencia() {
    alert("Ligando para o contato de emergência...");
  }

  return (
    <button className={styles["botao-emergencia"]} onClick={handleEmergencia}>
      🚨 Contato de Emergência
    </button>
  );
}

export default BotaoEmergencia;
