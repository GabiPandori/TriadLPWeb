import { useState } from "react";
import CampoTexto from "../../componentes/campoTexto/campoTexto";
import styles from "./cadastro.module.css";

function Cadastro({ onNavegar }) {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    dataNascimento: "",
    email: "",
    genero: "",
    senha: "",
  });

  function handleChange(campo, valor) {
    setForm({ ...form, [campo]: valor });
  }

  function handleCadastrar() {
    const algumVazio = Object.values(form).some((c) => c === "");
    if (algumVazio) {
      alert("Preencha todos os campos!");
      return;
    }
    onNavegar("home");
  }

  return (
    <div className={styles["cadastro-tela"]}>
      <h1 className={styles["cadastro-titulo"]}>Cadastro</h1>
      <CampoTexto label="Nome:" type="text" value={form.nome} onChange={(e) => handleChange("nome", e.target.value)} />
      <CampoTexto label="Telefone:" type="tel" value={form.telefone} onChange={(e) => handleChange("telefone", e.target.value)} />
      <CampoTexto label="Data de nascimento:" type="date" value={form.dataNascimento} onChange={(e) => handleChange("dataNascimento", e.target.value)} />
      <CampoTexto label="Email:" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
      <select
        className={styles["cadastro-select"]}
        value={form.genero}
        onChange={(e) => handleChange("genero", e.target.value)}
      >
        <option value="">Gênero:</option>
        <option value="Feminino">Feminino</option>
        <option value="Masculino">Masculino</option>
        <option value="Não binário">Não binário</option>
        <option value="Prefiro não informar">Prefiro não informar</option>
      </select>
      <CampoTexto label="Senha:" type="password" value={form.senha} onChange={(e) => handleChange("senha", e.target.value)} />
      <button className={styles["cadastro-botao"]} onClick={handleCadastrar}>
        cadastrar
      </button>
      <button className={styles["cadastro-link-voltar"]} onClick={() => onNavegar("login")}>
        ← voltar para login
      </button>
    </div>
  );
}

export default Cadastro;
