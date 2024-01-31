import { CSSProperties } from "react";
import MainCard from "../components/MainCard";
import SecondaryCard1 from "../components/SecondaryCard1";
import SecondaryCard2 from "../components/SecondaryCard2";
import DJI from "../assets/images/dji.jpg";

const gapStyle: CSSProperties = {
  gap: 25,
};

function Hero(): React.ReactNode {
  return (
    <>
      <div id="hero" className="child-row parent-column" style={{ gap: 30 }}>
        <div
          className="child-row"
          style={{ fontSize: 60, fontStyle: "italic" }}
        >
          Mejor de la semana
        </div>
        <div className="child-row parent-row" style={gapStyle}>
          <MainCard
            date="Dic 7, 2023"
            category="Automóviles"
            title="Rivian anuncia furgoneta comercial en EE.UU."
          />
          <div className="child-column parent-column" style={gapStyle}>
            <SecondaryCard1
              category="Publicidad"
              title="iPhone 15 es el futuro"
              callToAction="¡Obtén el tuyo!"
            />
            <SecondaryCard2 image={DJI} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
