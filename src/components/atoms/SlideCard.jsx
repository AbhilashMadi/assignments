//in this case I can use react portals to render the swipe explore cards but I am using scss so it better if I can do it with class naming. React portals are better to use when we have pre-build components;

import React from 'react'
import Slider from 'react-slick';

import {getTimeLine} from "../../helpers/export";
import "../../scss/css/slidecard.css";
import {Link} from "react-router-dom";

import leftArrow from "../../assets/icons/leftarrow.svg";
import bookmark from "../../assets/icons/bookmark.svg";

function SlideCard({ explore, setExplore, articles, query }) {
  const { category } = query;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    intialSlide: 1,
    // beforeChange: function (currentSlide, nextSlide) {
    //   console.log('before change', currentSlide, nextSlide);
    // },
    // afterChange: function (currentSlide) {
    //   console.log('after change', currentSlide);
    // },
  };

  return (
    <main>
      <div className={`slides-container ${explore && 'up'}`}>
        <Slider {...settings}>
          {articles.map((article, index) => {
            return (
              <Slide
                article={article}
                setExplore={setExplore}
                category={category}
              />
            );
          })}
        </Slider>
      </div>
    </main>
  );
}

function Slide({ article, setExplore, category }) {
  const {
    author,
    content,
    description,
    publishedAt,
    source,
    title,
    url,
    urlToImage,
  } = article;

  const handleClose = () => {
    setExplore((pre) => !pre);
  };

  return (
    <div
      className='pop-up-card'
      style={{ backgroundImage: `url(${urlToImage})` }}>
      <div className='pop-up-card__actions'>
        <div>
          <button className='btn' onClick={handleClose}>
            <img src={leftArrow} alt='left arrow' />
          </button>
          <p className='badge'>{category}</p>
        </div>
        <img src={bookmark} alt='bookmark' />
      </div>
      <Link to={url} target="_blank" className='link'>
        <div className='pop-up-card__content'>
          <div>
            <p className='published'>{getTimeLine(publishedAt)}</p>
            <h3 className='heading'>{content}</h3>
            <p className='para'>{description}</p>
          </div>
          <div className='pop-up-card__details'>
            <span>{author}</span>
            <i className='fa fa-circle'></i>
            <span>{source.name}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SlideCard;