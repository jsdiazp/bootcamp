import Value from "./components/Value";
import Icon from "./assets/Icon.svg";
import Image from "./assets/Image.png";

function App(): JSX.Element {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Value title="Calidad" image={Image} icon={Icon} />
      <Value title="Sostenibilidad" image={Image} icon={Icon} />
      <Value title="Seguridad" image={Image} icon={Icon} />
    </div>
  );
}

export default App;
