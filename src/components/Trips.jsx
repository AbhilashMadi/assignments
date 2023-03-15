import React from "react";
import { CarouselCard,RecommendedCard } from "./exports";
import travelSitesData from "../utils/json.js"
import Slider from "react-slick";

import {Link} from "react-router-dom";

function Trips(){

  const settings_trips = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5.25,
    swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };

  const settings_recommendation = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
  };


  return (
    <section className="trips-showcase">
      <div className="trips-showcase__destinations">
        <div className="trips-showcase__headings">
          <div>
            <h3>Plan your next trip</h3>
            <h1>Most Popular Destinations</h1>
          </div>
          <Link to="/explore" className="trips-showcase__link">
            View all destinations <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
        <div className="carousel-container">
          {
            <Slider {...settings_trips}>
              {travelSitesData?.map((place, index) => {
                return <CarouselCard key={index} details={place} />;
              })}
            </Slider>
          }
        </div>
      </div>
      <div className="trips-showcase__recommended">
        <div className="trips-showcase__headings">
          <h1>Recommended Holidays</h1>
          <Link to="/offers" className="trips-showcase__link">
            View all destinations <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
        <div className="carousel-container">
          {
            <Slider {...settings_recommendation}>
              {travelSitesData?.map((place, index) => {
                return <RecommendedCard key={index} details={place} />;
              })}
            </Slider>
          }
        </div>
      </div>
    </section>
  );
}

export default Trips;