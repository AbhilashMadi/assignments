import React from "react";

function CarouselCard({details}) {
  const {img,place,price,} = details;
  
  return (
    <div className="carousel-card">
      <img src={img} alt={place} title={place} className="carousel-card__img"/>
      <div className="carousel-card__details">
        <h3>{place.split(",")[0]}</h3>
        <div>
          <p>FROM</p>
          <h2 title={price}>{price}</h2>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard