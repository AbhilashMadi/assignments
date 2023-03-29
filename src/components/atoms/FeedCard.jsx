import React from 'react'
import { Link } from 'react-router-dom';

import {getTimeLine} from "../../helpers/export";
import "../../scss/css/feedcard.css";

function FeedCard({articles}) {
  return (
    <section className="feed">
      {
        articles.map((article,index) => {
          return(
            <Card key={index} article={article}/>
          )
        })
      }
    </section>
  )
}

function Card({article}){
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
  return (
    <Link to={url} className='link'>
      <div className='feed-card'>
        {/* <i className='fa fa-bookmark'></i> */}
        <div className='feed-card__content'>
          <p className='feed-card__timeline'>{getTimeLine(publishedAt)}</p>
          <h4 className='feed-card__heading'>{content}</h4>
          <p className='feed-card__description'>{description}</p>
          <p className='feed-card__details'>
            <span className='author'>{author}</span>
            <i className='fa fa-circle'></i>
            <span className='source'>{source.name}</span>
          </p>
        </div>
        <div className='feed-card__img' style={{backgroundImage:`url(${urlToImage})`}}>
        </div>
      </div>
    </Link>
  );
}

export default FeedCard;