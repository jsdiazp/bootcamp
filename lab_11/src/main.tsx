import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Inyecta el código de React en la etiqueta con ID root
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
