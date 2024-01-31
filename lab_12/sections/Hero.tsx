import MainCard from "@/components/MainCard";
import SecondaryCard1 from "@/components/SecondaryCard1";
import SecondaryCard2 from "@/components/SecondaryCard2";
import DJI from "@/assets/images/dji.jpg";
import Rivian from "@/assets/images/rivian.jpg";
import styles from "./Hero.module.css";

function Hero(): React.ReactNode {
  return (
    <>
      <div id="hero" className={`child-row parent-column ${styles.container}`}>
        <div className={`child-row ${styles.message}`}>Mejor de la semana</div>
        <div className={`child-row parent-row ${styles.gap} ${styles.main}`}>
          <MainCard
            image={Rivian.src}
            date="Dic 7, 2023"
            category="Automóviles"
            title="Rivian anuncia furgoneta comercial en EE.UU."
          />
          <div className={`child-column parent-column ${styles.gap}`}>
            <SecondaryCard1
              category="Publicidad"
              title="iPhone 15 es el futuro"
              callToAction="¡Obtén el tuyo!"
            />
            <SecondaryCard2 image={DJI.src} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
