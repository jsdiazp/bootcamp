import styles from "./SecondaryCard1.module.css";

type SecondaryCard1Properties = {
  category: "Publicidad";
  title: string;
  callToAction: string;
};

export default function SecondaryCard1(properties: SecondaryCard1Properties) {
  return (
    <div
      id="secondary-card-1"
      className={`parent-column flex-grow ${styles.container}`}
    >
      <div className={`child-row ${styles.category}`}>
        · {properties.category}
      </div>
      <div className={`child-row ${styles.title}`}>{properties.title}</div>
      <div className={`child-row ${styles.callToAction}`}>
        {properties.callToAction}
      </div>
    </div>
  );
}
