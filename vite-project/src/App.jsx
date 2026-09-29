import { useState } from "react";
import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Home from "./pages/home/home";
import Diario from "./pages/diario/diario";
import Eventos from "./pages/eventos/eventos";  


function App() {
  const [tela, setTela] = useState("login");

  function onNavegar(novaTela) {
    setTela(novaTela);
  }

  return (
    <div>
      {tela === "login"         && <Login       onNavegar={onNavegar} />}
      {tela === "cadastro"      && <Cadastro    onNavegar={onNavegar} />}
      {tela === "home"          && <Home        onNavegar={onNavegar} />}
      {tela === "frase"         && <FraseDoDia  onNavegar={onNavegar} />}
      {tela === "diario"        && <Diario      onNavegar={onNavegar} />}
      {tela === "eventos"       && <Eventos     onNavegar={onNavegar} />}
    </div>
  );
}

export default App;
