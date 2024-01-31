import Image from "next/image";
import Arrow from "@/assets/icons/arrow.svg";
import styles from "./SecondaryCard2.module.css";

type SecondaryCard2Properties = {
  image: string;
};

export default function SecondaryCard2(properties: SecondaryCard2Properties) {
  return (
    <div id="secondary-card-2" className={`parent-column ${styles.container}`}>
      <Image
        src={properties.image}
        alt="Imagen representativa del artículo"
        fill={true}
        className={styles.backgroundImage}
      />
      <div className="child-row flex-grow"></div>
      <div className="child-row parent-row">
        <div className="child-column flex-grow"></div>
        <div className={`child-column parent-row ${styles.callToAction}`}>
          <div className={`child-column ${styles.text}`}>Ver todo</div>
          <div className="child-column">
            <Image src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
