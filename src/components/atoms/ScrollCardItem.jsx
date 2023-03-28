import { getTimeLine } from '../../helpers/export';
import { Link } from 'react-router-dom';

function ScrollCardItem({article,query}) {

  const {author,content,description,publishedAt,source,title,url,urlToImage} = article;
  const {country,category} = query;

  return (
    <div className='scroll-card'>
      <div
        className='scroll-card__container'
        style={{ backgroundImage: `url(${urlToImage})` }}>
        <div className='scroll-card__category'>
          <span>{category}</span>
          <i className='fa fa-bookmark' aria-hidden='true'></i>
        </div>
        <Link to={url} className='link' target='_blank'>
        <div className='scroll-card__content'>
          <div className='description'>
            <p>{getTimeLine(publishedAt)}</p>
            <h4>{content}</h4>
            <p>{description}</p>
          </div>
          <div className='source'>
            <p>
              {author}
              <i className='fa fa-circle' aria-hidden='true'></i>
              {source.name}
            </p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default ScrollCardItem;