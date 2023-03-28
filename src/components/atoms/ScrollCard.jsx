import React,{useContext} from 'react';
import Slider from "react-slick";

import { DataContext } from '../../context/ContextProvider';
import {ScrollCardItem} from "../export";
import "../../scss/css/scrollcard.css";

function ScrollCard({query}) {
  const {state} = useContext(DataContext);

      var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1.4,
            slidesToScroll: 1,
          }
        }
      ]
    };

  return (
    <section className='scroll-section'>
      <Slider {...settings}>
        {state.articles.map((article,index) => (
          <ScrollCardItem article={article} query={query} key={index}/>
        ))}
      </Slider>
    </section>
  );
}

export default ScrollCard