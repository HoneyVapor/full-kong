import React from 'react'
import { useContext } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";



export const Headers = () => {
  const { actualScreen } = useContext(PrincipalContext);


  return (
    <div className="princ-header">
      <h2>{actualScreen}</h2>
    </div>
  )
}
