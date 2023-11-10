import { useState } from "react";
import { Row, Col, Slider, Progress } from "antd";
import { ScrollExcersise } from "../../pages/Exercises/ScrollExercise";
import { datos } from "../../pages/Exercises/datos";

import "./ExercisesSave.css";

export const Excersise = () => {
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedReps, setSelectedReps] = useState(1);

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
          <p>Volver</p>
          <div className="contadores">
            <span>Tiempo: </span>
            <span>Repeticiones: {selectedReps}</span>
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
              width={70}
            />
            <p id={selectedTime == 60 ? "active" : ""}>{selectedTime}s</p>
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
          {datos.map((item, index) =>
            index === 2 ? (
              <ScrollExcersise tipo={item.tipo} key={index} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
