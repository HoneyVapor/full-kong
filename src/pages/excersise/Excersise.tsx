
import { datos } from './datos';
import { ScrollExcersise } from './ScrollExcersise';
import './excersises.css'


export const Excersise = () => {

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
    </div>
  );
}
