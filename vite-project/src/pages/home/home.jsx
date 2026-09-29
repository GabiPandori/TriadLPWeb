import CardMenu from "../../componentes/cardMenu/cardMenu";
import styles from "./home.module.css";

const menuItens = [
  { icone: "💡", label: "Frase do Dia", tela: "frase" },
  { icone: "🧘", label: "Técnicas de Aterramento", tela: "tecnicas" },
  { icone: "📚", label: "Livro do Mês", tela: "livro" },
  { icone: "📔", label: "Diário", tela: "diario" },
  { icone: "📅", label: "Eventos", tela: "eventos" },
];

function Home({ onNavegar }) {
  return (
    <div className={styles["home-tela"]}>
      <h1 className={styles["home-titulo"]}>Triad</h1>
      {menuItens.map((item) => (
        <CardMenu
          key={item.tela}
          icone={item.icone}
          label={item.label}
          onClick={() => onNavegar(item.tela)}
        />
      ))}
    </div>
  );
}

export default Home;
