
import { useContext } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";
import { NavBar } from "../../components/NavBar/NavBar";
import { Headers } from "../../components/Headers";

import "./Principal.css";



export const Principal = () => {
  const { actualScreen } = useContext(PrincipalContext);

  
  return (
    <>
    <Headers/>
    {actualScreen}


      <NavBar />
    </>
  );
};
