import styles from "./campoTexto.module.css";

function CampoTexto({ label, type = "text", value, onChange }) {
  return (
    <input
      className={styles["campo-texto"]}
      type={type}
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  );
}

export default CampoTexto;
