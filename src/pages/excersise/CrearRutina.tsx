import { useState, useContext } from "react";
import { Row, Col, Slider, Progress } from "antd";
import { ScrollExcersise } from "./ScrollExcersise";
import { PrincipalContext } from "../../context/PrincipalContext";
import { Excersise } from "./Excersise";
import "./CrearRutina.css";
import { datos } from "./datos";

export const CrearRutina = () => {
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedReps, setSelectedReps] = useState(1);
  const { handleChangePage } = useContext(PrincipalContext); 

  const titulos = ['Ejercicio tipo 1', 'Ejercicio tipo 2', 'Ejercicio tipo 3'];

  const onChangeReps = (newValue: number) => {
    setSelectedReps(newValue);
  };

  const onChangeTime = (newValue: number) => {
    setSelectedTime(newValue);
  };

  const sliderParams = {
    min: 1,
    max: 20,
  };

  return (
    <>
      <div className="exercises-final-container">
        <div className="exercises-final-topbar">
          <button onClick={() => {handleChangePage(<Excersise/>)}} className="botonsote">
            <p>Volver</p>
          </button>
          <div className="contadores">
            <span>Tiempo: <span id={selectedTime==60 ? ('active'):''} >{selectedTime}s</span></span>
            <span>Repeticiones: <span id={selectedReps==20 ? ('active'):''} >{selectedReps}</span></span>
          </div>

          {/* ProgressBar original */}
          <p id="exercises-slider">
            <Row>
              <Col span={12}>
                <Slider
                  min={sliderParams.min}
                  max={sliderParams.max}
                  onChange={onChangeReps}
                  value={typeof selectedReps === "number" ? selectedReps : 0}
                  className="slider"
                />
              </Col>
            </Row>
          </p>

          {/* Aquí va el ProgressBar independiente */}
          <div className="progress-circle">
            <Progress
              type="circle"
              percent={(selectedTime / 60) * 100}
              width={35}
              
            />
          </div>

          <Slider
            min={1}
            max={60}
            onChange={onChangeTime}
            value={selectedTime}
            className="slider pading-left"
          />
        </div>


        <div className="cont-scroll">
          {datos.map((item, index) => (
            index === 2 ? (
              <>
              <ScrollExcersise tipo={item.tipo} key={index} titulos={titulos}/>
              </>
            ) : null
          ))}
          
        </div>
      </div>
    </>
  );
};
