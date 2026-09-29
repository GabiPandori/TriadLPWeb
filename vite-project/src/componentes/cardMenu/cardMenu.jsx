import styles from "./cardMenu.module.css";

function CardMenu({ icone, label, onClick }) {
  return (
    <button className={styles["card-menu"]} onClick={onClick}>
      <span className={styles["card-menu-icone"]}>{icone}</span>
      <span className={styles["card-menu-label"]}>{label}</span>
    </button>
  );
}

export default CardMenu;
