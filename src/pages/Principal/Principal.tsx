import { useContext } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";

import { NavBar } from "../../components/NavBar/NavBar";

import "./Principal.css";

export const Principal = () => {
  const { actualScreen } = useContext(PrincipalContext);
  return (
    <>
      {actualScreen}
      <NavBar />
    </>
  );
};
