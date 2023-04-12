import React, { useState } from "react";
import { useParams } from "react-router-dom";
import cardItems from "../../datas/logements";
import Vector from "../../assets/Vector.svg";
import "./gallery.css";

export default function Caroussel() {
  const { id } = useParams();
  const foundItem = cardItems.find((object) => object.id === id);
  const pictures = foundItem.pictures;

  const [current, setCurrent] = useState(0);


  const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };


  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };



  return (
    <div className="slider">
      
      {pictures.length > 1 && 
      <>
      <button className="vectorPrev">
        <img src={Vector} onClick={prevSlide} alt="fleche" />
      </button>
      <button className="vectorNext">
        <img src={Vector} onClick={nextSlide} alt="fleche" />
      </button>
      </>
}
      {pictures.map((img, index) => {
        return (
          <div key={index}>
            {index === current && (
              <img
                src={img}
                alt="Photos du logement"
                className="slider-image"
              />
            )}
            {pictures.length > 1 &&
            <>
            {index === current && (
              <strong className="image-number">
                {current + 1}/{pictures.length}
              </strong>
            )}
            </>
      }
          </div>
          
        );
      })}
    </div>
  );
}
