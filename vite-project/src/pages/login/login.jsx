import { useState } from "react";
import CampoTexto from "../../componentes/campoTexto/campoTexto";
import styles from "./login.module.css";

function Login({ onNavegar }) {
  const [form, setForm] = useState({ login: "", senha: "" });

  function handleChange(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  function handleEntrar() {
    if (!form.login || !form.senha) {
      alert("Preencha todos os campos!");
      return;
    }
    onNavegar("home");
  }

  return (
    <div className={styles["login-tela"]}>
      <h1 className={styles["login-titulo"]}>Login</h1>
      <div className={styles["login-icone"]}>👤</div>
      <CampoTexto
        label="Telefone/Email:"
        type="text"
        value={form.login}
        onChange={(e) => handleChange("login", e.target.value)}
      />
      <CampoTexto
        label="Senha:"
        type="password"
        value={form.senha}
        onChange={(e) => handleChange("senha", e.target.value)}
      />
      <button className={styles["login-botao"]} onClick={handleEntrar}>
        entrar
      </button>
      <button className={styles["login-link-cadastro"]} onClick={() => onNavegar("cadastro")}>
        cadastrar-se
      </button>
    </div>
  );
}

export default Login;
