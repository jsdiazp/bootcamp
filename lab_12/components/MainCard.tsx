import Image from "next/image";
import styles from "./MainCard.module.css";

type MainCardProps = {
  date: string;
  category: "Automóviles";
  title: string;
  image: string;
};

/**
 * @return {React.ReactNode} Código valido para React.
 */
function MainCard(props: MainCardProps): React.ReactNode {
  return (
    <>
      <div
        id="main-card"
        className={`parent-row flex-grow ${styles.container}`}
      >
        <Image
          src={props.image}
          alt="Imagen representativa del artículo principal"
          className={styles.backgroundImage}
          fill={true}
        />
        <div className={`child-column ${styles.date}`}>{props.date}</div>
        <div className="child-column flex-grow"></div>
        <div className={`child-column parent-column ${styles.description}`}>
          <div className={`child-row ${styles.category}`}>{props.category}</div>
          <div className={`child-row ${styles.title}`}>{props.title}</div>
        </div>
      </div>
    </>
  );
}

export default MainCard;
