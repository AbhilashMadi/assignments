import React,{useState, useMemo} from "react";
import { CarouselCard,RecommendedCard } from "./exports";
import travelSitesData from "../utils/json.js"
import Slider from "react-slick";

import {Link} from "react-router-dom";
import useWindowResize from "../utils/hooks/useWindowResize";

function Trips(){

  const [slides, setSlides] = useState(5.5);
  const {width} = useWindowResize();

  const setSlidsToShow = () => {
    if(width<1400 && width>=1200){
      return 4.5;
    } else if(width < 1000 && width >= 800){
      return 3;
    } else if(width < 600){
      return 1;
    }
  }


  useMemo(() => setSlides(setSlidsToShow() ?? 5), [width]);

  const settings_trips = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: (slides ?? 1),
    swipeToSlide: true,
  };

  const settings_recommendation = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: (slides ?? 5),
    swipeToSlide: true,
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