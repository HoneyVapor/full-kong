import { useContext } from "react";
import { PrincipalContext } from "./context/PrincipalContext";

import "./App.css";

function App() {
  const { actualPage } = useContext(PrincipalContext);

  return <>{actualPage}</>;
}

export default App;
