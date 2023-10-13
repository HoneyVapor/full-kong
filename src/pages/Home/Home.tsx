import React, { useState, useEffect } from "react";
import { Headers } from "../../components/Headers";
import "./Home.css";
import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';

type CardScrollProps = {
  isActive: boolean;
  titulo: string;
  imagen: string; // Agregar prop "imagen"
};

const nombreComponente = 'Home'
const titulos = ['Ejercicio tipo 1', 'Ejercicio tipo 2', 'Ejercicio tipo 3'];
const imagenes = [img1, img2, img3]; // Array de imágenes correspondientes a los títulos


const CardScroll: React.FC<CardScrollProps> = ({ isActive, titulo, imagen }) => {

  return (
    <>
      <div className={`scroll-3d ${isActive ? "active" : ""}`}>
        <h2 className="card-titulo">{titulo}</h2>
        <img src={imagen} alt={titulo} /> 
      </div>
    </>
  );
};

export const Home = () => {
  const [activeScroll, setActiveScroll] = useState(0);
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    const newCardsList = titulos.map((titulo, index) => (
      <CardScroll
        key={index}
        isActive={index === activeScroll}
        titulo={titulo}
        imagen={imagenes[index]}
      />
    ));
    setCardsList(newCardsList);
  }, [activeScroll]);

  return (
    <> 
      <div className="row">
      
        <div className="col-md-12">
          <div className="container">
            <div
              className="card-scroll"
              onScroll={(e) => {
                const element = e.target as HTMLBRElement;
                const centerPosition =
                  element.scrollLeft + element.clientWidth / 2;
                const index = Math.floor(
                  (centerPosition / element.scrollWidth) * titulos.length
                );
                setActiveScroll(index);
              }}
            >
              {cardsList.map((card, index) => {
                return (
                  <div key={index}>{card}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
