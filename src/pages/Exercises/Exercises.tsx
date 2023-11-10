import { useContext } from "react";
import { PrincipalContext } from "../../context/PrincipalContext";
import { datos } from "./datos";
import { ScrollExcersise } from "./ScrollExercise";

import "./Exercises.css";
import { CrearRutina } from "./CrearRutina";

export const Exercises = () => {
  const { handleChangeScreen } = useContext(PrincipalContext);

  return (
    <div className="cont-princ">
      {datos.map((item: any, index: number) => (
        <div key={index} className="cont-sec">
          <p>{item.tipo}</p>
          <div className="cont-scroll">
            <ScrollExcersise tipo={item.tipo} />
          </div>
        </div>
      ))}
      <div className="boton">
        <button
          onClick={() => {
            handleChangeScreen(<CrearRutina />);
          }}
        >
          <p>+</p>
        </button>
      </div>
    </div>
  );
};
