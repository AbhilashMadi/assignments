import React,{useContext} from 'react';
import Slider from "react-slick";

import { DataContext } from '../../context/ContextProvider';
import {ScrollCardItem} from "../export";
import "../../scss/css/scrollcard.css";

function ScrollCard({query}) {
  const {state} = useContext(DataContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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