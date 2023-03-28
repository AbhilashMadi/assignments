import React from 'react'

import {getTimeLine} from "../../helpers/export";

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
    <div className='feed-card'>
      {/* <i className='fa fa-bookmark'></i> */}
      <div className='feed-card__content'>
        <p>{getTimeLine(publishedAt)}</p>
        <h4>{content}</h4>
        <p>{description}</p>
        <p>
          <span>{author}</span>
          <i className='fa fa-circle'></i>
          <span>{source.name}</span>
        </p>
      </div>
       <div className='feed-card__img'>
        <img src={urlToImage} alt={title}/>
       </div>
    </div>
  );
}

export default FeedCard;