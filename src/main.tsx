import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrincipalContextProvider } from "./context/PrincipalContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrincipalContextProvider>
      <App />
    </PrincipalContextProvider>
  </React.StrictMode>
);
