import React from 'react'

function RecommendedCard({details}) {
  const {place,price,code,img} = details;

  return (
    <div className="recommended-card">
      <div className="recommended-card__img-container">
        <img
          src={img}
          alt={place}
          title={place}
          className="recommended-card__img"
        />
      </div>
      <div className="recommended-card__details">
        <div>
          <h4>{place.split(",")[1]}</h4>
          <p>{code.toUpperCase()}</p>
        </div>
        <h2 title={price}>{price}</h2>
      </div>
    </div>
  );
}

export default RecommendedCard