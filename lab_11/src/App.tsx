import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <div
        id="container"
        className="parent-column"
        style={{ padding: 60, gap: 40 }}
      >
        <Header
          brand="TechBlog."
          links={[
            { url: "#", name: "Artículos" },
            { url: "#", name: "Ser escritor" },
          ]}
        />
        <Hero />
      </div>
    </>
  );
}

export default App;
