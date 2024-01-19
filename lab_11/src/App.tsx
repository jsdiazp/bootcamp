import "./App.css";
import MainCard from "./components/MainCard";

function App() {
  return (
    <>
      {/* 
        Formas de importar un componente

        Forma 1 (No recomendada) 
      */}
      {MainCard({
        categoría: "Automóviles",
        fecha: "Dic 7, 2023",
        título: "Rivian anuncia furgoneta comercial en EE.UU.",
      })}
      {/* 
        Forma 2  
      */}
      <MainCard
        categoría="Automóviles"
        fecha="Dic 7, 2023"
        título="Rivian anuncia furgoneta comercial en EE.UU."
      />
    </>
  );
}

export default App;
