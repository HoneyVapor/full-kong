import React, { useState, useEffect } from "react";
import "./Home.css";

type CardScrollProps = {
  isActive: boolean;
};

const CardScroll: React.FC<CardScrollProps> = ({ isActive }) => {
  return (
    <>
      <div className={`scroll-3d ${isActive ? "active" : ""}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut,
        veritatis, animi illum beatae voluptates tempora dolores numquam
        provident esse, tenetur facere tempore accusamus distinctio. Impedit
        nobis magni consectetur quo!
      </div>
    </>
  );
};


export const Home = () => {
  const [activeScroll, setActiveScroll] = useState(0);
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    const newCardsList = [
      <CardScroll isActive={activeScroll === 0 ? true : false} />,
      <CardScroll isActive={activeScroll === 1 ? true : false} />,
      <CardScroll isActive={activeScroll === 2 ? true : false} />,
      <CardScroll isActive={activeScroll === 3 ? true : false} />,
      <CardScroll isActive={activeScroll === 4 ? true : false} />,
      <CardScroll isActive={activeScroll === 5 ? true : false} />,
      <CardScroll isActive={activeScroll === 6 ? true : false} />,
    ];
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
                const element = e.target;
                const centerPosition =
                  element.scrollLeft + element.clientWidth / 2;
                const index = Math.floor(
                  (centerPosition / element.scrollWidth) * cardsList.length
                );
                setActiveScroll(index);
              }}
            >
              {cardsList.map((card, index) => {
                return (
                  <>
                    <div key={index}>{card}</div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};