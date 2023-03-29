import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/ContextProvider';
import { requestManager } from '../helpers/export.js';
import ACTIONS from '../context/actions';
import config from '../config';

import expIco from "../assets/icons/explore.svg";

import { ScrollCard,Tags,FeedCard,SlideCard } from '../components/export';
import '../scss/css/explorebtn.css';

const { FETCH_DATA } = ACTIONS;

function Landing() {
  const {dispatch,state} = useContext(DataContext);
  const [loading,setLoading] = useState(false);
  const [query,setQuery] = useState({country:'in',category:'business'})
  const [explore,setExplore] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  
  const API_URL = config(query.country,query.category);

  /* search url
  https://newsapi.org/v2/everything?q=bitcoin&apiKey=6f02a21dd20f4853939d7e9029dad380
  */

  const fetchData = (url) => {
    setLoading(true)
    requestManager(url)
      .then((response) =>
        dispatch({ type: FETCH_DATA, payload: { articles:response.data.articles} })
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData(API_URL)
  },[API_URL]);

  useEffect(() => {
    function handleScroll() {
      const lastElement = document.querySelector('body > *:last-child');
      const lastElementRect = lastElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const isAtBottom =
        lastElementRect.top + lastElementRect.height <= viewportHeight;
      setAtBottom(isAtBottom);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(atBottom)

  return (
    <main className='landing'>
      <ScrollCard query={query} />
      <Tags setQuery={setQuery} query={query} />
      <FeedCard articles={state.articles} />
      <SlideCard />
      <div>
        {explore && (
          <button className={`explore-btn ${atBottom && 'up'}`} onClick={() => setExplore(!explore)}>
            <img src={expIco} alt='explore' />
            Explore
          </button>
        )}
      </div>
    </main>
  );
}

export default Landing;
