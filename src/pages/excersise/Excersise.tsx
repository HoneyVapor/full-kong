import { useContext } from "react";
import { datos } from './datos';
import { ScrollExcersise } from './ScrollExcersise';
import { PrincipalContext } from "../../context/PrincipalContext";
import {CrearRutina} from './CrearRutina'
import './Excersise.css'


export const Excersise = () => {

  const { handleChangePage } = useContext(PrincipalContext); 

  return (
    <div className='cont-princ'>
      {datos.map((item, index) => (
        <div key={index} className='cont-sec'>
          <p>{item.tipo}</p>
          <div className='cont-scroll'>
            <ScrollExcersise tipo={item.tipo} />
          </div>
        </div>
      ))}
      <div className='boton'>
        <button onClick={() => {handleChangePage(<CrearRutina/>)}}>
          <p>+</p>
        </button>
      </div>
      
    </div>
  );
}
